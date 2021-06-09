
import Image from 'next/image'

const MobileVersions = () => {
    return (
        <section className="py-20 px-20">
                <h3 className="text-4xl mb-10 text-center font-bold text-bluetiful">We're your strategic partner <br/> in scaling your school's advancement.</h3>

                <div className="flex flex-row justify-center">
                        <div className="cursor-pointer">
                            <Image src="/svg/google_play.svg" height="70" width="300"/>
                        </div>

                        <div className="cursor-pointer">
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
