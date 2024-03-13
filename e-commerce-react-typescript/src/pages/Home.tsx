import { type FC } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Picture from "../components/Picture";
import About from "../components/About";
import NewArrivals from "../components/NewArrivals";
import InfinityText from "../components/InfinityText";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import { homePageImages } from "../assets";

const Home: FC = () => {
  return (
    <section className="relative w-screen px-3 pt-3">
      <Menu />
      <Header />
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
      <InfinityText lg={true} />
      <JoinUs />
      <Footer />
      <InfinityText sm={true} />
    </section>
  );
};

export default Home;
