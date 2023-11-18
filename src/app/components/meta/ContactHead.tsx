"use client";

import Head from "next/head";

const ContactHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Contact EZY Taxis for all your transportation needs in Gatwick, Crawley, and Horsham. Reach out to our reliable team for booking inquiries, support, or general information. We're here to assist you!"
      />
      <meta
        name="keywords"
        content="EZY Taxis contact, Gatwick taxi service, Crawley taxi company, Horsham transportation, Taxi booking support"
      />
      <meta name="author" content="EZY Taxis" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Contact EZY Taxis - Your Premier Taxi Service in Gatwick, Crawley, and Horsham"
      />
      <meta
        property="og:description"
        content="Contact EZY Taxis for all your transportation needs in Gatwick, Crawley, and Horsham. Reach out to our reliable team for booking inquiries, support, or general information. We're here to assist you!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ezytaxis.co.uk/contact" />
      {/* <meta property="og:image" content="URLtoYourImage.jpg" /> */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Contact EZY Taxis - Your Premier Taxi Service in Gatwick, Crawley, and Horsham"
      />
      <meta
        name="twitter:description"
        content="Contact EZY Taxis for all your transportation needs in Gatwick, Crawley, and Horsham. Reach out to our reliable team for booking inquiries, support, or general information. We're here to assist you!"
      />
      {/* <meta name="twitter:image" content="URLtoYourImage.jpg" /> */}

      {/* Favicon */}
      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      {/* Title */}
      <title>
        Contact EZY Taxis - Premier Taxi Service in Gatwick, Crawley, and
        Horsham
      </title>
    </Head>
  );
};

export default ContactHead;
