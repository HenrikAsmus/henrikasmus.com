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
  var Kp       = 0.06;
  var Kd       = 0.35;
  var HEAD_R   = 7;
  var HEAD_OFF = HEAD_R * 0.9;

  var COLOR = '#121517';
  var NS    = 'http://www.w3.org/2000/svg';

  function mk(x, y, pin) { return { x: x, y: y, px: x, py: y, pinned: !!pin }; }
  function restLen(a, b) { var dx=b.x-a.x,dy=b.y-a.y; return Math.sqrt(dx*dx+dy*dy); }

  // ── Dynamic floor ────────────────────────────────────────────────────────────
  // Y_FLOOR = card top edge expressed in SVG coordinate units.
  // Since SVG element is position:absolute within the card with top:-16px,
  // the card top is always 16px below the SVG top — but we read it at runtime
  // so any layout reflow (zoom, font-size, resize) is handled correctly.

  function computeFloor() {
    var card = document.querySelector('.werk-card');
    if (!card) return 73;
    var sr = svg.getBoundingClientRect();
    var cr = card.getBoundingClientRect();
    if (sr.height < 1) return 73;
    // Offset 58 so head sits at card top border; feet land 58 SVG units below it.
    // At 1280 px this equals the original Y_FLOOR=73.
    return (cr.top - sr.top) * (80 / sr.height) + 58;
  }

  // Rest pose as offsets from Y_FLOOR (invariant under vertical translation).
  // Spec absolute values (Y_FLOOR=73): kneeL.y=58→Δ=15, pelvis.y=43.5→Δ=29.5 etc.
  function buildPositions(f) {
    return {
      footL:  mk(23.0, f + 0.0,  true),
      footR:  mk(37.0, f + 0.0,  true),
      kneeL:  mk(24.5, f - 15.0),
      kneeR:  mk(35.5, f - 15.0),
      pelvis: mk(30.0, f - 29.5),
      neck:   mk(30.0, f - 49.0),
      elbowL: mk(23.5, f - 37.7),
      elbowR: mk(36.5, f - 37.7),
      handL:  mk(21.5, f - 24.9),
      handR:  mk(38.5, f - 24.9),
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

  // Body struts only — arms stabilised by chirality correction (no arm struts).
  // Rest lengths are invariant under vertical translation, so precomputed once.
  var struts = [
    { a: p.footL, b: p.pelvis, rest: restLen(p.footL, p.pelvis), k: 0.50 },
    { a: p.footR, b: p.pelvis, rest: restLen(p.footR, p.pelvis), k: 0.50 },
    { a: p.footL, b: p.neck,   rest: restLen(p.footL, p.neck),   k: 0.35 },
    { a: p.footR, b: p.neck,   rest: restLen(p.footR, p.neck),   k: 0.35 },
  ];

  var prevCoMx = 30;
  all.forEach(function (q) { if (!q.pinned) q.px -= 0.4; });

  // ── Resize: reposition figure on updated floor ───────────────────────────────
  window.addEventListener('resize', function () {
    var nf = computeFloor();
    if (Math.abs(nf - Y_FLOOR) < 0.5) return;
    Y_FLOOR = nf;
    var fresh = buildPositions(Y_FLOOR);
    Object.keys(fresh).forEach(function (k) {
      var q = p[k], r = fresh[k];
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

  // Lateral hold: one-sided X constraint on elbows and hands.
  // When arms hang straight down (cross product = 0), the chirality mirror
  // correction is zero — these constraints provide the continuous outward force.
  // Elbow: 6.5 units from neck (matches spec). Hand: 8.5 units (spec: 21.5 = 30 - 8.5).
  function holdElbowOut(neck, elbow, isLeft) {
    var err = isLeft
      ? elbow.x - (neck.x - 6.5)   // positive when too far right
      : (neck.x + 6.5) - elbow.x;  // positive when too far left
    if (err > 0) elbow.x += (isLeft ? -1 : 1) * err * 0.5;
  }

  function holdHandOut(neck, hand, isLeft) {
    var err = isLeft
      ? hand.x - (neck.x - 8.5)
      : (neck.x + 8.5) - hand.x;
    if (err > 0) hand.x += (isLeft ? -1 : 1) * err * 0.3;
  }

  // Chirality guard: cross product of (neck→elbow) × (elbow→hand).
  // Left arm: cross should be negative (elbow left of neck→hand line).
  // Right arm: positive. Wrong sign → mirror elbow across the neck→hand line.
  function correctElbow(neck, elbow, hand, expectNeg) {
    var ex=elbow.x-neck.x,  ey=elbow.y-neck.y;
    var fx=hand.x -elbow.x, fy=hand.y -elbow.y;
    var cross = ex*fy - ey*fx;
    if (expectNeg ? cross<0 : cross>0) return;
    var lx=hand.x-neck.x, ly=hand.y-neck.y;
    var len2=lx*lx+ly*ly;
    if (len2<1e-9) return;
    var t=((elbow.x-neck.x)*lx+(elbow.y-neck.y)*ly)/len2;
    var px=neck.x+t*lx, py=neck.y+t*ly;
    elbow.x += 0.25*(2*px-2*elbow.x);
    elbow.y += 0.25*(2*py-2*elbow.y);
  }

  function integrate() {
    for (var i=0;i<all.length;i++) {
      var q=all[i]; if (q.pinned) continue;
      var vx=(q.x-q.px)*DAMPING, vy=(q.y-q.py)*DAMPING;
      q.px=q.x; q.py=q.y; q.x+=vx; q.y+=vy+GRAVITY;
    }
  }

  function solve() {
    for (var it=0;it<ITER;it++) {
      for (var c=0;c<C_main.length;c++)
        applyC(C_main[c][0],C_main[c][1],C_main[c][2],1.0);
      holdElbowOut(p.neck,p.elbowL,true);
      holdElbowOut(p.neck,p.elbowR,false);
      holdHandOut(p.neck,p.handL,true);
      holdHandOut(p.neck,p.handR,false);
      correctElbow(p.neck,p.elbowL,p.handL,true);
      correctElbow(p.neck,p.elbowR,p.handR,false);
      for (var s=0;s<struts.length;s++)
        applyC(struts[s].a,struts[s].b,struts[s].rest,struts[s].k);
      for (var i=0;i<all.length;i++)
        if (!all[i].pinned&&all[i].y>Y_FLOOR) all[i].y=Y_FLOOR;
      for (var f=0;f<C_feet.length;f++)
        applyC(C_feet[f][0],C_feet[f][1],C_feet[f][2],1.0);
    }
    for (var j=0;j<all.length;j++) {
      var q=all[j];
      if (!q.pinned&&q.y>=Y_FLOOR&&(q.y-q.py)>0) q.py=q.y;
    }
  }

  function applyBalance() {
    var sumX=0;
    for (var i=0;i<all.length;i++) sumX+=all[i].x;
    var coMx=sumX/all.length;
    var midX=(p.footL.x+p.footR.x)*0.5;
    var dx=coMx-midX, vx=coMx-prevCoMx;
    prevCoMx=coMx;
    if (Math.abs(dx)>Math.abs(p.footR.x-p.footL.x)) return;
    p.pelvis.x+=-(Kp*dx+Kd*vx);
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
    headEl.setAttribute('cx',p.neck.x.toFixed(1));
    headEl.setAttribute('cy',(p.neck.y-HEAD_OFF).toFixed(1));
    setLine(spineEl,p.neck,p.pelvis);
    qbez(armL,p.handL,p.elbowL,p.neck);
    qbez(armR,p.handR,p.elbowR,p.neck);
    qbez(legL,p.footL,p.kneeL,p.pelvis);
    qbez(legR,p.footR,p.kneeR,p.pelvis);
  }

  var acc=0, lastT=null, rafId=null;

  function loop(ts) {
    rafId=requestAnimationFrame(loop);
    if (!lastT) lastT=ts;
    acc+=Math.min(ts-lastT,200); lastT=ts;
    while (acc>=STEP_MS) { integrate(); solve(); applyBalance(); acc-=STEP_MS; }
    render();
  }

  rafId=requestAnimationFrame(loop);

  document.addEventListener('visibilitychange',function() {
    if (document.hidden) { cancelAnimationFrame(rafId); rafId=null; }
    else { lastT=null; rafId=requestAnimationFrame(loop); }
  });
})();
