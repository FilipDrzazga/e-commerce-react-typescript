import { type FC } from "react";
import Picture from "../components/Picture";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { homePageImages, Logo, SkewArrowIcon } from "../assets";

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
            OUR FUTURISTICSNEAKERS COLLECTION IS A CELEBRATION OF MINIMALISM SOPHISTICATION AND CUTTING-EDGE DESIGN,
            STEP INTO A WORLD
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full mb-12">
        <header className="flex items-center justify-center w-full h-8 mb-12">
          <h2>[new arrivals]</h2>
        </header>
        <ul className="grid grid-cols-2 gap-5 grid-rows-[1fr,200px]">
          <li className="col-span-2 row-span-1">
            <Picture
              mobile={homePageImages.img4.mobile}
              tablet={homePageImages.img4.tablet}
              desktop={homePageImages.img4.desktop}
              alt={homePageImages.img4.alt}
              belowImgTxt="Hello it's new shoes"
              marginBottom="mb-0"
            />
          </li>
          <li className="w-full h-full col-start-1 col-end-2 row-start-2 row-end-3">
            <Picture
              mobile={homePageImages.img4.mobile}
              tablet={homePageImages.img4.tablet}
              desktop={homePageImages.img4.desktop}
              alt={homePageImages.img4.alt}
              belowImgTxt="Hello it's new shoes"
              height="h-full"
            />
          </li>
          <li className="w-full h-full col-start-2 col-end-3 row-start-2 row-end-2">
            <Picture
              mobile={homePageImages.img4.mobile}
              tablet={homePageImages.img4.tablet}
              desktop={homePageImages.img4.desktop}
              alt={homePageImages.img4.alt}
              belowImgTxt="Hello it's new shoes"
              height="h-full"
            />
          </li>
        </ul>
        <button className="flex items-center justify-center gap-2 p-2 mt-20">
          [see all]
          <SkewArrowIcon color="black" />
        </button>
      </section>
      <section className="w-full h-16 mb-12">
        <div className="flex items-center justify-center w-screen h-full gap-2 -ml-3 bg-black">
          <Logo width="156" height="45" color="white" />
          <p className="mt-2 text-6xl font-bold text-white ">©2024</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full mb-12">
        <header className="flex items-center justify-center w-full h-8 mb-12">
          <h2 className="text-base">[join us]</h2>
        </header>
        <div className="mb-12">
          <p className="text-xl font-bold leading-5 text-center">
            AS WE CONTINUE TO SHAPE THE FUTURE OF FASION, WE INVITE YOU TO JOIN US AND EXPERIENCE THE INNOVATION IN OUR
            SNEAKERS
          </p>
        </div>
        <div className="grid items-center justify-center grid-cols-2 mb-12">
          <div className="flex flex-col items-center justify-center w-full col-start-1 col-end-2 text-white bg-black h-3/4">
            <span className="text-3xl font-bold">2024</span>
            <span className="text-3xl font-bold">©</span>
          </div>
          <Picture
            mobile={homePageImages.img5.mobile}
            tablet={homePageImages.img5.tablet}
            desktop={homePageImages.img5.desktop}
            alt={homePageImages.img5.alt}
            height="h-[35vh]"
            marginBottom="mb-[0]"
          />
        </div>
        <form className="flex flex-col items-center justify-center w-full gap-10">
          <label htmlFor="email" className="hidden">
            email
          </label>
          <input
            className="w-3/4 h-10 p-1 placeholder-black border-b border-black border-b-solid border-1 focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <button className="w-full text-white bg-black h-14 text-whitetracking-widest" type="submit">
            subscribe
          </button>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
