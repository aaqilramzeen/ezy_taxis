"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Booking } from "../interfaces/booking";

const BookingForm = () => {
  async function addBooking({
    fullName,
    phone,
    email,
    pickup,
    drop,
    date,
    time,
    status,
  }: Booking) {
    try {
      setLoading(true);
      await addDoc(collection(db, "bookings"), {
        fullName,
        phone,
        email,
        pickup,
        drop,
        date,
        time,
        status,
      });
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
  const [status] = useState("pending");

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
      status,
    });

    if (result) {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          pickup,
          drop,
          date,
          time,
        }),
      });
      setOpenModal(true);
    } else {
      alert("There was an error submitting your booking. Please try again.");
    }
  };

  return (
    <>
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

        <Button
          className="mt-3"
          type="submit"
          isProcessing={loading}
          disabled={loading}
        >
          <span className="mr-2">
            {loading ? "Please wait..." : "Make My Booking"}
          </span>
          {loading ? (
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
          ) : (
            <></>
          )}
        </Button>
      </form>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Booking Placed Successfully!</Modal.Header>
        <Modal.Body>
          <div>
            <p>
              Thank you for choosing EZY Taxis. We will be in touch with you
              shortly to confirm your booking.
            </p>
            <p className="mt-3">
              If you have any questions, please contact us at{" "}
              <a className="text-cyan-600" href="tel:01293888999">
                01293 888 999
              </a>{" "}
              or{" "}
              <a
                className="text-cyan-600"
                href="mailto:contactezytaxis@gmail.com"
              >
                email us here
              </a>
              .
            </p>
            <div>
              <h2 className="mt-4 text-lg font-medium text-cyan-800">
                Your Booking Details
              </h2>
              <hr />
              <div className="mt-4 text-slate-800 leading-loose">
                <p>
                  <b>Full Name: </b>
                  {fullName}
                </p>
                <p>
                  <b>Phone: </b>
                  {phone}
                </p>
                <p>
                  <b>Email: </b>
                  {email}
                </p>
                <p>
                  <b>Pickup: </b>
                  {pickup}
                </p>
                <p>
                  <b>Drop: </b>
                  {drop}
                </p>
                <p>
                  <b>Date: </b>
                  {date}
                </p>
                <p>
                  <b>Time: </b>
                  {time}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingForm;
