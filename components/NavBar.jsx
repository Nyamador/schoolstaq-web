import Image from 'next/image'
import Link from 'next/link'


const NavBar = () => {
    return (
        <nav className="flex flex-row p-6">
                <Image src="/schoolstaq.svg" alt="Schoolstaq Logo" height="32px" width="auto"/>

                <div className="flex flex-row justify-center items-center ml-auto">
                        <Link href="/">
                            <a className="mr-6">
                                About
                            </a>
                        </Link>

                        <Link href="/">
                            <a className="mr-6">
                                Features
                            </a>
                        </Link> 

                        <Link href="/">
                            <a>
                                Sign Up
                            </a>
                        </Link>                                                
                </div>
        </nav>
    );
}

export default NavBar;
