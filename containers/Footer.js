import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-bluetiful text-white">
            <div className="flex flex-row justify-center items-center px-10 py-6">
                <section className="w-2/12 text-right">
                        <Image src="/schoolstaq_white.svg" alt="SchoolStaq White logo" height="60" width="300"/>
                        <small className="text-bluetiful-light text-tiny">A Product of Velocity</small>
                </section>

                <section className="w-6/12 flex flex flex-row justify-center">
                    <ul className="flex flex-row">
                        <li className="mr-4"><a>Help</a></li>
                        <li className="mr-4"><a>Privacy Policy</a></li>
                    </ul>
                </section>

                <section className="w-3/12">
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
