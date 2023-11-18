"use client";

import BookingForm from "../components/BookingForm";
import FeatureList from "../components/FeatureList";
import BookingsHead from "../components/meta/BookingsHead";

const Bookings = () => {
  return (
    <main className="mt-20">
      <BookingsHead />

      <div className="mt-5 flex">
        <div className="w-6/12">
          <FeatureList />
        </div>
        <div className="w-6/12 flex justify-center">
          <BookingForm />
        </div>
      </div>
    </main>
  );
};

export default Bookings;
