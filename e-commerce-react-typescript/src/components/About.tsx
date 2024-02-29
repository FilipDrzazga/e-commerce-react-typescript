import { type FC } from "react";
import Picture from "../components/Picture";
import { homePageImages } from "../assets";

const About: FC = () => {
  return (
    <section className="w-full mb-12">
      <header className="flex items-center justify-center w-full h-8 my-12">
        <h2>[about]</h2>
      </header>
      <div>
        <p className="text-3xl font-bold leading-6 text-center">
          A SNEAKER SOCIETY & CULTURE STORE CURATED BY SNEAKER HEADS IN CAIRO, EGYPT.
        </p>
      </div>
      <div>
        <Picture
          mobile={homePageImages.img3.mobile}
          tablet={homePageImages.img3.tablet}
          desktop={homePageImages.img3.desktop}
          alt={homePageImages.img3.alt}
          marginBottom="mb-[0]"
        />
        <Picture
          mobile={homePageImages.img4.mobile}
          tablet={homePageImages.img4.tablet}
          desktop={homePageImages.img4.desktop}
          alt={homePageImages.img4.alt}
          marginBottom="mb-[0]"
        />
        <Picture
          mobile={homePageImages.img5.mobile}
          tablet={homePageImages.img5.tablet}
          desktop={homePageImages.img5.desktop}
          alt={homePageImages.img5.alt}
          marginBottom="mb-[0]"
        />
      </div>
      <div>
        <p className="text-3xl font-bold leading-6 text-center">
          OUR FUTURISTICSNEAKERS COLLECTION IS A CELEBRATION OF MINIMALISM SOPHISTICATION AND CUTTING-EDGE DESIGN, STEP
          INTO A WORLD
        </p>
      </div>
    </section>
  );
};

export default About;
