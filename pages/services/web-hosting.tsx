import React from "react";
import Head from "next/head";
import RootLayout from "../../components/Layouts/RootLayout";
import Hero from "../../components/Sections/Hero";

function WebHosting() {
  return (
    <>
      <Head>
        <title>
          Free Website Hosting - AI Powered Full Service Digital Marketing
          Agency
        </title>
        <meta
          name="description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta
          name="keywords"
          content="digital marketing, AI, full service, agency, technology, SEO, web design, content creation, marketing strategies"
        />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="CycoServe - AI Assisted Full Service Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta property="og:image" content="/assets/development.jpg" />
        <meta property="og:url" content="https://cycoserve.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content="CycoServe - AI Assisted Full Service Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta name="twitter:image" content="/assets/development.jpg" />
      </Head>
      <RootLayout>
        <Hero
          background={
            "/assets/Default_Radio_station_mixing_board_futuristically_powered_by_A_3.jpg"
          }
          title={"Empower Your Startup Journey with Free Website Hosting"}
          description={
            "Launch your startup with confidence and ease! Benefit from our complimentary website hosting, empowering you to showcase your vision to the world."
          }
          bptext={"Explore"}
          bpurl={"/about"}
          bstext={"Subscribe"}
          bsurl={"/contact-us"}
        />
      </RootLayout>
    </>
  );
}

export default WebHosting;
