"use client";

import { Button, Datepicker, Label, TextInput, Textarea } from "flowbite-react";
import db from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Booking } from "../interfaces/booking";
import { Resend } from "resend";
import BookingNotification from "../emails/bookingNotification";

const BookingForm = () => {
  async function addBooking({
    fullName,
    phone,
    email,
    pickup,
    drop,
    date,
    time,
    notes,
  }: Booking) {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "bookings"), {
        fullName,
        phone,
        email,
        pickup,
        drop,
        date,
        time,
        notes,
      });
      console.log("Document written with ID: ", docRef.id);

      if (docRef.id) {
        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

        const subject = `New Booking from ${fullName}`;

        resend.emails.send({
          from: "EZY Taxis <mail@ezytaxis.co.uk>",
          to: "aaqil.ramzeen@gmail.com",
          subject: subject,
          react: <BookingNotification booking={docRef as Booking} />
        });
      }
      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    } finally {
      setLoading(false);
    }
  }

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await addBooking({
      fullName,
      phone,
      email,
      pickup,
      drop,
      date,
      time,
      notes,
    });
    if (result) {
      alert("Your booking has been submitted!");
    } else {
      alert("There was an error submitting your booking. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-3 p-5 flex w-80 lg:w-96 flex-col gap-2 shadow-lg rounded-lg bg-white"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="pickup" value="Pickup Location" />
        </div>
        <TextInput
          id="pickup"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="drop" value="Drop Location" />
        </div>
        <TextInput
          id="drop"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="date" value="Date" />
          </div>
          {/* <Datepicker
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /> */}
          <TextInput
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="grow">
          <div className="mb-2 block">
            <Label htmlFor="time" value="Time" />
          </div>
          <TextInput
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="notes" value="Notes" />
        </div>
        <Textarea
          className="resize-none"
          id="notes"
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
      </div>

      <Button
        className="mt-3"
        type="submit"
        isProcessing={loading}
        disabled={loading}
      >
        <span className="mr-2">Make My Booking</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Button>
    </form>
  );
};

export default BookingForm;
