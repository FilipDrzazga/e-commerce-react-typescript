import { type FC } from "react";

const StaticNavigation: FC = () => {
  return (
    <section className="absolute top-50 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-10">
      <header className="w-screen h-auto">
        <nav>
          <ul className=" flex flex-col justif-center items-center">
            <li className="p-2 bg-secondary font-montserrat font-bold text-6xl text-primary">Man</li>
            <li className="p-2 bg-secondary font-montserrat font-bold text-6xl text-primary">Woman</li>
            <li className="p-2 bg-secondary font-montserrat font-bold text-6xl text-primary">Kids</li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default StaticNavigation;
