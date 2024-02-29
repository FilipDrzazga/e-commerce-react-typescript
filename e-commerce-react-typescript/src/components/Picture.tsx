import { type FC } from "react";
import { SkewArrow, Logo } from "../assets";

type PictureProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
  imgTxt?: string;
  belowImgTxt?: string;
  logo?: boolean;
  height?: string;
  marginBottom?: string;
};

const Picture: FC<PictureProps> = ({
  mobile,
  tablet,
  desktop,
  alt,
  imgTxt,
  belowImgTxt,
  logo,
  height,
  marginBottom = "mb-12",
}) => {
  return (
    <div className={`relative w-full ${height} ${marginBottom}`}>
      <picture>
        <source srcSet={mobile} media="(min-width: 375px)" />
        <source srcSet={tablet} media="(min-width: 680px)" />
        <source srcSet={desktop} media="(min-width: 1024px)" />
        <img className="object-cover w-full h-full " src={desktop} alt={alt} />
      </picture>
      {imgTxt && (
        <div className="absolute flex items-center justify-center w-full gap-1 top-8 left-1/2 -translate-x-2/4 ">
          <p className="text-white font-inconsolata">{imgTxt}</p>
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
