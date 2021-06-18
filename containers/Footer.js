import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-bluetiful text-white">
            <div className="flex flex-col md:flex-row justify-center items-center px-4 py-6 md:px-10 md:py-8">
                <section className="hidden md:block md:w-2/12 mb-4 md:mb-0 text-right">
                        <Image src="/schoolstaq_white.svg" alt="SchoolStaq White logo" height="60" width="300"/>
                        <small className="text-capri text-sm">A Product of Velocity</small>
                </section>

                <section className="md:hidden block md:w-2/12 mb-4 flex flex-col items-center">
                        <Image src="/schoolstaq_white.svg" alt="SchoolStaq White logo" height="30" width="300"/>
                        <small className="text-capri text-sm">A Product of Velocity</small>
                </section>

                <section className="md:w-7/12 mb-4 md:mb-0 flex flex flex-row justify-center items-center">
                    <ul className="text-tiny md:text-normal flex flex-row justify-center items-center">
                        <li className="mr-4"><a>Help</a></li>
                        <li className="mr-4"><a>Privacy Policy</a></li>
                        {/* <li className="mr-4"><a>E-learning <span className="text-tiny">(Coming Soon )</span></a></li>
                        <li className="mr-4"><a>Online Store<span className="text-tiny">(Coming Soon )</span></a></li> */}
                    </ul>
                </section>

                <section className="md:w-2/12">
                    <div className="flex flex-row justify-end">
                        <div className="mr-2">
                            <Image src="/svg/facebook_white.svg" alt="SchoolStaq Facebook" height="25" width="25"/>
                        </div>

                        <div className="mr-2">
                            <Image src="/svg/twitter_white.svg" alt="SchoolStaq Twitter" height="25" width="25"/>
                        </div>

                        <div>
                            <Image src="/svg/instagram_white.svg" alt="SchoolStaq Instagram" height="25" width="25"/>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
