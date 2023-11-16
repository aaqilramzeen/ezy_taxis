"use client";

import { Button, Datepicker, Label, TextInput, Textarea } from "flowbite-react";

const BookingForm = () => {
  return (
    <form className="m-3 p-5 flex max-w-md flex-col gap-2 shadow-lg rounded-lg bg-white">
      <div className="flex gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstName" value="First Name" />
          </div>
          <TextInput id="firstName" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastName" value="Last Name" />
          </div>
          <TextInput id="lastName" required />
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput id="phone" required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="pickup" value="Pickup Location" />
        </div>
        <TextInput id="pickup" required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="drop" value="Drop Location" />
        </div>
        <TextInput id="drop" required />
      </div>

      <div className="flex gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="date" value="Date" />
          </div>
          <Datepicker id="date" />
        </div>

        <div className="grow">
          <div className="mb-2 block">
            <Label htmlFor="time" value="Time" />
          </div>
          <TextInput id="time" type="time" required />
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="notes" value="Notes" />
        </div>
        <Textarea className="resize-none" id="notes" rows={2} required />
      </div>

      <Button className="mt-3" type="submit">
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