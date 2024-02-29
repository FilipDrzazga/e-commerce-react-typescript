import { type FC } from "react";
import { Logo } from "../assets";

const Navigation: FC = () => {
  return (
    <section className="w-full h-8 mb-12">
      <header className="h-full w-full">
        <nav className="grid grid-cols-4 grid-rows-1 h-full w-full">
          <a className="flex justify-center items-center">
            <Logo />
          </a>
          <ul className=" row-span-1 col-start-3 col-end-5 flex justify-evenly items-center  bg-black ">
            <li className="font-inconsolata text-sm tracking-wider text-white">menu</li>
            <li className="font-inconsolata text-sm tracking-wider text-white">[cart 0]</li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navigation;
