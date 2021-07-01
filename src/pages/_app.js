import { useEffect } from "react";
import { useRouter } from "next/router";
import "../assets/styles/fonts.css";
import "../assets/styles/globals.css";
import "../assets/styles/variables.module.scss";
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
mixpanel.init('0c9432426ca90d9b6a053d2e50a5e1e9');
import { init } from "emailjs-com";
init("user_aP1zRcAVwg7Q9wjWaCAbJ");


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  
  useEffect(() => {
    ReactGA.initialize('UA-158044174-5');
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);

      mixpanel.track('View Page', { page_name: url });


    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}







export default MyApp;
