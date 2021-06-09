import { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos'

import {NavBar, Button} from "../components";


const Hero = () => {

    useEffect(() => {
        AOS.init()
    },[])

    return (
        <header className="relative bg-bluetiful-light h-screen bg-fixed bg-globe bg-no-repeat bg-center">
                <NavBar/>

                <div className="text-bluetiful text-center">
                    <h1 data-aos="fade-up" className="text-5xl font-bold">Better Automation For Your School</h1>
                    <p className="text-xl">We provide you with cloud-based infrastructure to 
                    safely secure <br/> the data of Africa’s next generation</p>

                    <div className="mt-10">
                        <Button>
                                Get Started
                        </Button>
                    </div>
                </div>

            {/* <Image src="/svg/search.svg" className="absolute left-0 top-0" height="auto" width="auto"/>                 */}

            <div className="flex flex-row text-bluetiful p-10 pt-2">
                    <div className="col-4/12 w-full flex justify-right">
                        <Image className="ml-auto" src="/svg/metrics_cards.svg" height="300" width="auto"/>
                    </div>

                    <div className="col-4/12 w-full m-auto flex items-center">
                        <div className="flex flex-row mr-10">
                                <div className="flex flex-row justify-center mr-4 items-center h-12 w-12 rounded-full bg-white shadow-md">
                                    <Image src="/svg/student.svg" height="24" width="auto"/>
                                </div>
                                <div>
                                    <span>1k+</span>
                                    <p className="text-tiny">Total student data <br/> under schoolstaq. </p>    
                                </div>
                        </div>

                        <div className="flex flex-row">
                                <div className="flex flex-row justify-center mr-4 items-center h-12 w-12 rounded-full bg-white shadow-md">
                                    <Image src="/svg/house.svg" height="24" width="auto"/>
                                </div>
                                <div>
                                    <span>1k+</span>
                                    <p className="text-tiny">Schools onboarded <br/> onto schoolstaq.</p>
                                </div>
                        </div> 
                    </div>
                    
                    <div className="col-4/12 w-full m-auto flex items-center">
                        <Image className="col-4/12" src="/svg/student_card.svg" height="300" width="auto"/>
                    </div>
            </div>
        
        </header>
    );
}

export default Hero;
