"use client";

import React from "react";
import Image from "next/image";
import useAuth from "@/helpers/hooks/useAuth";
import { useRouter } from "next/navigation";

const Landing = () => {
  const { auth } = useAuth();
  const router = useRouter();

  function handleAppointment() {
    if (auth) {
      router.push("/our-services/appointment");
    } else {
      router.push("/login");
    }
  }
  function handleHealthScreen() {
    if (auth) {
      router.push("/check-up");
    } else {
      router.push("/login");
    }
  }

  return (
    <section className="bg-cream relative">
      <div className="flex flex-col lg:flex-row py-20 px-5 justify-center items-center md:container md:mx-auto relative">
        <div className="lg:w-1/2 flex flex-col gap-5 md:gap-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl text-blue font-extrabold">
            Experience Superior Healthcare with Bumrungrad International
            Hospital
          </h1>
          <p>
            <strong>Bumrungrad International Hospital</strong> is Southeast Asia's largest
            private hospital and Thailand’s first JCI-accredited facility,
            serving 1.1M+ patients annually, including 600K+ international
            guests.
          </p>

          <div className="flex gap-4 mt-5">
            <button
              onClick={handleAppointment}
              className="w-full text-sm md:w-fit px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded"
            >
              Doctor Appoinment
            </button>
            <button
              onClick={handleHealthScreen}
              className="w-full text-sm md:w-fit px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded"
            >
              Health Screening
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            height={600}
            width={600}
            src="https://i.ibb.co/v1jKX0V/Bumrungrad-hospital-Hero.png"
            effect="blur"
            alt="Bumrungrad International Hospital"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
