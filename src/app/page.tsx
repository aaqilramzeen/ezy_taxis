"use client";

import BookingForm from "./components/BookingForm";
import ServiceCard from "./components/ServiceCard";
import { servicesOffered } from "./utils/services";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center justify-between md:p-20 bg-[url('/banne.png')] bg-cover bg-no-repeat">
        <div className="mt-5 lg:w-6/12">
          <h1 className="mt-20 px-3 md:m-0 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-cyan-700 text-7xl font-black">
            Precision in Every Mile, Comfort in Every Ride
          </h1>
          <h2 className="px-3 md:m-0 text-slate-900 text-xl font-medium">
            Seamless Journeys, Unparalleled Service: Elevating Your Travel
            Experience Today
          </h2>
        </div>

        <div className="lg:w-6/12 flex justify-center lg:mt-8">
          <BookingForm />
        </div>
      </section>

      <section className="p-16 bg-slate-50">
        <p className="lg:text-center text-2xl font-light leading-relaxed text-slate-800">
          Welcome to EZY Taxis, your premier destination for hassle-free and
          reliable taxi services. Our commitment is to provide you with a
          seamless transportation experience, ensuring you reach your
          destination comfortably and on time. Explore our range of services
          tailored to meet your unique travel needs
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
          {servicesOffered.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="lg:p-16 mt-10 lg:mt-0">
        <h2 className="text-3xl text-center font-light">
          Swift and Secure: Reserve Your Taxi in Seconds!
        </h2>
        <div className="mt-7 flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-6/12">
            <BookingForm />
          </div>

          <div className="px-5 lg:w-6/12">
            <p className="lg:text-center text-2xl font-light leading-relaxed text-slate-800">
              Discover the difference with EZY Taxis. We&apos;re not just a
              ride; we&apos;re your trusted transportation partner. Book your
              journey with us today and experience the ultimate in comfort,
              reliability, and convenience.
            </p>
            <p className="mt-5 lg:text-center text-2xl font-light leading-relaxed text-slate-800">
              Our easy-to-use online booking platform ensures a seamless
              reservation process. Book your ride with just a few clicks, and
              receive instant confirmations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
