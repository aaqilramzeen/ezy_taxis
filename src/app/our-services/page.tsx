"use client";

import { Button } from "flowbite-react";
import ServiceList from "../components/ServiceList";
import { useRouter } from "next/navigation";

const OurServices = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 text-slate-700">
      <section className="p-10 pb-0 w-full">
        <h1 className="mb-3 pt-20 md:pt-0 text-4xl font-bold">
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

      <section className="p-9 w-full">
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

          <div className="mt-7 flex gap-3">
            <Button className="mt-3" onClick={() => router.push("/")}>
              <span className="mr-2">Make My Booking Now</span>
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

            <Button className="mt-3">
              <span className="mr-2">Call Our 24/7 Hotline</span>
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </Button>

            <Button className="mt-3">
              <span className="mr-2">Book via Whatsapp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurServices;
