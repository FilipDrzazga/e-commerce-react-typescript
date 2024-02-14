import { type FC } from "react";
import Picture from "../components/Picture";
import { homePageImages } from "../assets/images";

const Home: FC = () => {
  return (
    <section>
      <Picture
        mobile={homePageImages.img1.mobile}
        tablet={homePageImages.img1.tablet}
        desktop={homePageImages.img1.desktop}
        alt={homePageImages.img1.alt}
      />
      <Picture
        mobile={homePageImages.img2.mobile}
        tablet={homePageImages.img2.tablet}
        desktop={homePageImages.img2.desktop}
        alt={homePageImages.img2.alt}
      />
    </section>
  );
};

export default Home;
