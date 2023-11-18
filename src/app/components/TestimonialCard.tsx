"use client";

import { Avatar } from "flowbite-react";

const TestimonialCard = ({
  name,
  image,
  title,
  message,
}: {
  name: string;
  image: string;
  title: string;
  message: string;
}) => {
  return (
    <div className="p-5 shadow-2xl rounded-lg bg-slate-900">
      <p className="text-gray-300 text-sm">{message}</p>

      <div className="mt-3 flex items-center">
        <Avatar
          img={`${image}.png`}
          alt={name}
          rounded
        />
        <div className="ml-2">
          <p className="text-gray-400 text-xs">{name}</p>
          <p className="text-gray-400 text-xs italic">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
