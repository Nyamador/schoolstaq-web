import { useEffect, useState } from "react";
import Head from "next/head";

import Button from "../components/Button";
import Hero from "../containers/Hero";
import Reasons from "../containers/Reasons";
import Footer from "../containers/Footer";
import MobileVersions from "../containers/MobileVersions";
import Features from "../containers/Features";
import ManageYourSchool from "../containers/ManageYourSchool";

export default function Home() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [modalToggled, setModalToggled] = useState(false);

  const ToggleBodyOverflow = () => {
    window.scrollTo(0, 0);
    document.body.classList.add("overflow-hidden");
  };

  useEffect(() => {
    mobileMenuOpened || modalToggled
      ? ToggleBodyOverflow()
      : document.body.classList.remove(["overflow-hidden"]);
  }, [mobileMenuOpened, modalToggled]);

  return (
    <>
      <Head>
        <title>
          Schoolstaq - Automate your school with Africa’s nextgen cloud ERP
          Solution
        </title>
        <meta
          name="description"
          content="Automate your school with Africa’s nextgen cloud ERP Solution"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SchoolStaq" />
        <meta property="og:locale" content="en_GH" />
        <meta property="og:title" content="Automate Your School - SchoolStaq" />
        <meta
          property="og:description"
          content="Join SchoolStaq today and automate your school's administration!"
        />
        <meta property="og:image" content="/seo_banner.svg" />
        <meta property="og:url" content="https://www.schoolstaq.com" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0066f5" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8KWKZMT87N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8KWKZMT87N', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
        <Hero
          onGetStartedClick={() =>
            modalToggled ? setModalToggled(false) : setModalToggled(true)
          }
          onMobileNavClick={() => {
            mobileMenuOpened
              ? setMobileMenuOpened(false)
              : setMobileMenuOpened(true);
          }}
        />
        <Reasons />
        <Features />
        <ManageYourSchool />
        <MobileVersions />
        <Footer />

        <nav
          className={`${
            mobileMenuOpened ? "absolute" : "hidden"
          } transition-all top-0 bottom-0 bg-bluetiful h-screen w-full`}
        >
          <div className="p-10">
            <div
              className="flex flex-row items-center justify-end"
              onClick={() => setMobileMenuOpened(false)}
            >
              <img
                className="ml-auto"
                src="/svg/times-circle.svg"
                height="24"
                width="24"
              />
              {/* <small className="ml-2 text-white text-md">Close</small> */}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-20">
            <div className="p-10 transition-all">
              <p className="text-4xl font-bold text-white cursor-pointer">
                About
              </p>
            </div>

            <div className="p-10 transition-all">
              <p className="text-4xl font-bold text-white cursor-pointer">
                Features
              </p>
            </div>

            <div className="p-4 transition-all">
              <button
                onClick={() => setModalToggled(true)}
                className="px-6 py-2 text-4xl font-bold text-white rounded-md bg-capri"
              >
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </main>

      <div
        onClick={() => setModalToggled(!modalToggled)}
        className={`bg-black h-screen w-screen absolute top-0 bottom-0 opacity-50 ${
          !modalToggled && "hidden"
        }`}
      />
      <aside
        className={`w-11/12 md:w-5/12 h-3/4 m-auto absolute top-0 bottom-0 right-0 left-0 z-10 ${
          !modalToggled && "hidden"
        }`}
      >
        <div className="p-10 bg-white rounded-md">
          <div className="flex flex-row items-center">
            <p className="text-2xl font-bold text-bluetiful">Get In Touch</p>
            <div
              className="ml-auto cursor-pointer text-red"
              onClick={() => setModalToggled(false)}
            >
              <img src="/svg/close.svg" height="20" width="20" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="schoolName" className="mb-2 text-royal-dark-blue">
              School Name
            </label>
            <input
              placeholder="SchoolStaq International"
              className={`p-2 mb-4 border border-gray-200 w-full focus:ring-bluetiful rounded-md focus:outline-none focus:ring-2 text-black`}
              id="schoolName"
            ></input>
          </div>

          <div>
            <label
              htmlFor="contactPerson"
              className="mb-2 text-royal-dark-blue"
            >
              Contact Person
            </label>
            <input
              placeholder="John Doe"
              className={`p-2 mb-4 border border-gray-200 w-full focus:ring-bluetiful rounded-md focus:outline-none focus:ring-2 text-black`}
              id="contactPerson"
            ></input>
          </div>

          <div>
            <label htmlFor="telephone" className="mb-2 text-royal-dark-blue">
              Telephone
            </label>
            <input
              placeholder="023 099 1249"
              className={`p-2 mb-4 border border-gray-200 w-full focus:ring-bluetiful rounded-md focus:outline-none focus:ring-2 text-black`}
              id="telephone"
            ></input>
          </div>

          <div className="ml-auto">
            <Button>Submit</Button>
          </div>
        </div>
      </aside>
    </>
  );
}
