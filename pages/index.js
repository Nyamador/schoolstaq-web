import Head from 'next/head'
import Hero from '../containers/Hero'
import Reasons from '../containers/Reasons'
import Footer from '../containers/Footer'
import MobileVersions from '../containers/MobileVersions'
import Features from '../containers/Features'
import ManageYourSchool from '../containers/ManageYourSchool'

export default function Home() {
  return (
    <>
        <Hero/>
        <Reasons/>
        <Features/>
        <ManageYourSchool/>
        <MobileVersions/>
        <Footer/>
    </>
  )
}
