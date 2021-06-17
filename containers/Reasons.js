import Image from "next/image";

const Reasons = () => {
    return (
        <div className="px-6 py-20 md:px-20 md:py-20  text-bluetiful">
            <div>
                <h2 className="text-3xl font-bold md:text-center">What makes our platform one of a kind</h2>
            </div>

            <section className="md:flex md:flex-row">
                    <div className="md:w-6/12">
                        <Image src="/svg/feature_banner_temp.svg" width="auto" height="300"/>
                        <h3 className="text-2xl font-bold">Unique Identity</h3>
                        <p className="text-royal-dark-blue">
                        We provide you with cloud-based infrastructure to
                        safely secure the data of Africa’s next generation
                        We provide you with cloud-based infrastructure to
                        safely secure the data of Africa’s next generation
                        We provide you with cloud-based infrastructure to
                        safely secure the data of Africa’s next generation
                        </p>
                    </div>

                    <div className="md:w-6/12">
                        <Image src="/svg/feature_banner_temp.svg" width="auto" height="300"/>
                        <h3 className="text-2xl font-bold">Unique Identity</h3>
                        <p className="text-royal-dark-blue">
                        We provide you with cloud-based infrastructure to
                        safely secure the data of Africa’s next generation
                        We provide you with cloud-based infrastructure to
                        safely secure the data of Africa’s next generation
                        We provide you with cloud-based infrastructure to
                        safely secure the data of Africa’s next generation
                        </p>
                    </div>
            </section>            
        </div>
    );
}

export default Reasons;
