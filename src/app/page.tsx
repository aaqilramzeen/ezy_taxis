"use client";

import { Banner, Card } from "flowbite-react";
import Testimonials from "./components/Testimonials";
import Image from "next/image";
import BookingButtons from "./components/BookingButtons";
import BookingForm from "./components/BookingForm";

export default function Home() {
  return (
    <main>
      <section className="mt-10 -mx-10 md:-mx-16 md:mt-2 lg:mt-0 relative main-banner">
        <Banner>
          <div className="w-full bg-slate-800 p-4 fixed z-40">
            <div className="mx-auto">
              <p className="text-sm font-medium text-slate-200 text-center shadow-lg">
                Exciting Changes on the Horizon! Our Website is Under
                Construction for a Better Experience. Stay Tuned for a Revamped
                Journey!
              </p>
            </div>
          </div>
        </Banner>

        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          <div className="pl-10 mt-5 md:mt-24 lg:w-6/12 relative">
            <h1 className="mt-20 md:m-0 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-cyan-700 text-7xl font-black">
              Precision in Every Mile, Comfort in Every Ride
            </h1>
            <h2 className="md:mt-0 text-slate-900 text-xl font-medium">
              Seamless Journeys, Unparalleled Service: Elevating Your Travel
              Experience Today
            </h2>
            <div className="mt-7 flex flex-wrap gap-4">
              <div className="py-3 px-5 flex items-center justify-center gap-2 bg-slate-900 text-slate-300 rounded-md cursor-pointer">
                <a href="tel:01293888999" className="mr-2 font-medium text-xl">
                  Call Us On 01293 888 999
                </a>
              </div>

              <div className="py-3 px-5 flex items-center justify-center gap-2 bg-slate-900 text-slate-300 rounded-md cursor-pointer">
                <a
                  href="tel:01403888999"
                  className="mr-2 font-medium text-xl break-keep"
                >
                  Call Us On 01403 888 999
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 flex justify-center mt-7 relative">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <p className="lg:text-center text-3xl font-light leading-relaxed text-slate-800">
          Welcome to EZY Taxis — Your Premier Taxi Service in Gatwick, Crawley,
          Horsham, and Beyond!
        </p>

        <p className="mt-3 text-lg">
          At EZY Taxis, we take pride in providing more than just
          transportation; we deliver an unparalleled experience. Our commitment
          to reliability, affordability, and 24/7 availability sets us apart as
          the go-to taxi service in the region. surrounding areas.
        </p>

        <div className="my-10 flex flex-wrap justify-center gap-3">
          <Card
            className="max-w-sm details-card"
            imgSrc="https://source.unsplash.com/RZ5TKFpdaWM"
            horizontal
          >
            <h5 className="text-2xl font-medium text-cyan-900">
              Discover Our Extensive Service Areas
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
              EZY Taxis, your premier choice for transportation in Gatwick,
              Crawley, Horsham, and nearby areas. From city center hustle to
              serene outskirts, we&apos;ve got your travel needs covered.
            </p>
          </Card>

          <Card
            className="max-w-sm details-card"
            imgSrc="https://source.unsplash.com/8e2gal_GIE8"
            horizontal
          >
            <h5 className="text-2xl font-medium text-cyan-900">
              Your Safety, Our Priority
            </h5>
            <p className="font-normal text-gray-700">
              At EZY Taxis, safety is non-negotiable. Our drivers undergo
              rigorous background checks including DBS (Disclosure and Barring
              Service) and are licensed to work with local authorities.
            </p>
          </Card>
        </div>
      </section>

      <section className="mt-20 p-10 bg-slate-100 shadow-lg rounded-lg">
        <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-cyan-700 text-3xl font-black">
          Ride in Style and Comfort with EZY Taxis Fleet
        </h2>
        <p className="mt-5">
          Choose from our diverse fleet of well-maintained vehicles, ranging
          from sleek sedans to spacious minivans. Our commitment to cleanliness
          and comfort ensures a pleasant journey every time. Travel with
          confidence, knowing that your EZY Taxis experience begins with the
          perfect ride.
        </p>
        <div className="flex justify-around overflow-clip">
          <Image src="/estate.png" alt="Estates" width={250} height={500} />
          <Image src="/saloon.png" alt="Saloon" width={250} height={500} />
          <Image src="/6-seater.png" alt="6 Seater" width={250} height={500} />
          <Image src="/estate.png" alt="Estates" width={250} height={500} />
          <Image src="/saloon.png" alt="Saloon" width={250} height={500} />
        </div>
      </section>

      <Testimonials />

      <section className="mt-20">
        <div className="shadow-inner rounded-lg py-10 bg-slate-100">
          <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-cyan-700 text-3xl font-black">
            Simple Booking, Seamless Travel: Reserve Your Taxi in Seconds!
          </h2>
          <div className="mt-7 text-slate-800">
            <div className="px-5 text-xl font-light leading-relaxed">
              <p>
                Discover the difference with EZY Taxis. We&apos;re not just a
                ride; we&apos;re your trusted transportation partner. Book your
                journey with us today and experience the ultimate in comfort,
                reliability, and convenience.
              </p>
              <BookingButtons />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
