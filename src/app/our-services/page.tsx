"use client";

import ServiceList from "../components/ServiceList";
import BookingButtons from "../components/BookingButtons";

const OurServices = () => {
  return (
    <main>
      <section className="mt-20">
        <h1 className="mb-3 text-4xl font-bold">
          Explore Premium Taxi Services with EZY Taxis
        </h1>
        <hr />

        <h2 className="mt-7 text-xl">
          Discover a superior level of transportation with EZY Taxis, your go-to
          solution for reliable, safe, and comfortable rides. Our diverse range
          of services caters to various travel needs, ensuring a seamless and
          enjoyable journey for our valued customers.
        </h2>
      </section>

      <ServiceList />

      <section className="mt-10">
        <div className="p-5 shadow-lg rounded-xl">
          <h3 className="mb-2 text-2xl text-left font-medium">
            How to Book Your Next Premium Ride
          </h3>
          <hr />

          <p className="mt-5">
            Booking with EZY Taxis is a breeze. Reserve your ride conveniently
            through our website, or by calling our 24/7 customer support
            hotline. Choose the service that suits your needs, and let EZY Taxis
            elevate your travel experience.
          </p>

          <p className="mt-3">
            At EZY Taxis, we prioritize your comfort, safety, and satisfaction.
            Experience the pinnacle of transportation services with EZY Taxis
            today!
          </p>

          <BookingButtons />
        </div>
      </section>
    </main>
  );
};

export default OurServices;
