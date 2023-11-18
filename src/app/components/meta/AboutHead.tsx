"use client";

import Head from "next/head";

const AboutHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Learn about EZY Taxis - Your premier taxi service in Gatwick, Crawley, and Horsham. Discover our commitment to reliability, professionalism, and customer satisfaction."
      />
      <meta
        name="keywords"
        content="About EZY Taxis, Taxi service history, Reliable taxi company, Professional drivers, Customer satisfaction, Gatwick, Crawley, Horsham"
      />
      <meta name="author" content="EZY Taxis" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="About EZY Taxis - Premier Taxi Service in Gatwick, Crawley, and Horsham"
      />
      <meta
        property="og:description"
        content="Learn about EZY Taxis - Your premier taxi service in Gatwick, Crawley, and Horsham. Discover our commitment to reliability, professionalism, and customer satisfaction."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ezytaxis.co.uk/about" />
      {/* <meta property="og:image" content="URLtoYourImage.jpg" /> */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About EZY Taxis - Premier Taxi Service in Gatwick, Crawley, and Horsham"
      />
      <meta
        name="twitter:description"
        content="Learn about EZY Taxis - Your premier taxi service in Gatwick, Crawley, and Horsham. Discover our commitment to reliability, professionalism, and customer satisfaction."
      />
      {/* <meta name="twitter:image" content="URLtoYourImage.jpg" /> */}

      {/* Favicon */}
      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      {/* Title */}
      <title>
        About EZY Taxis - Premier Taxi Service in Gatwick, Crawley, and Horsham
      </title>
    </Head>
  );
};

export default AboutHead;
