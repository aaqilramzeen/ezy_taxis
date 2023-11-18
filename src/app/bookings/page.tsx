"use client";

import BookingForm from "../components/BookingForm";
import FeatureList from "../components/FeatureList";
import BookingsHead from "../components/meta/BookingsHead";

const Bookings = () => {
  return (
    <main className="mt-20">
      <BookingsHead />

      <div className="mt-5 flex flex-col lg:flex-row">
        <div className="lg:w-6/12 mb-5">
          <FeatureList />
        </div>
        <div className="lg:w-6/12 flex justify-center">
          <BookingForm />
        </div>
      </div>
    </main>
  );
};

export default Bookings;
