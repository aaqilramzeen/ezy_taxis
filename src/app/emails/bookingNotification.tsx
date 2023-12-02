"use client";

import * as React from "react";
import { Booking } from "../interfaces/booking";

export const BookingNotification = ({ booking }: { booking: Booking }) => {
  return (
    <div>
      <h1>Booking Notification</h1>
      <p>
        <strong>Full Name:</strong> {booking.fullName}
      </p>
      <p>
        <strong>Phone:</strong> {booking.phone}
      </p>
      <p>
        <strong>Email:</strong> {booking.email}
      </p>
      <p>
        <strong>Pickup:</strong> {booking.pickup}
      </p>
      <p>
        <strong>Drop:</strong> {booking.drop}
      </p>
      <p>
        <strong>Date:</strong> {booking.date}
      </p>
      <p>
        <strong>Time:</strong> {booking.time}
      </p>
      <p>
        <strong>Notes:</strong> {booking.notes}
      </p>
    </div>
  );
};

export default BookingNotification;