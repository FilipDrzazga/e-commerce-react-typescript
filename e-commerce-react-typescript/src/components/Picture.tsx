import { type FC } from "react";
import { SkewArrow, Logo } from "../assets/images";

type PictureProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
  text?: string;
  logo?: boolean;
};

const Picture: FC<PictureProps> = ({ mobile, tablet, desktop, alt, text = false, logo = false }) => {
  return (
    <section className="relative w-full h-[85vh] mb-12">
      <picture>
        <source srcSet={mobile} media="(min-width: 375px)" />
        <source srcSet={tablet} media="(min-width: 680px)" />
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <img className="w-full h-full object-cover " src={desktop} alt={alt} />
      </picture>
      {text && (
        <div className="flex justify-center items-center gap-1 w-full absolute top-8 left-1/2 -translate-x-2/4  ">
          <p className="font-inconsolata text-white">{text}</p>
          <SkewArrow />
        </div>
      )}
      {logo && (
        <div className="absolute bottom-8 left-1/2 -translate-x-2/4">
          <Logo color="white" />
        </div>
      )}
    </section>
  );
};

export default Picture;
