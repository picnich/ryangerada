import React from "react";
import App from "next/app";
import { useRouter } from 'next/router';
import { AnimatePresence } from "framer-motion";
import '../styles/globals.css'

import Grain from "../components/layouts/grain";

// The handler to smoothly scroll the element into view
const handExitComplete = () => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
};


// class MyApp extends App {
const MyApp = ({Component, pageProps}) => {
  const router = useRouter();

  // render() {
  //   const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <>
      <Grain />
      {/* <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}> */}
        <Component {...pageProps} key={router.route} />
      {/* </AnimatePresence> */}
      </>
    );
  }
// }

export default MyApp
