"use client";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="mt-20">
      {/* <p className="mb-5 lg:text-center text-2xl font-light leading-relaxed text-slate-800">
        What Our Customers Say
      </p> */}
      <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-cyan-700 text-3xl font-bold capitalize">
        What our customers say
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="grid gap-4">
          <TestimonialCard
            name="Emma Thompson"
            image="emma-thompson"
            title="Business Professional"
            message="EZY Taxis has been my go-to choice for hassle-free and reliable transportation to business meetings. Their punctuality and professional drivers make every ride a breeze. I highly recommend EZY Taxis for anyone seeking a seamless and comfortable travel experience."
          />
          <TestimonialCard
            name="Brian Mitchell"
            image="brian-mitchell"
            title="Event Coordinator"
            message="As an event coordinator, I understand the importance of seamless logistics, and EZY Taxis has consistently delivered excellence in this regards. Their reliability and commitment to excellence make them my first choice for any event transportation needs."
          />
        </div>
        <div className="grid gap-4">
          <TestimonialCard
            name="Helene Engels"
            image="helene-engels"
            title="Tourist Explorer"
            message="The drivers were friendly and professional. EZY Taxis truly made my vacation memorable!"
          />
          <TestimonialCard
            name="Linda Chen"
            image="linda-chen"
            title="Small Business Owner"
            message="EZY Taxis has been a game-changer for my company's transportation needs."
          />
          <TestimonialCard
            name="John Richards"
            image="john-richards"
            title="Small Business Owner"
            message="Ash is always amazing and gets us home safely no matter what. Thankyou ash!"
          />
        </div>
        <div className="md:grid gap-4 hidden">
          <TestimonialCard
            name="Michael Thompson"
            image="michael-thompson"
            title="Business Traveler"
            message="EZY Taxis has redefined the landscape of business travel for me. As a frequent flyer, their commitment to punctuality and professional service has been a game-changer. EZY Taxis doesn't just get me to my meetings; they elevate the entire travel experience, making business on the move a seamless and enjoyable affair."
          />
          <TestimonialCard
            name="Tom Mitchell"
            image="tom-mitchell"
            title="Weekend Explorer"
            message="Weekend getaways are my escape, and EZY Taxis adds to the adventure. Their drivers are not just transporters; they're local guides with fantastic recommendations."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
