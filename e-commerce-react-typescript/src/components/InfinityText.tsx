import { type FC } from "react";
import { Logo } from "../assets";

const InfinityText: FC = () => {
  return (
    <section className="w-full h-16 mb-12">
      <div className="flex items-center justify-center w-screen h-full gap-2 -ml-3 bg-black">
        <Logo width="156" height="45" color="white" />
        <p className="mt-2 text-6xl font-bold text-white ">©2024</p>
      </div>
    </section>
  );
};

export default InfinityText;
