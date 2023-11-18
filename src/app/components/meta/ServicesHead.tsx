"use client";

import Head from "next/head";

const ServicesHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Explore EZY Taxis' comprehensive taxi services in Gatwick, Crawley, and Horsham. From reliable airport transfers to local transportation and special occasions, we've got your travel needs covered."
      />
      <meta
        name="keywords"
        content="EZY Taxis services, Gatwick airport transfer, Crawley local taxi, Horsham special occasion transportation, Reliable taxi services, Online taxi booking"
      />
      <meta name="author" content="EZY Taxis" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="EZY Taxis - Comprehensive Taxi Services in Gatwick, Crawley, and Horsham"
      />
      <meta
        property="og:description"
        content="Explore EZY Taxis' comprehensive taxi services in Gatwick, Crawley, and Horsham. From reliable airport transfers to local transportation and special occasions, we've got your travel needs covered."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.ezytaxis.co.uk/our-services"
      />
      {/* <meta property="og:image" content="URLtoYourImage.jpg" /> */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EZY Taxis - Comprehensive Taxi Services in Gatwick, Crawley, and Horsham"
      />
      <meta
        name="twitter:description"
        content="Explore EZY Taxis' comprehensive taxi services in Gatwick, Crawley, and Horsham. From reliable airport transfers to local transportation and special occasions, we've got your travel needs covered."
      />
      {/* <meta name="twitter:image" content="URLtoYourImage.jpg" /> */}

      {/* Favicon */}
      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      {/* Title */}
      <title>
        EZY Taxis - Comprehensive Taxi Services in Gatwick, Crawley, and Horsham
      </title>
    </Head>
  );
};

export default ServicesHead;
