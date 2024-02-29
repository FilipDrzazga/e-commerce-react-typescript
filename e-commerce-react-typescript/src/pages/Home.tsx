import { type FC } from "react";
import Navigation from "../components/Navigation";
import Picture from "../components/Picture";
import About from "../components/About";
import Footer from "../components/Footer";
import { homePageImages } from "../assets";
import NewArrivals from "../components/NewArrivals";
import InfinityText from "../components/InfinityText";
import JoinUs from "../components/JoinUs";

const Home: FC = () => {
  return (
    <section className="w-screen px-3 pt-3 font-inconsolata">
      <Navigation />
      <Picture
        mobile={homePageImages.img1.mobile}
        tablet={homePageImages.img1.tablet}
        desktop={homePageImages.img1.desktop}
        alt={homePageImages.img1.alt}
        imgTxt="[see new collection]"
        logo={true}
        height="h-[85vh]"
      />
      <About />
      <NewArrivals />
      <InfinityText />
      <JoinUs />
      <Footer />
    </section>
  );
};

export default Home;
