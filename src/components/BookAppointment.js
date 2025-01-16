"use client";
import React from "react";

const BookAppointment = () => {
  return (
    <section id="appointment-section" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950">Book Your Appointment</h2>
          <p className="mt-4 text-md sm:text-xl text-[#2E2E2E]">Select a date and time for your consultation.</p>
        </div>

        <div className="relative w-full h-screen bg-[#F0BB78] shadow-[#543A14] shadow-lg rounded-lg">
          <div className="w-full h-full">
            <iframe
              src={process.env.NEXT_PUBLIC_CALENDLY_URL}
              width="100%"
              height="100%"
              title="Calendly Booking"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
