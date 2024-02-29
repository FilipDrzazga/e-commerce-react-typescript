import { type FC } from "react";
import { Logo } from "../assets";

type InfinityTextProps = {
  sm?: boolean;
  lg?: boolean;
};

const InfinityText: FC<InfinityTextProps> = ({ sm, lg }) => {
  return (
    <>
      {lg && (
        <section className="w-full h-20 mb-12">
          <div className="flex items-center justify-start w-screen h-full gap-2 -ml-3 bg-black">
            <Logo width="156" height="45" color="white" />
            <p className="text-6xl leading-none text-white">©</p>
            <Logo width="156" height="45" color="white" />
            <p className="text-6xl leading-none text-white">©</p>
          </div>
        </section>
      )}
      {sm && (
        <section className="w-full h-16">
          <div className="flex items-end justify-start w-screen h-full gap-1 pb-2 -ml-3 bg-black">
            <Logo width="48" height="13" color="white" />
            <p className="text-sm leading-none text-white ">©</p>
            <Logo width="48" height="13" color="white" />
            <p className="text-sm leading-none text-white ">©</p>
            <Logo width="48" height="13" color="white" />
            <p className="text-sm leading-none text-white ">©</p>
            <Logo width="48" height="13" color="white" />
            <p className="text-sm leading-none text-white ">©</p>
            <Logo width="48" height="13" color="white" />
            <p className="text-sm leading-none text-white ">©</p>
            <Logo width="48" height="13" color="white" />
            <p className="text-sm leading-none text-white ">©</p>
          </div>
        </section>
      )}
    </>
  );
};

export default InfinityText;
