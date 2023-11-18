"use client";

import ContactEmail from "../components/ContactEmail";
import ContactPhone from "../components/ContactPhone";

const Contact = () => {
  return (
    <main>
      <section className="mt-20">
        <h1 className="mb-3 text-4xl font-bold">Contact Us</h1>
        <hr />

        <h2 className="mt-7 text-2xl">
          We value your business and are here to assist you in any way we can.
          <br />
          Feel free to reach out to us using the contact information below.
        </h2>

        <h3 className="mt-7 text-3xl font-bold">Contact Information</h3>

        <h4 className="mt-5 text-xl font-bold">Phone</h4>
        <p className="mt-2">
          For general inquiries and customer support, please call our 24/7
          helpline:
        </p>
        <ContactPhone />

        <h4 className="mt-5 text-xl font-bold">Email</h4>
        <p className="mt-2">You can also reach us via email at:</p>
        <ContactEmail />

        <h4 className="mt-5 text-xl font-bold">Lost and Found</h4>
        <p className="mt-2">
          If you have left an item in one of our taxis, please contact our Lost
          and Found department at:
        </p>
        <ContactPhone />
        <ContactEmail />

        <h4 className="mt-5 text-xl font-bold">Business Inquiries</h4>
        <p className="mt-2">
          For corporate partnerships, advertising, and other business-related
          inquiries, please contact our Business Development team at:
        </p>
        <ContactPhone />
        <ContactEmail />

        <h4 className="mt-5 text-xl font-bold">Feedback</h4>
        <p className="mt-2">
          Your feedback is important to us. Let us know about your experience
          with EZY Taxis by simply dropping us a mail on{" "}
          <a className="text-cyan-600" href="mailto:aaqil.ramzeen@gmail.com">
            contact@ezytaxis.co.uk
          </a>
        </p>

        <p className="mt-3">
          We appreciate your trust in choosing EZY Taxis for your transportation
          needs. Our team is dedicated to providing you with safe, reliable, and
          convenient taxi services.
        </p>

        <p className="mt-3 font-semibold">
          Thank you for riding with EZY Taxis! Have a great day!
        </p>
      </section>
    </main>
  );
};

export default Contact;
