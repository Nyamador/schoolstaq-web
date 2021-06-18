import { useEffect, useState } from 'react'
import Head from 'next/head'
import Aos from 'aos'


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
    Aos.init();
  }, [])

  useEffect(() => {
      mobileMenuOpened ? ToggleBodyOverflow() : document.body.classList.remove(['overflow-hidden'])
  }, [mobileMenuOpened])

  return (
    <>
        <Head>
            <title>Schoolstaq - Automate your school with Africa’s nextgen cloud ERP Solution</title>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
            <meta name="description" content="Automate your school with Africa’s nextgen cloud ERP Solution"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="SchoolStaq"/>
            <meta property="og:locale" content="en_GH"/>
            <meta property="og:title" content="Automate Your School - SchoolStaq"/>
            <meta property="og:description" content="Join SchoolStaq today and automate your school's administration!"/>
            <meta property="og:image" content="/seo_banner.svg"/>
            <meta property="og:url" content="https://www.schoolstaq.com"/>
            <meta name="robots" content="index, follow"/>
            <meta name="theme-color" content="#0066f5"/>
{/* 
            <script type="application/ld+json">
          {{"@context" : "http://schema.org",
            "@type" : "Organization",
            "brand": "SchoolStaq",
            "description": "Automate your school with Africa’s nextgen cloud ERP Solution",
            "name" : "SchoolStaq",
            "alternateName": ["SchoolStaq Ghana", "SchoolStaq", "SchoolStaq.com", "SchoolStaq Africa"],
            "founders": [
              "Desmond Nyamador",
              "Ebenezer Vondee",
              "Jude Hodzo"
            ],
            "foundingDate": "2020-02",
            "foundingLocation": "Accra",
            "knowsAbout": "School ERP Software",
            "legalName": "Velocity Technologies.",
            "logo" : "'/schoolstaq.png",
            "url" : "https://www.schoolstaq.com",
            "sameAs" : [
              "https://www.facebook.com/schoolstaq",
              "https://www.twitter.com/schoolstaq",
              "https://instagram.com/schoolstaq",
              "https://www.linkedin.com/company/schoolstaq"
            ],
            "slogan": "Impacting the future of Africa's next generation."
        }}
      </script>             */}
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
                    <img className="ml-auto" src="/svg/times-circle.svg" height="24" width="24"/>
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
