import { type FC } from "react";
import { Logo } from "../assets";

const Header: FC = () => {
  return (
    <section className="w-full h-8 mb-12">
      <header className="w-full h-full">
        <nav className="grid w-full h-full grid-cols-4 grid-rows-1">
          <a className="flex items-center justify-center">
            <Logo />
          </a>
        </nav>
      </header>
    </section>
  );
};

export default Header;
