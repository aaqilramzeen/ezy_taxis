"use client";

const FeatureList = () => {
  const features = [
    {
      label: "Instant Quotes",
      description:
        "Receive transparent and competitive quotes for your journey instantly",
    },
    {
      label: "24/7 Availability",
      description:
        "We are available round the clock, providing reliable service whenever you need it.",
    },
    {
      label: "Flexible Options",
      description:
        "Choose from our range of vehicles to suit your unique needs.",
    },
    {
      label: "Secure Payments",
      description:
        "Experience peace of mind with our secure online payment options.",
    },
    {
      label: "Real-time Tracking",
      description:
        "Easily track the arrival of your taxi in real-time for added convenience.",
    },
    {
      label: "Special Requests",
      description:
        "Have specific requirements? Let us know, and we'll do our best to accommodate your needs.",
    },
  ];

  return (
    <div>
      <h1 className="hidden md:block mb-3 text-4xl font-bold">
        Welcome to EZY Taxis - Book Your Ride With Ease!
      </h1>
      <hr />

      <p className="mt-5 text-lg">
        Booking your next journey with EZY Taxis is quick, simple, and
        convenient. We prioritize your comfort and aim to make the booking
        process as seamless as possible. Whether you&apos;re headed to Gatwick
        Airport, exploring Crawley, or venturing around Horsham, we&apos;ve got
        you covered.
      </p>

      {features.map((feature) => {
        return (
          <div key={feature.label} className="mt-5">
            <div className="flex gap-1 text-cyan-800 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>

              <span>{feature.label}</span>
            </div>
            <p>{feature.description}</p>
          </div>
        );
      })}

      <p className="mt-3">
        Your journey with EZY Taxis starts with a simple booking. Experience the
        ease and reliability of our services. Book your ride today, and let us
        take you where you need to go!
      </p>
    </div>
  );
};

export default FeatureList;
