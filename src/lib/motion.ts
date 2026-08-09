import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const revealViewport = { once: true, margin: "-80px" };

// Framer Motion's own prefers-reduced-motion handling can leave elements
// stuck at their "hidden" variant instead of snapping to "visible" (observed
// with framer-motion 12/13). We bypass it entirely and gate visibility
// ourselves via useReducedMotion(), so reduced-motion users always get the
// fully visible, static content — just without the scroll/mount animation.
export function reveal(reducedMotion: boolean | null) {
  return reducedMotion
    ? { initial: false, animate: "visible" as const }
    : { initial: "hidden", whileInView: "visible", viewport: revealViewport };
}

export function revealOnMount(reducedMotion: boolean | null) {
  return reducedMotion
    ? { initial: false, animate: "visible" as const }
    : { initial: "hidden", animate: "visible" as const };
}
