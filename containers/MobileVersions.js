
import Image from 'next/image'

const MobileVersions = () => {
    return (
        <section className="px-6 py-20 md:px-20 md:py-20">
                <h3 className="text-2xl md:text-4xl mb-10 md:text-center font-bold text-bluetiful">We're your strategic partner in scaling your school's advancement.</h3>

                <div className="flex flex-row justify-center items-center">
                        <div className="cursor-pointer">
                            <Image src="/svg/google_play.svg" height="70" width="300"/>
                        </div>

                        <div className="cursor-pointer hidden md:block">
                            <Image src="/svg/web.svg" height="70" width="300"/>
                        </div>

                        <div className="cursor-pointer">
                            <Image src="/svg/app_store.svg" height="70" width="300"/>
                        </div>                                                
                </div>
        </section>
    );
}

export default MobileVersions;
