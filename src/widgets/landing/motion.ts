/** Налаштування анімацій лендінгу: поява при скролі та stagger */

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -40px 0px',
} as const;

const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.5, ease: easeSmooth },
} as const;

export const staggerContainer = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportOnce,
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  },
} as const;

export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeSmooth },
    },
  },
} as const;

export const heroTransition = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: easeSmooth },
  },
});
