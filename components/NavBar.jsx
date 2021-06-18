import Image from 'next/image'
import Link from 'next/link'

import Button from './Button'

const NavBar = ({onMobileNavClick}) => {
    return (
        <nav className="flex flex-row p-6 items-center">
                <Image src="/schoolstaq.svg" alt="Schoolstaq Logo" height="50" width="150"/>

                <div className="hidden md:block flex flex-row justify-center items-center ml-auto text-bluetiful">
                        <Link href="#about">
                            <a className="mr-6 hover:bg-capri p-2 rounded-md">
                                About
                            </a>
                        </Link>

                        <Link href="#features">
                            <a className="mr-6 hover:bg-capri p-2 rounded-md">
                                Features
                            </a>
                        </Link>  

                        <Button>
                           Book a demo
                        </Button>                                            
                </div>

                {/* <div className="block md:hidden ml-auto cursor-pointer" onClick={() => onMobileNavClick()}>
                    <img src="/svg/bars.svg" height="24px" width="24px"/>
                </div> */}

                <button className="block md:hidden border border-bluetiful rounded-md text-bluetiful p-2 focus:outline-none focus:ring-2 focus:ring-bluetiful focus:ring-opacity-50 ml-auto">
                    Book a demo
                </button>                
        </nav>
    );
}

export default NavBar;
