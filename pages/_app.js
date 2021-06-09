import { useEffect } from 'react'
import AOS from 'aos'
import '../styles/globals.css'

function Schoolstaq({ Component, pageProps }) {
  
  useEffect(() => {
      AOS.init({
        easing: "ease-out-cubic",
        once: true, 
        offset: 50
      })
  },[])

  return <Component {...pageProps} />
}

export default Schoolstaq
