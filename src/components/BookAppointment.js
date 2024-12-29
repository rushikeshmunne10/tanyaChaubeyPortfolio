"use client";
import React from "react";

const BookAppointment = () => {
  return (
    <section id="appointment-section" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-900">Book Your Appointment</h2>
          <p className="mt-4 text-md sm:text-xl text-gray-600">Select a date and time for your consultation.</p>
        </div>

        <div className="relative w-full h-screen bg-white rounded-2xl shadow-2xl">
          <div className="w-full h-full">
            <iframe
              src="https://calendly.com/rahulkhurana6603/30min"
              width="100%"
              height="100%"
              frameBorder="0"
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
