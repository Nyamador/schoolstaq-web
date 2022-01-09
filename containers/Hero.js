import { useEffect } from "react";
import Image from "next/image";

import { NavBar, Button } from "../components";

const Hero = ({ onMobileNavClick, onGetStartedClick }) => {
  return (
    <header className="relative pb-20 bg-fixed bg-center bg-no-repeat bg-bluetiful-light md:h-full bg-globe">
      <NavBar onMobileNavClick={onMobileNavClick} />

      <div className="p-4 text-bluetiful md:text-center md:p-0">
        <h1 className="text-4xl font-bold leading-snug md:p-4 md:leading-normal md:text-5xl">
          Better Automation For Your School
        </h1>
        <p className="break-words text-md md:text-xl">
          We provide you with cloud-based infrastructure for administration of
          your institution.
        </p>

        <div className="mt-10 mb-10 md:mb-0">
          <Button
            className="w-full md:w-auto"
            onClick={() => onGetStartedClick()}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* <Image src="/svg/search.svg" className="absolute top-0 left-0" height="auto" width="auto"/>                 */}

      <div className="flex flex-col p-4 pt-2 md:flex-row text-bluetiful md:px-10 md:pt-4">
        <div className="flex justify-center order-2 hidden w-full md:order-1 md:col-4/12 md:block md:justify-right">
          <Image
            className="ml-auto"
            src="/svg/metrics_cards.svg"
            height="300"
            width="auto"
          />
        </div>

        <div className="flex flex-col items-center order-1 w-full m-auto md:col-4/12 md:order-2 md:flex-row">
          <div className="flex flex-row mb-10 mr-auto">
            <div className="flex flex-row items-center justify-center w-12 h-12 mr-4 bg-white rounded-full shadow-md">
              <Image src="/svg/student.svg" height="24" width="auto" />
            </div>
            <div>
              <span className="text-2xl font-bold">1k+</span>
              <p className="md:text-tiny text-normal">
                Students using schoolstaq.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-row mr-auto">
            <div className="flex flex-row items-center justify-center w-12 h-12 mr-4 bg-white rounded-full shadow-md">
              <Image src="/svg/house.svg" height="24" width="auto" />
            </div>
            <div>
              <span className="text-2xl font-bold">25+</span>
              <p className="md:text-tiny text-normal">
                Schools onboarded onto schoolstaq
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-3 w-full m-auto md:col-4/12 md:justify-right">
          <Image src="/svg/student_card_new.svg" height="300" width="400" />
        </div>
        {/* 
                    <div className="order-2 block md:hiddent">
                        <Image src="/svg/dashboard_home_vector.svg" height="300" width="auto" title="Dashboard homepage of Schoolstaq"/>
                    </div> */}
      </div>
    </header>
  );
};

export default Hero;
