export const initSmoothScrolling = () => {
  const lenis = new Lenis({ lerp: 0.1 });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};