import { type FC } from "react";
import { SkewArrow } from "../assets/images";

const Footer: FC = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center -ml-3 pb-12 bg-black text-white font-inconsolata">
      <header className="w-screen h-8 flex justify-center items-center mb-12 mt-12">
        <h2>[contact]</h2>
      </header>
      <ul className="w-full flex flex-col justify-center items-center gap-4">
        <li>london 13:45</li>
        <li className="w-full flex justify-center items-center gap-2">
          instagram
          <SkewArrow />
        </li>
        <li className="w-full flex justify-center items-center gap-2">
          twitter
          <SkewArrow />
        </li>
        <li className="w-full flex justify-center items-center gap-2">
          mail
          <SkewArrow />
        </li>
      </ul>
    </section>
  );
};

export default Footer;
