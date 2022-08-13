/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/product.card.css";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);

   return (
      <>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         <Script src="/js/ion.rangeSlider.min.js"></Script>
         <Script src="/js/jquery-3.5.1.min.js" ></Script>
      </>
   );
}

export default MyApp;
