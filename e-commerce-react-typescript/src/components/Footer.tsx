import { type FC } from "react";
import { SkewArrowIcon } from "../assets";

const Footer: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen -ml-3 text-white bg-black">
      <header className="flex items-center justify-center w-full h-8 mt-12 mb-12">
        <h2>[contact]</h2>
      </header>
      <ul className="flex flex-col items-center justify-center w-full gap-4">
        <li>london 13:45</li>
        <li className="flex items-center justify-center w-full gap-2">
          instagram
          <SkewArrowIcon />
        </li>
        <li className="flex items-center justify-center w-full gap-2">
          twitter
          <SkewArrowIcon />
        </li>
        <li className="flex items-center justify-center w-full gap-2">
          mail
          <SkewArrowIcon />
        </li>
      </ul>
    </section>
  );
};

export default Footer;
