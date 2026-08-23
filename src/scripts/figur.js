import { gsap } from 'gsap';

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 639px)').matches) return;

  var card = document.querySelector('.werk-card');
  var svg  = card && card.querySelector('.card-figur');
  if (!card || !svg) return;

  var legL  = svg.querySelector('.fig-leg-l');
  var legR  = svg.querySelector('.fig-leg-r');
  var shinL = svg.querySelector('.fig-shin-l');
  var shinR = svg.querySelector('.fig-shin-r');
  var armL  = svg.querySelector('.fig-arm-l');
  var armR  = svg.querySelector('.fig-arm-r');
  if (!legL || !legR || !shinL || !shinR || !armL || !armR) return;

  // CSS sets transform-box: fill-box + transform-origin for every joint.
  // GSAP only needs to set rotate — no svgOrigin required.
  //   fig-leg-r  → 0%   0% → (13,22) = hip
  //   fig-leg-l  → 100% 0% → (13,22) = hip
  //   fig-arm-r  → 0%   0% → (13,14) = shoulder
  //   fig-arm-l  → 100% 0% → (13,14) = shoulder
  //   fig-shin-* → 50%  0% → (N,25)  = knee

  var STEP     = 0.475; // s per half-step (double-step = 0.95 s)
  var LEG_AMP  = 28;    // ± hip rotation °
  var SHIN_AMP = 40;    // knee bend 0 → −SHIN_AMP (spec: 0 to −60, never positive)
  var ARM_AMP  = 14;    // arm swing half-amplitude °
  var BOB      = 2.0;   // px body rise at mid-stride

  // ── Starting pose (must equal end-of-cycle for seamless repeat) ───────────
  // Right leg back (stance), left leg forward (just landed).
  gsap.set(legR, { rotate:  LEG_AMP });
  gsap.set(legL, { rotate: -LEG_AMP });
  gsap.set(armR, { rotate: -ARM_AMP / 2 });
  gsap.set(armL, { rotate:  ARM_AMP / 2 });

  // ── Walk cycle ─────────────────────────────────────────────────────────────
  var tl = gsap.timeline({ repeat: -1, paused: true, defaults: { ease: 'sine.inOut' } });

  // HALF 1 (0 → STEP): right swings forward, left is stance
  tl
    .to(legR,  { rotate: -LEG_AMP,   duration: STEP }, 0)
    .to(legL,  { rotate:  LEG_AMP,   duration: STEP }, 0)
    .to(shinR, { rotate: -SHIN_AMP,  duration: STEP * 0.55, ease: 'power2.out' }, 0)
    .to(shinR, { rotate:  0,         duration: STEP * 0.45, ease: 'power2.in'  }, STEP * 0.55)
    .to(armR,  { rotate:  ARM_AMP / 2, duration: STEP }, 0.08)
    .to(armL,  { rotate: -ARM_AMP / 2, duration: STEP }, 0.08)
    .to(svg,   { y: -BOB, duration: STEP * 0.5, ease: 'sine.out' }, 0)
    .to(svg,   { y:  0,   duration: STEP * 0.5, ease: 'sine.in'  }, STEP * 0.5)

  // HALF 2 (STEP → 2·STEP): left swings forward, right is stance
    .to(legR,  { rotate:  LEG_AMP,   duration: STEP }, STEP)
    .to(legL,  { rotate: -LEG_AMP,   duration: STEP }, STEP)
    .to(shinL, { rotate: -SHIN_AMP,  duration: STEP * 0.55, ease: 'power2.out' }, STEP)
    .to(shinL, { rotate:  0,         duration: STEP * 0.45, ease: 'power2.in'  }, STEP * 1.55)
    .to(armR,  { rotate: -ARM_AMP / 2, duration: STEP }, STEP + 0.08)
    .to(armL,  { rotate:  ARM_AMP / 2, duration: STEP }, STEP + 0.08)
    .to(svg,   { y: -BOB, duration: STEP * 0.5, ease: 'sine.out' }, STEP)
    .to(svg,   { y:  0,   duration: STEP * 0.5, ease: 'sine.in'  }, STEP * 1.5);

  // ── Trigger: play as soon as card is in view ──────────────────────────────
  var obs = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { tl.play(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(card);
})();
