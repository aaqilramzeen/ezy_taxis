"use client";

import BookingForm from "../components/BookingForm";
import FeatureList from "../components/FeatureList";
import BookingsHead from "../components/meta/BookingsHead";

const Bookings = () => {
  return (
    <main className="mt-24">
      <BookingsHead />

      <section>
        <h1 className="md:hidden mb-3 text-4xl font-bold">
          Welcome to EZY Taxis - Book Your Ride With Ease!
        </h1>
        <hr />
        <div className="mt-5 flex flex-col-reverse lg:flex-row">
          <div className="lg:w-6/12 mb-5">
            <FeatureList />
          </div>
          <div className="lg:w-6/12 flex justify-center">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bookings;
