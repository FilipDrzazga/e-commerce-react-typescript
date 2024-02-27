import { type FC } from "react";
import Picture from "../components/Picture";
import Navigation from "../components/Navigation";
import { homePageImages, Logo, SkewArrow } from "../assets/images";
import Footer from "../components/Footer";

const Home: FC = () => {
  return (
    <section className="w-screen px-3 pt-3">
      <Navigation />
      <Picture
        mobile={homePageImages.img1.mobile}
        tablet={homePageImages.img1.tablet}
        desktop={homePageImages.img1.desktop}
        alt={homePageImages.img1.alt}
        imgTxt="[see new collection]"
        logo={true}
      />
      <section className="w-full mb-12">
        <header className="w-full h-8 flex justify-center items-center mb-12">
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
      <section className="w-full flex flex-col justify-center items-center mb-12">
        <header className="w-full h-8 flex justify-center items-center mb-12">
          <h2 className="font-inconsolata text-base">[new arrivals]</h2>
        </header>
        <ul className="grid grid-cols-2 auto-rows-auto gap-x-5">
          <li className="col-span-2 row-span-1">
            <Picture
              mobile={homePageImages.img4.mobile}
              tablet={homePageImages.img4.tablet}
              desktop={homePageImages.img4.desktop}
              alt={homePageImages.img4.alt}
              belowImgTxt="Hello it's new shoes"
              hSize="40vh"
            />
          </li>
          <li className="col-start-1 col-end-2 row-start-2 row-end-2">
            <Picture
              mobile={homePageImages.img4.mobile}
              tablet={homePageImages.img4.tablet}
              desktop={homePageImages.img4.desktop}
              alt={homePageImages.img4.alt}
              belowImgTxt="Hello it's new shoes"
              hSize="30vh"
            />
          </li>
          <li className="col-start-2 col-end-3 row-start-2 row-end-2">
            <Picture
              mobile={homePageImages.img4.mobile}
              tablet={homePageImages.img4.tablet}
              desktop={homePageImages.img4.desktop}
              alt={homePageImages.img4.alt}
              belowImgTxt="Hello it's new shoes"
              hSize="30vh"
            />
          </li>
        </ul>
        <button className="flex justify-center items-center gap-2 p-2 font-inconsolata ">
          [see all]
          <SkewArrow color="black" />
        </button>
      </section>
      <section className="w-full h-16 mb-12">
        <div className="w-screen h-full flex justify-center items-center gap-2 -ml-3 bg-black">
          <Logo width="156" height="45" color="white" />
          <p className=" mt-2 text-white text-6xl font-bold font-inconsolata">©2024</p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center mb-12">
        <header className="w-full h-8 flex justify-center items-center mb-12">
          <h2 className="font-inconsolata text-base">[join us]</h2>
        </header>
        <div className="mb-12">
          <p className="font-inconsolata font-bold leading-5 text-2xl text-center">
            AS WE CONTINUE TO SHAPE THE FUTURE OF FASION, WE INVITE YOU TO JOIN US AND EXPERIENCE THE INNOVATION IN OUR
            SNEAKERS
          </p>
        </div>
        <div className="grid grid-cols-2 auto-rows-auto justify-center items-center mb-12">
          <div className="w-full h-3/4 col-start-1 col-end-2 flex flex-col justify-center items-center bg-black text-white font-inconsolata">
            <span className="font-inconsolata font-bold text-5xl">2024</span>
            <span className="font-inconsolata font-bold text-5xl">©</span>
          </div>
          <Picture
            mobile={homePageImages.img6.mobile}
            tablet={homePageImages.img6.tablet}
            desktop={homePageImages.img6.desktop}
            alt={homePageImages.img6.alt}
            hSize="30vh"
            margin="0"
          />
        </div>
        <form className="w-full flex flex-col justify-center items-center gap-10">
          <label htmlFor="email" className="hidden">
            email
          </label>
          <input
            className="w-3/4 h-10 p-1 border-b border-b-solid border-1 border-black focus:outline-none font-inconsolata placeholder-black"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <button className="w-full h-14 bg-black text-white font-inconsolata tracking-widest" type="submit">
            subscribe
          </button>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
