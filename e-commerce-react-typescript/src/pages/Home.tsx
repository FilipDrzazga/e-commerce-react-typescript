import { type FC } from "react";
import Picture from "../components/Picture";
import Navigation from "../components/Navigation";
import { homePageImages } from "../assets/images";

const Home: FC = () => {
  return (
    <section className="mx-3 my-2">
      <Navigation />
      <Picture
        mobile={homePageImages.img1.mobile}
        tablet={homePageImages.img1.tablet}
        desktop={homePageImages.img1.desktop}
        alt={homePageImages.img1.alt}
      />
    </section>
  );
};

export default Home;
