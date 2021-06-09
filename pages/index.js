import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Button from '../components/Button'
import Hero from '../containers/Hero'
import Reasons from '../containers/Reasons'
import Footer from '../containers/Footer'
import MobileVersions from '../containers/MobileVersions'
import Features from '../containers/Features'
import ManageYourSchool from '../containers/ManageYourSchool'

export default function Home() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const ToggleBodyOverflow = () => {
    window.scrollTo(0,0)
    document.body.classList.add('overflow-hidden')
    
  }
  useEffect(() => {
      mobileMenuOpened ? ToggleBodyOverflow() : document.body.classList.remove(['overflow-hidden'])
  }, [mobileMenuOpened])

  return (
    <>
        <Head>
            <title>Schoolstaq - Automate your school with Africa’s nextgen cloud ERP Solution</title>
        </Head>

        <main className="">
        <Hero onMobileNavClick={() => {mobileMenuOpened ? setMobileMenuOpened(false) : setMobileMenuOpened(true)}}/>
        <Reasons/>
        <Features/>
        <ManageYourSchool/>
        <MobileVersions/>
        <Footer/>
        
        <nav className={`${mobileMenuOpened ? "absolute" : "hidden"} transition-all top-0 bottom-0 bg-bluetiful h-screen w-full`}>
            <div className="p-10">
                 <div className="flex flex-row items-center justify-end" onClick={() => setMobileMenuOpened(false)}>
                    <Image className="ml-auto" src="/svg/times-circle.svg" height="24" width="24"/>
                    {/* <small className="text-white text-md ml-2">Close</small> */}
                 </div>
            </div>

            <div className="p-20 flex flex-col justify-center items-center">

                  <div className="p-10 transition-all">
                    <p className="text-4xl font-bold text-white cursor-pointer">About</p>
                  </div>

                  <div className="p-10 transition-all">
                    <p className="text-4xl font-bold text-white cursor-pointer">Features</p>
                  </div> 

                  <div className="p-4 transition-all">
                    <button className="text-4xl font-bold text-white bg-capri px-6 py-2 rounded-md">
                      Sign Up
                    </button>
                  </div>                                   
            </div>
        </nav>

        </main>
    </>
  )
}
