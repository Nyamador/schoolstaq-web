import {NavBar} from "../components";

const Hero = () => {
    return (
        <header className="bg-bluetiful-light h-screen">
                <NavBar/>

                <div className="text-bluetiful text-center">
                    <h1 className="text-4xl font-bold">Better Automation For Your School</h1>
                    <p>We provide you with cloud-based infrastructure to safely secure the data of Africa’s next generation</p>
                </div>
        </header>
    );
}

export default Hero;
