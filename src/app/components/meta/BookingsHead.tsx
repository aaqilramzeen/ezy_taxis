"use client";

import Head from "next/head";

const BookingsHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Book reliable and convenient taxi services with EZY Taxis in Gatwick, Crawley, and Horsham. Seamless online booking, 24/7 availability, and secure payments."
      />
      <meta
        name="keywords"
        content="Gatwick taxi, Crawley taxi, Horsham taxi, online taxi booking, 24/7 taxi service, secure taxi payments"
      />
      <meta name="author" content="EZY Taxis" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="EZY Taxis - Book Your Ride With Ease"
      />
      <meta
        property="og:description"
        content="Book reliable and convenient taxi services with EZY Taxis in Gatwick, Crawley, and Horsham. Seamless online booking, 24/7 availability, and secure payments."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ezytaxis.co.uk/bookings" />
      {/* <meta property="og:image" content="URLtoYourImage.jpg" /> */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="EZY Taxis - Book Your Ride With Ease"
      />
      <meta
        name="twitter:description"
        content="Book reliable and convenient taxi services with EZY Taxis in Gatwick, Crawley, and Horsham. Seamless online booking, 24/7 availability, and secure payments."
      />
      {/* <meta name="twitter:image" content="URLtoYourImage.jpg" /> */}

      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      <title>EZY Taxis Bookings - Book Your Ride With Ease</title>
    </Head>
  );
};

export default BookingsHead;
