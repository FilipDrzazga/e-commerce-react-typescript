import { type FC } from "react";
import { SkewArrow, Logo } from "../assets/images";

type PictureProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
  imgTxt?: string;
  belowImgTxt?: string;
  logo?: boolean;
  hSize?: string;
  margin?: string;
};

const Picture: FC<PictureProps> = ({
  mobile,
  tablet,
  desktop,
  alt,
  imgTxt,
  belowImgTxt,
  logo,
  hSize = "85vh",
  margin = "3rem",
}) => {
  return (
    <div className={`relative max-w-full h-[${hSize}] mb-[${margin}]`}>
      <picture>
        <source srcSet={mobile} media="(min-width: 375px)" />
        <source srcSet={tablet} media="(min-width: 680px)" />
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <img className="w-full h-full object-cover " src={desktop} alt={alt} />
      </picture>
      {imgTxt && (
        <div className="flex justify-center items-center gap-1 w-full absolute top-8 left-1/2 -translate-x-2/4  ">
          <p className="font-inconsolata text-white">{imgTxt}</p>
          <SkewArrow />
        </div>
      )}
      {belowImgTxt && (
        <div>
          <p className="my-2 font-inconsolata">{belowImgTxt}</p>
        </div>
      )}
      {logo && (
        <div className="absolute bottom-8 left-1/2 -translate-x-2/4">
          <Logo color="white" />
        </div>
      )}
    </div>
  );
};

export default Picture;
