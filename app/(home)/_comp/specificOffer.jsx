"use client";

import { useRef } from "react";
import ENT from "@/public/assets/specific_offer/Ear, Nose and Throat (ENT) or Otolaryngology.svg";
import Cardiology from "@/public/assets/specific_offer/Cardiology.svg";
import Cardiothoracic from "@/public/assets/specific_offer/Cardiothoracic and Vascular Surgery.svg";
import ColonRectal from "@/public/assets/specific_offer/Colon and Rectal Surgery.svg";
import Dentistry from "@/public/assets/specific_offer/Dentistry.svg";
import Dermatology from "@/public/assets/specific_offer/Dermatology.svg";
import Endocrinology from "@/public/assets/specific_offer/Endocrinology or Diabetes.svg";
import GeneralSurgery from "@/public/assets/specific_offer/General Surgery.svg";
import Gynaecology from "@/public/assets/specific_offer/Gynaecology.svg";
import Haematology from "@/public/assets/specific_offer/Haematology.svg";
import IVF from "@/public/assets/specific_offer/IVF & Fertility Treatment.svg";
import Laboratory from "@/public/assets/specific_offer/Labratory Services.svg";
import MedicalGenetics from "@/public/assets/specific_offer/Medical Genetics.svg";
import Nephrology from "@/public/assets/specific_offer/Nephrology.svg";
import Neurology from "@/public/assets/specific_offer/Neurology or Neurosurgery.svg";
import Oncology from "@/public/assets/specific_offer/Oncology or Cancer Treatment.svg";
import Ophthalmology from "@/public/assets/specific_offer/Ophthalmology.svg";
import OrganTransplant from "@/public/assets/specific_offer/Organ Transplant.svg";
import Orthopaedics from "@/public/assets/specific_offer/Orthopaedics and Trauma.svg";
import Paediatrics from "@/public/assets/specific_offer/Paediatrics or Neonatology.svg";
import PlasticSurgery from "@/public/assets/specific_offer/Plastic and Reconstructive Surgery.svg";
import Urology from "@/public/assets/specific_offer/Urology.svg";
import Image from "next/image";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const offers = [
  {
    offerImage: ENT,
    offerName: "Ear, Nose and Throat (ENT)",
    offerDesc:
      "Specialized care for conditions affecting the ear, nose, and throat.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Cardiology,
    offerName: "Cardiology",
    offerDesc:
      "Expert diagnosis and treatment of heart and vascular conditions.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Cardiothoracic,
    offerName: "Cardiothoracic and Vascular Surgery",
    offerDesc: "Surgical treatment for heart and chest-related diseases.",
    whatsapp: "01318214398",
  },
  {
    offerImage: ColonRectal,
    offerName: "Colon and Rectal Surgery",
    offerDesc: "Surgical interventions for conditions of the colon and rectum.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Dentistry,
    offerName: "Dentistry",
    offerDesc: "Comprehensive dental care for all ages.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Dermatology,
    offerName: "Dermatology",
    offerDesc: "Diagnosis and treatment of skin, hair, and nail disorders.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Endocrinology,
    offerName: "Endocrinology or Diabetes",
    offerDesc:
      "Management of hormonal and metabolic disorders, including diabetes.",
    whatsapp: "01318214398",
  },
  {
    offerImage: GeneralSurgery,
    offerName: "General Surgery",
    offerDesc: "Surgical care for a wide range of medical conditions.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Gynaecology,
    offerName: "Gynaecology",
    offerDesc: "Comprehensive care for women’s reproductive health.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Haematology,
    offerName: "Haematology",
    offerDesc: "Diagnosis and treatment of blood disorders.",
    whatsapp: "01318214398",
  },
  {
    offerImage: IVF,
    offerName: "IVF & Fertility Treatment",
    offerDesc: "Assistance with fertility issues and reproductive health.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Laboratory,
    offerName: "Laboratory Services",
    offerDesc: "Comprehensive lab testing for accurate diagnosis.",
    whatsapp: "01318214398",
  },
  {
    offerImage: MedicalGenetics,
    offerName: "Medical Genetics",
    offerDesc: "Evaluation and management of genetic disorders.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Nephrology,
    offerName: "Nephrology",
    offerDesc: "Specialized care for kidney diseases and disorders.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Neurology,
    offerName: "Neurology or Neurosurgery",
    offerDesc: "Diagnosis and treatment of nervous system disorders.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Oncology,
    offerName: "Oncology or Cancer Treatment",
    offerDesc: "Comprehensive care for cancer patients.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Ophthalmology,
    offerName: "Ophthalmology",
    offerDesc: "Expert care for eye diseases and vision problems.",
    whatsapp: "01318214398",
  },
  {
    offerImage: OrganTransplant,
    offerName: "Organ Transplant",
    offerDesc: "Surgical procedures to replace failing organs.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Orthopaedics,
    offerName: "Orthopaedics and Trauma",
    offerDesc: "Care for musculoskeletal injuries and disorders.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Paediatrics,
    offerName: "Paediatrics or Neonatology",
    offerDesc: "Comprehensive care for infants and children.",
    whatsapp: "01318214398",
  },
  {
    offerImage: PlasticSurgery,
    offerName: "Plastic and Reconstructive Surgery",
    offerDesc:
      "Surgical and non-surgical procedures for aesthetic and reconstructive needs.",
    whatsapp: "01318214398",
  },
  {
    offerImage: Urology,
    offerName: "Urology",
    offerDesc: "Care for urinary tract and male reproductive system disorders.",
    whatsapp: "01318214398",
  },
];

const SpecificOffer = () => {
  const swiperRef = useRef(null);
  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h2 className="text-xl md:text-2xl text-center font-semibold text-blue">
        Clinic & Centers at Bumrungrad International Hospital
      </h2>
      <p className="text-center mt-2.5">
        Explore Bumrungrad International Hospital, where advanced medical
        treatments meet compassionate care. Discover a place where your
        well-being is the top priority.
      </p>

      <div className="relative mt-5 md:mt-10">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="flex flex-col items-center justify-between shadow-xl rounded p-4 min-h-[300px]">
                <Image
                  src={offer.offerImage}
                  alt={offer.offerName}
                  height={100}
                  width={100}
                />
                <div>
                  <p className="font-semibold text-blue text-center">
                    {offer.offerName}
                  </p>
                  <p className="text-center text-sm mt-2.5">{offer.offerDesc}</p>
                </div>
                <button
                  className="px-4 py-2 bg-blue text-white flex items-center justify-center gap-2 shadow rounded"
                  onClick={() => handleWhatsAppClick(offer.whatsapp)}
                >
                  <WhatsApp /> Contact via Whatsapp
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            className="bg-white p-2 rounded-full shadow"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <FaChevronLeft className="text-blue" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            className="bg-white p-2 rounded-full shadow"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <FaChevronRight className="text-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecificOffer;
