import { type FC } from "react";

type PictureProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
};

const Picture: FC<PictureProps> = ({ mobile, tablet, desktop, alt }) => {
  return (
    <picture>
      <source srcSet={mobile} media="(min-width: 375px)" />
      <source srcSet={tablet} media="(min-width: 680px)" />
      <source srcSet={desktop} media="(min-width: 1024px)" />
      <img className="relative w-screen h-screen object-cover " src={desktop} alt={alt} />
    </picture>
  );
};

export default Picture;
