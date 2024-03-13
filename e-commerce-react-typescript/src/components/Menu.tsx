import { type FC, useState } from "react";
import { motion } from "framer-motion";
import { menuVariants, topBurgerVariants, middleBurgerVariants, bottomBurgerVariants } from "../animations";

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const displayMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.section
      variants={menuVariants}
      animate={isOpen ? "open" : "close"}
      onClick={displayMenu}
      className="fixed z-10 w-auto h-auto -translate-x-1/2 -top-58 left-1/2"
    >
      <div className="relative text-white">
        <svg width="295" height="287" viewBox="0 0 295 287" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.501 0C22.8867 0 0.500977 22.3857 0.500977 50V200.556C0.500977 228.17 22.8867 250.556 50.5009 250.556H74.9488C81.3123 251.842 84.7404 256.673 85.7552 262.569V267C85.7552 278.046 94.7095 287 105.755 287H189.406C200.452 287 209.406 278.046 209.406 267V262.568C210.421 256.672 213.849 251.842 220.212 250.556H244.66C272.274 250.556 294.66 228.17 294.66 200.556V50C294.66 22.3858 272.274 0 244.66 0H50.501Z"
            fill="black"
          />
        </svg>
        <ul className="absolute flex flex-col flex-wrap items-start justify-start w-full h-full gap-3 p-8 pt-6 pl-12 text-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <li className="w-full pb-1 font-light border-b border-white border-solid">man</li>
          <li className="w-full pb-1 font-light border-b border-white border-solid">woman</li>
          <li className="w-full pb-1 font-light border-b border-white border-solid">kids</li>
          <li className="w-full pb-1 font-light border-b border-white border-solid">cart[0]</li>
        </ul>
        <button className="absolute bottom-0 flex flex-col justify-between w-auto h-4 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <motion.div
            variants={topBurgerVariants}
            animate={isOpen ? "open" : "close"}
            className="w-6 h-[2px] bg-white rounded"
          ></motion.div>
          <motion.div
            variants={middleBurgerVariants}
            animate={isOpen ? "open" : "close"}
            className="w-6 h-[2px] bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomBurgerVariants}
            animate={isOpen ? "open" : "close"}
            className="w-6 h-[2px] bg-white rounded origin"
          ></motion.div>
        </button>
      </div>
    </motion.section>
  );
};

export default Menu;
