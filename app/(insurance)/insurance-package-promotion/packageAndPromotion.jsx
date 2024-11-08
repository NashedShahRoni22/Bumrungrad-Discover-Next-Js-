"use client";

import React from "react";
import packageimg from "@/public/assets/insurance/Bumrungrad  Hospital_Packages-Promotion1.png";
import weacceptimg from "@/public/assets/insurance/Bumrungrad  Hospital_We-Accept-Active2.png";
import goodvibesimg from "@/public/assets/insurance/Bumrungrad  Hospital_Good-Vibes-2023.png";
import virtualBookImg from "@/public/assets/insurance/Bumrungrad  Hospital_virtualBook.png";
import fairpromotionImg from "@/public/assets/insurance/Bumrungrad  Hospital_fairpromotion.jpg";
import aiamyanmerImg from "@/public/assets/insurance/Bumrungrad  Hospital_aiaMyanmer.jpg";
import fluvaccineImg from "@/public/assets/insurance/Bumrungrad  Hospital_fluvaccine.jpg";
import ayudhayaImg from "@/public/assets/insurance/Bumrungrad  Hospital_MicrosoftTeams-image-(63).jpg";
import axaImg from "@/public/assets/insurance/Bumrungrad  Hospital_Aw-BH-AXA-05-260623.jpg";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

const PackagePromotion = () => {
  const questionsAns = [
    {
      question: "Virtual Book Medical Assistance Company",
      img: virtualBookImg,
      url: "https://bumrungrad.aflip.in/good_vibes_EN.html?utm_source=poster&utm_medium=qrcode&utm_campaign=flipbook-good-vibes-EN-for-17-aug-23",
      target: "_blank",
    },
    {
      question: "Insurance Health Fair Promotion 2023",
      img: fairpromotionImg,
    },
    {
      question: "AIA Myanmar",
      img: aiamyanmerImg,
    },
    {
      question: "AIA Flu Vaccine",
      img: fluvaccineImg,
    },
    {
      question: "Allianz Ayudhya",
      img: ayudhayaImg,
    },
    {
      question: "Krungthai-AXA – iHealthy Platinum",
      img: axaImg,
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto">
      <div className="h-[20vh] md:h-[30vh] lg:h-[50vh] insurance-packagePromotion relative flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-black/60"></div>
        <h1 className="uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10">
          Insurance Packages and Promotion 2024
        </h1>
      </div>
      <div className="mx-10 my-10">
        {questionsAns?.map((questionans, i) => (
          <OnePromotion key={i} i={i} questionans={questionans} />
        ))}
      </div>
      <div className=" my-10 bg-cream">
        <div className="flex justify-center flex-wrap p-10">
          <Image
            height={120}
            width={120}
            src={packageimg}
            alt="Bumrungrad International Hospital"
          />
          <Image
            height={120}
            width={120}
            src={weacceptimg}
            alt="Bumrungrad International Hospital"
          />
          <Image
            height={120}
            width={120}
            src={goodvibesimg}
            alt="Bumrungrad International Hospital"
          />
        </div>
      </div>
    </section>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#ffffff"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const OnePromotion = (props) => {
  const { question, img, i, url, target } = props.questionans;

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="mt-[1px]">
      <>
        <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
          <div>
            <AccordionHeader
              className="bg-blue p-3"
              onClick={() => handleOpen(i)}
            >
              <p className="text-white text-sm">{question}</p>
            </AccordionHeader>
          </div>

          <AccordionBody>
            <div className="my-8">
              <a href={url} target={target}>
                <Image
                  height={200}
                  width={1000}
                  src={img}
                  alt="Bumrungrad International Hospital"
                  className="w-[80%] h-[50%] mx-auto"
                  srcset=""
                />
              </a>
            </div>
          </AccordionBody>
        </Accordion>
      </>
    </div>
  );
};

export default PackagePromotion;
