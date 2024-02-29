import { type FC } from "react";
import Picture from "./Picture";
import { homePageImages, SkewArrowIcon } from "../assets";

const NewArrivals: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mb-12">
      <header className="flex items-center justify-center w-full h-8 mb-12">
        <h2>[new arrivals]</h2>
      </header>
      <ul className="grid grid-cols-2 gap-5 grid-rows-[1fr,200px]">
        <li className="col-span-2 row-span-1">
          <Picture
            mobile={homePageImages.img4.mobile}
            tablet={homePageImages.img4.tablet}
            desktop={homePageImages.img4.desktop}
            alt={homePageImages.img4.alt}
            belowImgTxt="Hello it's new shoes"
            marginBottom="mb-0"
          />
        </li>
        <li className="w-full h-full col-start-1 col-end-2 row-start-2 row-end-3">
          <Picture
            mobile={homePageImages.img4.mobile}
            tablet={homePageImages.img4.tablet}
            desktop={homePageImages.img4.desktop}
            alt={homePageImages.img4.alt}
            belowImgTxt="Hello it's new shoes"
            height="h-full"
          />
        </li>
        <li className="w-full h-full col-start-2 col-end-3 row-start-2 row-end-2">
          <Picture
            mobile={homePageImages.img4.mobile}
            tablet={homePageImages.img4.tablet}
            desktop={homePageImages.img4.desktop}
            alt={homePageImages.img4.alt}
            belowImgTxt="Hello it's new shoes"
            height="h-full"
          />
        </li>
      </ul>
      <button className="flex items-center justify-center gap-2 p-2 mt-20">
        [see all]
        <SkewArrowIcon color="black" />
      </button>
    </section>
  );
};

export default NewArrivals;
