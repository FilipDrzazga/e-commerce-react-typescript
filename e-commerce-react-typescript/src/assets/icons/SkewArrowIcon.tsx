import { FC } from "react";

type SkewArrowIconProps = {
  color?: string;
};

const SkewArrowIcon: FC<SkewArrowIconProps> = ({ color = "white" }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7L7 1M7 1V5.5M7 1H2" stroke={color} />
    </svg>
  );
};

export default SkewArrowIcon;
