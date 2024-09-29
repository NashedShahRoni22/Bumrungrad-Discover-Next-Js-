"use client";

import Image from "next/image";
import React from "react";
import img from "@/public/assets/medi-express-02.jpg";

export default function MediExpress() {
  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto grid grid-cols-1  xl:grid-cols-2 lg:items-center gap-16">
      <div className="flex flex-col gap-2.5 md:gap-5 ">
        <h2 className="text-xl md:text-2xl font-semibold text-blue">
          {" "}
          Know More About Us
        </h2>

        {/* <p className="font-semibold">Who We Are?</p> */}
        <p className="text-justify">
          DIMS (Discover International Medical Service) is a trusted name in
          providing seamless medical assistance and facilitation services to
          individuals seeking world-class healthcare solutions abroad. Our
          mission is to guide patients through the complexities of medical
          travel, ensuring access to the best hospitals and doctors across the
          globe. With our extensive network of medical partners, we specialize
          in coordinating treatments, consultations, and aftercare for a wide
          range of medical conditions.
        </p>
        {/* <p className="font-semibold">How do we work?</p> */}
        <p className="text-justify">
          Our services include detailed medical consultation planning,
          appointment scheduling, and visa assistance, making the entire process
          stress-free and efficient. We also offer personalized care by staying
          in close communication with our patients throughout their medical
          journey.
        </p>
        <p className="text-justify">
          In collaboration with leading hospitals such as Bumrungrad
          International, we ensure that patients receive the highest standard of
          healthcare. With international referral offices in{" "}
          <strong>
            Bahrain, Bangladesh, Cambodia, Chad, China, East Africa, Ethiopia,
            Hong Kong, Indonesia, Kenya, Kuwait, Laos, Mongolia, Myanmar, Nepal,
            Pakistan, UAE, and Vietnam—{" "}
          </strong>{" "}
          we make it convenient for patients worldwide to access the right
          medical expertise.
        </p>
        <p className="text-justify">
          At DIMS, we are committed to helping you achieve better health
          outcomes through professional, reliable, and compassionate support.
          Let us be your partner in health and well-being, ensuring you receive
          the best care, no matter where you are.
        </p>
      </div>
      <div className="w-full">
        <Image
          height={400}
          width={1000}
          className="rounded-md object-cover w-full h-full"
          src={img}
          effect="blur"
          alt="Bumrungrad International Hospital"
        />
      </div>
    </div>
  );
}
