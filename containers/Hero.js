import { useEffect } from "react";
import Image from "next/image";

import {NavBar, Button} from "../components";


const Hero = ({onMobileNavClick}) => {

    return (
        <header className="relative bg-bluetiful-light md:h-full pb-20 bg-fixed bg-globe bg-no-repeat bg-center">
                <NavBar onMobileNavClick={onMobileNavClick}/>

                <div className="text-bluetiful md:text-center p-4 md:p-0">
                    <h1 data-aos="fade-up" className="leading-snug md:p-4 md:leading-normal text-4xl md:text-5xl font-bold">Better Automation For Your School</h1>
                    <p className="text-md md:text-xl break-words">We provide you with cloud-based infrastructure to 
                    safely secure <br/> the data of Africa’s next generation</p>

                    <div className="mt-10 mb-10 md:mb-0">
                        <Button>
                                Get Started
                        </Button>
                    </div>
                </div>

            {/* <Image src="/svg/search.svg" className="absolute left-0 top-0" height="auto" width="auto"/>                 */}

            <div className="flex flex-col md:flex-row text-bluetiful p-4 md:px-10 md:pt-4 pt-2">
                    <div className="md:order-1 order-2 md:col-4/12 md:block hidden w-full flex justify-center md:justify-right">
                        <Image className="ml-auto" src="/svg/metrics_cards.svg" height="300" width="auto"/>
                    </div>

                    <div className="md:col-4/12 order-1 md:order-2 w-full m-auto flex md:flex-row flex-col items-center">
                        <div className="flex flex-row mr-auto mb-10">
                                <div className="flex flex-row justify-center mr-4 items-center h-12 w-12 rounded-full bg-white shadow-md">
                                    <Image src="/svg/student.svg" height="24" width="auto"/>
                                </div>
                                <div>
                                    <span className="font-bold text-2xl">1k+</span>
                                    <p className="md:text-tiny text-normal">Students using schoolstaq. </p>    
                                </div>
                        </div>

                        <div className="flex flex-row sm:mr-auto">
                                <div className="flex flex-row justify-center mr-4 items-center h-12 w-12 rounded-full bg-white shadow-md">
                                    <Image src="/svg/house.svg" height="24" width="auto"/>
                                </div>
                                <div>
                                    <span className="font-bold text-2xl">25+</span>
                                    <p className="md:text-tiny text-normal">Schools onboarded onto schoolstaq</p>
                                </div>
                        </div> 
                    </div>
                    
                    <div className="md:col-4/12 order-3 w-full w-full m-auto flex justify-center md:justify-right">
                        <Image className="col-4/12" src="/svg/student_card.svg" height="300" width="auto"/>
                    </div>
            </div>
        
        </header>
    );
}

export default Hero;
