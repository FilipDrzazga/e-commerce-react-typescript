import { type FC } from "react";
import Picture from "./Picture";
import { homePageImages } from "../assets";

const JoinUs: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mb-12">
      <header className="flex items-center justify-center w-full h-8 mb-12">
        <h2 className="text-base">[join us]</h2>
      </header>
      <div className="mb-12">
        <p className="text-xl font-bold leading-5 text-center">
          AS WE CONTINUE TO SHAPE THE FUTURE OF FASION, WE INVITE YOU TO JOIN US AND EXPERIENCE THE INNOVATION IN OUR
          SNEAKERS
        </p>
      </div>
      <div className="grid items-center justify-center grid-cols-2 mb-12">
        <div className="flex flex-col items-center justify-center w-full col-start-1 col-end-2 text-white bg-black h-3/4">
          <span className="text-3xl font-bold">2024</span>
          <span className="text-3xl font-bold">©</span>
        </div>
        <Picture
          mobile={homePageImages.img5.mobile}
          tablet={homePageImages.img5.tablet}
          desktop={homePageImages.img5.desktop}
          alt={homePageImages.img5.alt}
          height="h-[35vh]"
          marginBottom="mb-[0]"
        />
      </div>
      <form className="flex flex-col items-center justify-center w-full gap-10">
        <label htmlFor="email" className="hidden">
          email
        </label>
        <input
          className="w-3/4 h-10 p-1 placeholder-black border-b border-black border-b-solid border-1 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <button className="w-full text-white bg-black h-14 text-whitetracking-widest" type="submit">
          subscribe
        </button>
      </form>
    </section>
  );
};

export default JoinUs;
