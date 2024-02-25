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
        text="[see new collection]"
        logo={true}
      />
      <section className="w-fully mb-12">
        <header className="w-fully h-8 flex justify-center items-center mb-12">
          <h2 className="font-inconsolata text-base">[about]</h2>
        </header>
        <div>
          <p className="font-inconsolata font-bold text-3xl leading-7 text-center">
            A SNEAKER SOCIETY & CULTURE STORE CURATED BY SNEAKER HEADS IN CAIRO, EGYPT.
          </p>
        </div>
        <div>
          <Picture
            mobile={homePageImages.img3.mobile}
            tablet={homePageImages.img3.tablet}
            desktop={homePageImages.img3.desktop}
            alt={homePageImages.img3.alt}
          />
          <Picture
            mobile={homePageImages.img4.mobile}
            tablet={homePageImages.img4.tablet}
            desktop={homePageImages.img4.desktop}
            alt={homePageImages.img4.alt}
          />
          <Picture
            mobile={homePageImages.img5.mobile}
            tablet={homePageImages.img5.tablet}
            desktop={homePageImages.img5.desktop}
            alt={homePageImages.img5.alt}
          />
        </div>
        <div>
          <p className="font-inconsolata font-bold text-3xl leading-7 text-center">
            OUR FUTURISTICSNEAKERS COLLECTION IS A CELEBRATION OF MINIMALISM SOPHISTICATION AND CUTTING-EDGE DESIGN,
            STEP INTO A WORLD
          </p>
        </div>
      </section>
    </section>
  );
};

export default Home;
