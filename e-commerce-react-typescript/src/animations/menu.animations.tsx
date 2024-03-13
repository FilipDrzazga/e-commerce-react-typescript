import { Variants } from "framer-motion";

const menuVariants: Variants = {
  open: { top: "1rem", transition: { type: "spring", bounce: 0.3 } },
  close: { top: "-16rem", transition: { type: "spring", bounce: 0.3 } },
};

const topBurgerVariants: Variants = {
  close: { y: 0, rotate: 0 },
  open: { y: 7, rotate: 39, transition: { rotate: { delay: 0.1 }, y: { duration: 0.1 } } },
};
const middleBurgerVariants: Variants = {
  close: { opacity: 1 },
  open: { opacity: 0 },
};
const bottomBurgerVariants: Variants = {
  close: { y: 0, rotate: 0 },
  open: { y: -7, rotate: -39, transition: { rotate: { delay: 0.1 }, y: { duration: 0.1 } } },
};

export { menuVariants, topBurgerVariants, middleBurgerVariants, bottomBurgerVariants };
