(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 640) return;

  var svg = document.querySelector('.card-figur');
  if (!svg) return;

  var GRAVITY  = 0.35;
  var DAMPING  = 0.98;
  var ITER     = 30;
  var STEP_MS  = 16.67;
  var HEAD_R   = 7;
  var HEAD_OFF = HEAD_R * 0.9;

  var PERIOD    = 3400;  // ms — right-foot swing period
  var SWING_AMP = 3.0;   // SVG units lateral amplitude
  var physicsT  = 0;

  var COLOR = '#121517';
  var NS    = 'http://www.w3.org/2000/svg';

  function mk(x, y, pin) { return { x: x, y: y, px: x, py: y, pinned: !!pin }; }
  function restLen(a, b) { var dx=b.x-a.x,dy=b.y-a.y; return Math.sqrt(dx*dx+dy*dy); }

  // Card top edge in SVG coordinate units — pelvis sits here.
  function computeFloor() {
    var card = document.querySelector('.werk-card');
    if (!card) return 16;
    var sr = svg.getBoundingClientRect();
    var cr = card.getBoundingClientRect();
    if (sr.height < 1) return 16;
    return (cr.top - sr.top) * (80 / sr.height);
  }

  var PELVIS_X = 30.0;

  // Sitting pose — all positions relative to pelvis at (PELVIS_X, f).
  // Pelvis is pinned on the card top edge; legs hang below.
  function buildPositions(f) {
    var px = PELVIS_X;
    return {
      pelvis: mk(px + 0.0, f + 0.0,  true),
      neck:   mk(px + 0.5, f - 19.5),
      elbowL: mk(px - 6.5, f -  8.0),
      elbowR: mk(px + 7.5, f -  8.0),
      handL:  mk(px - 8.0, f +  4.0),
      handR:  mk(px + 9.0, f +  3.0),
      kneeL:  mk(px - 2.0, f + 14.5),
      kneeR:  mk(px + 3.0, f + 14.0),
      footL:  mk(px - 4.0, f + 29.0),
      footR:  mk(px + 5.0, f + 28.5),
    };
  }

  var Y_FLOOR = computeFloor();
  var p = buildPositions(Y_FLOOR);
  var all = Object.values(p);

  // ── Constraints ──────────────────────────────────────────────────────────────

  var C_main = [
    [p.neck,   p.pelvis,  restLen(p.neck,   p.pelvis)],
    [p.neck,   p.elbowL,  restLen(p.neck,   p.elbowL)],
    [p.elbowL, p.handL,   restLen(p.elbowL, p.handL) ],
    [p.neck,   p.elbowR,  restLen(p.neck,   p.elbowR)],
    [p.elbowR, p.handR,   restLen(p.elbowR, p.handR) ],
    [p.pelvis, p.kneeL,   restLen(p.pelvis, p.kneeL) ],
    [p.pelvis, p.kneeR,   restLen(p.pelvis, p.kneeR) ],
  ];

  var C_feet = [
    [p.kneeL, p.footL, restLen(p.kneeL, p.footL)],
    [p.kneeR, p.footR, restLen(p.kneeR, p.footR)],
  ];

  // Cross-body struts — rest lengths from sitting pose, stiffness per body region.
  var struts = [
    { a: p.pelvis, b: p.neck,  rest: restLen(p.pelvis, p.neck),  k: 0.50 },
    { a: p.neck,   b: p.handL, rest: restLen(p.neck,   p.handL), k: 0.35 },
    { a: p.neck,   b: p.handR, rest: restLen(p.neck,   p.handR), k: 0.35 },
    { a: p.pelvis, b: p.footL, rest: restLen(p.pelvis, p.footL), k: 0.06 },
    { a: p.pelvis, b: p.footR, rest: restLen(p.pelvis, p.footR), k: 0.06 },
  ];

  // ── Resize ───────────────────────────────────────────────────────────────────
  window.addEventListener('resize', function () {
    var nf = computeFloor();
    if (Math.abs(nf - Y_FLOOR) < 0.5) return;
    Y_FLOOR = nf;
    var fresh = buildPositions(Y_FLOOR);
    Object.keys(fresh).forEach(function (key) {
      var q = p[key], r = fresh[key];
      q.x = r.x; q.y = r.y; q.px = r.x; q.py = r.y;
    });
  });

  // ── Physics ──────────────────────────────────────────────────────────────────

  function applyC(a, b, r, k) {
    var dx=b.x-a.x, dy=b.y-a.y;
    var dist=Math.sqrt(dx*dx+dy*dy)||1e-9;
    var corr=(dist-r)/dist;
    if (a.pinned&&b.pinned) return;
    if (a.pinned)       { b.x-=dx*corr*k; b.y-=dy*corr*k; }
    else if (b.pinned)  { a.x+=dx*corr*k; a.y+=dy*corr*k; }
    else { var h=corr*0.5*k; a.x+=dx*h; a.y+=dy*h; b.x-=dx*h; b.y-=dy*h; }
  }

  function integrate() {
    for (var i=0; i<all.length; i++) {
      var q=all[i]; if (q.pinned) continue;
      var vx=(q.x-q.px)*DAMPING, vy=(q.y-q.py)*DAMPING;
      q.px=q.x; q.py=q.y; q.x+=vx; q.y+=vy+GRAVITY;
    }
  }

  // Kinematic swing: drive footR.x along easeInOutSine path (sin = natural pendulum easing).
  function driveSwing() {
    var phase = (physicsT % PERIOD) / PERIOD;
    var swing = Math.sin(2 * Math.PI * phase) * SWING_AMP;
    p.footR.x  = PELVIS_X + 5.0 + swing;
    p.footR.px = p.footR.x;  // zero x-velocity so integrate doesn't fight the drive
  }

  function solve() {
    for (var it=0; it<ITER; it++) {
      for (var c=0; c<C_main.length; c++)
        applyC(C_main[c][0], C_main[c][1], C_main[c][2], 1.0);
      for (var s=0; s<struts.length; s++)
        applyC(struts[s].a, struts[s].b, struts[s].rest, struts[s].k);
      for (var f=0; f<C_feet.length; f++)
        applyC(C_feet[f][0], C_feet[f][1], C_feet[f][2], 1.0);
    }
  }

  // ── SVG elements ─────────────────────────────────────────────────────────────

  function mkPath() {
    var el=document.createElementNS(NS,'path');
    el.setAttribute('stroke',COLOR); el.setAttribute('stroke-width','3.5');
    el.setAttribute('stroke-linecap','round'); el.setAttribute('stroke-linejoin','round');
    el.setAttribute('fill','none'); svg.appendChild(el); return el;
  }
  function mkLine() {
    var el=document.createElementNS(NS,'line');
    el.setAttribute('stroke',COLOR); el.setAttribute('stroke-width','3.5');
    el.setAttribute('stroke-linecap','round'); el.setAttribute('stroke-linejoin','round');
    svg.appendChild(el); return el;
  }

  var legL=mkPath(), legR=mkPath(), spineEl=mkLine(), armL=mkPath(), armR=mkPath();

  var headEl=document.createElementNS(NS,'circle');
  headEl.setAttribute('fill',COLOR); headEl.setAttribute('stroke','none');
  headEl.setAttribute('r',String(HEAD_R)); svg.appendChild(headEl);

  function setLine(el,a,b) {
    el.setAttribute('x1',a.x.toFixed(1)); el.setAttribute('y1',a.y.toFixed(1));
    el.setAttribute('x2',b.x.toFixed(1)); el.setAttribute('y2',b.y.toFixed(1));
  }
  function qbez(el,P0,ctrl,P2) {
    el.setAttribute('d',
      'M '+P0.x.toFixed(1)+' '+P0.y.toFixed(1)+
      ' Q '+ctrl.x.toFixed(1)+' '+ctrl.y.toFixed(1)+
      ' '+P2.x.toFixed(1)+' '+P2.y.toFixed(1));
  }

  function render() {
    headEl.setAttribute('cx', p.neck.x.toFixed(1));
    headEl.setAttribute('cy', (p.neck.y - HEAD_OFF).toFixed(1));
    setLine(spineEl, p.neck, p.pelvis);
    qbez(armL, p.handL, p.elbowL, p.neck);
    qbez(armR, p.handR, p.elbowR, p.neck);
    qbez(legL, p.footL, p.kneeL,  p.pelvis);
    qbez(legR, p.footR, p.kneeR,  p.pelvis);
  }

  var acc=0, lastT=null, rafId=null;

  function loop(ts) {
    rafId = requestAnimationFrame(loop);
    if (!lastT) lastT = ts;
    acc += Math.min(ts - lastT, 200); lastT = ts;
    while (acc >= STEP_MS) {
      physicsT += STEP_MS;
      integrate();
      driveSwing();
      solve();
      acc -= STEP_MS;
    }
    render();
  }

  rafId = requestAnimationFrame(loop);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { cancelAnimationFrame(rafId); rafId = null; }
    else { lastT = null; rafId = requestAnimationFrame(loop); }
  });
})();
