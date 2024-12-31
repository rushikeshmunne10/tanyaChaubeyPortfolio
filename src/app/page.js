"use client"
import Image from 'next/image';
import About from "@/components/About";
import BookAppointment from "@/components/BookAppointment";
import ContactInformation from "@/components/ContactInformation";
import Expertise from "@/components/Expertise";
import Home from "@/components/Home";
import Program from "@/components/Program";
import WhyChooseTanya from "@/components/WhyChooseTanya";
import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';

export default function Page() {

  const handleButtonClick = () => {
    const appointmentSection = document.getElementById("appointment-section");
    window.scrollTo({
      top: appointmentSection.offsetTop - 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Home />
      <About />
      <Expertise />
      <Program />
      <WhyChooseTanya />
      <Testimonials/>
      <BookAppointment />
      <ContactInformation />

      <span className="fixed top-4 left-4 z-50">
        <Image
          src="/images/logo-cropped.png"
          alt="Logo"
          width={150}
          height={150}
          className="m-0 p-0"
        />
      </span>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <motion.button
          onClick={handleButtonClick}
          className="px-6 py-2 sm:py-4 bg-gradient-to-tr from-pink-950 to-pink-500 text-white rounded-3xl shadow-2xl"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="font-semibold text-xl md:text-2xl">Book A Free Discovery Call</span>
        </motion.button>
      </div>
    </>
  );
}
