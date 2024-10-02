export const metadata = {
  title: 'Bumrungrad Hospital: Fact Sheet & Services | Your Health Journey',
  description: "Discover Bumrungrad International Hospital's Services & Facts for exceptional care. Start your health journey with our comprehensive offerings.",
  alternates: {
    canonical: 'https://discoverinternationalmedicalservice.com/about-factsheet',
  },
  charset: 'utf-8',
};


import React from "react";
import buildingimg from "@/public/assets/about_bumrungrad/FactSheet/Main Hospital Facility & services.png";
import clinicimg from "@/public/assets/about_bumrungrad/FactSheet/Outpatient Clinic Facility & Services.png";
import resourceimg from "@/public/assets/about_bumrungrad/FactSheet/Human Resources.png";
import roomimg from "@/public/assets/about_bumrungrad/FactSheet/Outpatient Facilities.png";
import bumrunCenterimg from "@/public/assets/about_bumrungrad/FactSheet/Outpatient Clinics, Centers and Programs.png";
import techimg from "@/public/assets/about_bumrungrad/FactSheet/International Referral Offices.png";
import internimg from "@/public/assets/about_bumrungrad/FactSheet/Quality, Accreditations, Certifications and Recognitions.png";
import responimg from "@/public/assets/about_bumrungrad/FactSheet/Social Responsibility.png";
import Link from "next/link";
import Image from "next/image";

const FactSheet = () => {
  return (
    <section className="mx-5 md:container md:mx-auto">
    
      <div className="h-[20vh] md:h-[30vh] lg:h-[50vh] bumrungrand-back relative flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-black/60"></div>
        <h1 className="uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10">
          Factsheet
        </h1>
      </div>
      <div className="mx-5 my-10">
        <h2 className="text-blue text-xl md:text-2xl font-semibold">
          Bumrungrad Fact Sheet:
        </h2>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">Mission:</p>
          <hr />
        </div>
        <p className="text-justify">
          The goals of
          <Link
             href="https://discoverinternationalmedicalservice.com/"
            className="text-blue font-semibold underline"
          >
            Bumrungrad International Hospital
          </Link>
          are to create transdisciplinary care teams that provide high-quality,
          compassionate care, achieve operational excellence, and provide
          innovative clinical and service experiences.
        </p>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">Ownership:</p>
          <hr />
        </div>
        <p className="text-justify">
          An international group of seasoned medical experts and hospital
          executives oversees Bumrungrad International Hospital, a publicly
          listed enterprise on the Thai Stock Exchange.
        </p>

        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Hospitals main building and services (opened in 1997):
          </p>
          <hr />
        </div>
        <ol className="pl-6 list-decimal">
          <li className=" mt-2">
            In Southeast Asia, it is one of the largest private hospitals
          </li>
          <li className=" mt-2">
            An underground parking garage with 12 stories
          </li>
          <li className=" mt-2">70,262 square meters</li>
          <li className=" mt-2">Heliport with a full medical license</li>
          <li className=" mt-2">Network coverage for Wi-Fi in the hospital</li>
        </ol>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={buildingimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
      </div>
      <div className="mx-5 my-10">
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Facilities and
            <Link
              className="text-blue font-semibold underline"
               href="https://discoverinternationalmedicalservice.com/our-services"
            >
              Services
            </Link>
            for Outpatient Clinics (opened in 2008):
          </p>
          <hr />
        </div>
        <ol className="pl-6">
          <li className="list-disc mt-2">
            One of the biggest outpatient private clinics in the world
          </li>
          <li className="list-disc mt-2">12 floors with underground parking</li>
          <li className="list-disc mt-2">
            Seven hundred parking spots in addition to 21 floors
          </li>
          <li className="list-disc mt-2">57,206 square meters</li>
          <li className="list-disc mt-2">
            A single point of contact, featuring pharmacy and cashier areas on
            every clinic level
          </li>
          <li className="list-disc mt-2">
            Technology elements include online registration, medical records,
            and diagnostic imaging that provide doctors instant access to
            patient information from their exam room PCs; LCD multilingual
            directories and TVs; automated labs for faster, more accurate
            results and Wi-Fi.
          </li>
          <li className="list-disc mt-2">
            A large, contemporary Sky Lobby on the tenth level with first-time
            registration services, Starbucks, a bookshop, international medical
            coordination, business, and visa extension services, as well as a
            premium member lounge
          </li>
          <li className="list-disc mt-2">Volumes of Patients and Revenues </li>
          <ol className="list-decimal">
            <li className=" ml-9 mt-2">
              In total, 1.1 million patients (OPD and IPD) are treated annually.
            </li>
            <li className=" ml-9 mt-2">
              A total of 520,000 of the patients are foreigners, coming from
              more than 190 nations.
            </li>
            <li className=" ml-9 mt-2">
              In addition, USD 546 million was made in revenue in 2018.
            </li>
          </ol>
        </ol>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={clinicimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Human Resources:
          </p>
          <hr />
        </div>
        <ol className="pl-6 list-decimal">
          <li className=" mt-2">Global management group</li>
          <li className=" mt-2">More than 4,800 employees</li>
          <li className=" mt-2">
            Almost 1,200 doctors and dentists, many with training and
            certification from outside
          </li>
          <li className=" mt-2">Completely approved medical heliport</li>
          <li className=" mt-2">More than 900 nurses</li>
        </ol>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={resourceimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Inpatient Capacities:
          </p>
          <hr />
        </div>
        <ol className="pl-6 list-decimal">
          <li className=" mt-2">Among the 580 inpatient beds are:</li>
          <ol className="list-decimal">
            <li className=" ml-9 mt-2">Medical/Surgical/OB/Pediatrics</li>
            <li className=" ml-9 mt-2">Adult Intensive Care (ICU)</li>
            <li className=" ml-9 mt-2">Cardiac Care (CCU)</li>
            <li className=" ml-9 mt-2">Pediatric Intensive Care</li>
            <li className=" ml-9 mt-2">Level IV Neonatal Intensive Care</li>
          </ol>

          <li className=" mt-2">
            Deluxe Rooms with One Bed, Premier Atrium Deluxe, Premier Royal
            Suites with Two Beds, and Four Beds
          </li>
          <li className=" mt-2">
            Wi-Fi Connection: a wide selection of television channels as well as
            the hospitals information and services
          </li>
        </ol>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Outpatient Clinics:
          </p>
          <hr />
        </div>
        <ol className="pl-6">
          <li className="list-disc mt-2">275 Examination Suites</li>
          <li className="list-disc mt-2">
            Ambulance and mobile critical care fleet
          </li>
          <li className="list-disc mt-2">
            24-hour emergency care, including emergency cardiac catheterization
          </li>
          <li className="list-disc mt-2">
            A capacity of 5,500 outpatients per day
          </li>
          <li className="list-disc mt-2">Outpatient Surgery Center</li>
        </ol>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={roomimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Clinics, Centres, and Programmes for Outpatients:
          </p>
          <hr />
        </div>
        <ol className="pl-6">
          <li className="list-disc mt-2">Allergy Center</li>
          <li className="list-disc mt-2">Arrhythmia Center</li>
          <li className="list-disc mt-2">Behavioral Health Center</li>
          <li className="list-disc mt-2">Breastfeeding Clinic</li>
          <li className="list-disc mt-2">
            Bumrungrad Joint Replacement Center
          </li>
          <li className="list-disc mt-2">Childrens Center</li>
          <li className="list-disc mt-2">Dental Center</li>
          <li className="list-disc mt-2">Diabetes Center</li>
          <li className="list-disc mt-2">Diagnostic Center</li>
          <li className="list-disc mt-2">Dialysis Center</li>
          <li className="list-disc mt-2">Digestive Disease (GI) Center</li>
          <li className="list-disc mt-2">Ear, Nose and Throat Center</li>
          <li className="list-disc mt-2">Eye Center</li>
          <li className="list-disc mt-2">Health Screening Center</li>
          <li className="list-disc mt-2">Hearing and Balance Clinic</li>
          <li className="list-disc mt-2">Heart (Cardiology) Center</li>
          <li className="list-disc mt-2">Horizon Regional Cancer Center</li>
          <li className="list-disc mt-2">Hyperbaric Oxygen Therapy</li>
          <li className="list-disc mt-2">Hypertension Clinic</li>
          <li className="list-disc mt-2">Intensive Care Unit (ICU)</li>
          <li className="list-disc mt-2">Liver Center</li>
          <li className="list-disc mt-2">Medical Clinic</li>
          <li className="list-disc mt-2">Memory Clinic</li>
          <li className="list-disc mt-2">Mens Center</li>
          <li className="list-disc mt-2">Nephrology (Kidney) Center</li>
          <li className="list-disc mt-2">Neuroscience Center</li>
          <li className="list-disc mt-2">New Life Healthy Aging Clinic</li>
          <li className="list-disc mt-2">Orthopedic Center</li>
          <li className="list-disc mt-2">Pain Center</li>
          <li className="list-disc mt-2">
            Parkinsons Disease and Movement Disorders Clinic
          </li>
          <li className="list-disc mt-2">Perinatal Center</li>
          <li className="list-disc mt-2">
            Physical Therapy and Rehabilitation Center
          </li>
          <li className="list-disc mt-2">Plastic (Cosmetic) Surgery Center</li>
          <li className="list-disc mt-2">Pulmonary (Lung) Center</li>
          <li className="list-disc mt-2">Refractive Surgery Center</li>
          <li className="list-disc mt-2">Robotic Scoliosis Center</li>
          <li className="list-disc mt-2">Robotic Surgery Center</li>
          <li className="list-disc mt-2">Skin (Dermatology) Center</li>
          <li className="list-disc mt-2">Sleep Lab</li>
          <li className="list-disc mt-2">Scoliosis Center</li>
          <li className="list-disc mt-2">Spine Institute</li>
          <li className="list-disc mt-2">Sports Medicine Center</li>
          <li className="list-disc mt-2">Surgical Clinic</li>
          <li className="list-disc mt-2">Travel Medicine Center</li>
          <li className="list-disc mt-2">Urology Center</li>
          <li className="list-disc mt-2">
            VitalLife Scientific Wellness Center
          </li>
          <li className="list-disc mt-2">Womens Center</li>
        </ol>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={bumrunCenterimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Exclusive Resources and Facilities:
          </p>
          <hr />
        </div>
        <ol className="pl-6">
          <li className="list-disc mt-2">
            2 cardiac catheterization laboratories
          </li>
          <li className="list-disc mt-2">2 cardiac operating theaters</li>
          <li className="list-disc mt-2">2 cardiac operating theaters</li>
          <li className="list-disc mt-2">19 operating theaters</li>
          <li className="list-disc mt-2">Automated lab on-site</li>
          <li className="list-disc mt-2">Brachytherapy</li>
          <li className="list-disc mt-2">Bone marrow transplantation unit</li>
          <li className="list-disc mt-2">Electrophysiology lab</li>
          <li className="list-disc mt-2">Hyperbaric oxygen therapy unit</li>
          <li className="list-disc mt-2">Interventional radiology</li>
          <li className="list-disc mt-2">
            MAKO Robot Arthroplasty/MAKOplasty®
          </li>
          <li className="list-disc mt-2">
            Mazor X Robot-assisted Spine Surgery
          </li>
          <li className="list-disc mt-2">MRI, CT and Lithotripsy</li>
          <li className="list-disc mt-2">Neonatal critical care transport</li>
          <li className="list-disc mt-2">Nuclear medicine</li>
          <li className="list-disc mt-2">PACS radiology</li>
          <li className="list-disc mt-2">PET/CT scanner</li>
          <li className="list-disc mt-2">Pharmacy robot</li>
          <li className="list-disc mt-2">Precision Medicine for Oncology</li>
          <li className="list-disc mt-2">
            Radiation therapy (linear accelerator)
          </li>
          <li className="list-disc mt-2">
            Robot-assisted Prostate Cancer and Kidney Cancer Surgery using da
            Vinci System
          </li>
          <li className="list-disc mt-2">Sleep lab</li>
          <li className="list-disc mt-2">Surgical navigation system</li>
          <li className="list-disc mt-2">
            VitalLife Scientific Wellness Center
          </li>
          <li className="list-disc mt-2">
            VMAT (Volumetric Modulated Arc Therapy)
          </li>
        </ol>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Foreign Referral Coordinators:
          </p>
          <hr />
        </div>
        <p className="text-justify">
          Australia, Bahrain, Bangladesh, Cambodia, Chad, China, Ethiopia, Hong
          Kong, Indonesia, Kenya, Kuwait, Laos, Mongolia, Myanmar, Nepal, Oman,
          Pakistan, Qatar, Russia, Sudan, UAE, Vietnam and Virtual.
        </p>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={techimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            National Foreign Services:
          </p>
          <hr />
        </div>
        <ol className="pl-6 list-decimal">
          <li className=" mt-2">Over 150 interpreters,</li>
          <li className=" mt-2">International/airport concierge service,</li>
          <li className=" mt-2">Embassy assistance,</li>
          <li className=" mt-2">VIP airport transfers</li>
          <li className=" mt-2">E-mail <Link  href="https://discoverinternationalmedicalservice.com/contact-us" className="text-blue font-semibold underline">contact</Link> center,</li>
          <li className=" mt-2">
            International insurance coordination and international medical
            coordinators,
          </li>
          <li className=" mt-2">Visa extension counter,</li>
          <li className=" mt-2">Muslim prayer room with 300 person capacity</li>
        </ol>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            High standards, certifications, accreditations, and recognitions:
          </p>
          <hr />
        </div>
        <ol className="pl-6 list-decimal">
          <li className=" mt-2">
            Thailand Hospital Accreditation was given to the first private
            hospital in 1999.
          </li>
          <li className=" mt-2">
            The US-based Joint Commission International (JCI) accredited Asias
            first hospital in 2002.
          </li>
          <li className=" mt-2">
            JCI renewed accreditation in 2005, 2008, 2011, 2014, 2017 and 2020
          </li>
          <li className=" mt-2">
            The Ministry of Labour named Thailands Model Organisation on Labour
            Relations Management Award recipient.
          </li>
          <li className=" mt-2">
            The first hospital in Thailand to get its clinical laboratory
            accredited by the Gold Standard of Operational Excellence, the
            College of American Pathologists (CAP).
          </li>
          <li className=" mt-2">
            The American Nurse Credentialing Centre (ANCC)s Pathway to
            Excellence® program, which promotes pleasant practice environments
            for nurses by appreciating their contributions as patient care
            partners, was first implemented in an Asian hospital.
          </li>
          <li className=" mt-2">
            The CSSD Centre of Excellence Award recognizes the finest method for
            sterilizing instruments and medical devices.
          </li>
          <li className=" mt-2">
            Global Magazine Awards for Health and Travel
          </li>
          <li className=" mt-2">
            Asia-Pacific Medical Tourism Hospital of the Year, 2017 and 2018.
          </li>
          <li className=" mt-2">Hospital of the Year Thailand 2018,</li>
          <li className=" mt-2">
            Smart Hospital of the Year in Asia Pacific 2018,
          </li>
          <li className=" mt-2">
            Asia Pacific Transplant Service Provider of the Year 2018,
          </li>
          <li className=" mt-2">
            Asias 2018 Orthopaedic Service Provider of the Year,
          </li>
          <li className=" mt-2">
            Asia Pacific 2018 ENT Service Provider of the Year,
          </li>
          <li className=" mt-2">
            Asia Pacific 2018 Cosmetic Surgery Provider of the Year,
          </li>
          <li className=" mt-2">
            Asia Pacific 2018 Cardiology Service Provider of the Year
          </li>
          <li className=" mt-2">
            The first hospital outside of the US to get Global Healthcare
            Accreditation (GHA) with Excellence in 2017 and reaccreditation in
            2021
          </li>
          <li className=" mt-2">
            Thailands hospital was named Hospital of the Year by Healthcare
            Asia in 2018.
          </li>
          <li className=" mt-2">
            Thailands Most Trusted Hospital was recognized at the 2018 Thai
            Business Excellence Awards
          </li>
          <li className=" mt-2">
            The DNV-GL Centre of Excellence for Managing Infection Risk (MIR)
            Standard, the first of its kind in Asia, addresses infection risk
            management when providing inpatient medical, surgical, and maternity
            care as well as outpatient diagnostic, surgical, therapeutic, and
            rehabilitative services.
          </li>
          <li className=" mt-2">
            The first hospital in the world to get the GHA COVID-19 Guidelines
            for Medical Travel Programme Certification of Conformance.
          </li>
        </ol>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={internimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Social Accountability:
          </p>
          <hr />
        </div>
        <p className="text-justify">
          The goal of the 1990-founded Bumrungrad International Hospital
          Foundation is to provide healthcare to impoverished Thai citizens.
          More than 100,000 Thais have benefited from free services offered by
          the Foundation, which include life-saving heart surgery for children
          with congenital cardiac defects and free knee replacement surgery for
          individuals in need of it. Bumrungrad International has been
          recognized by the AMCHAM for its dedication to social welfare for five
          years running. In 2013, 2014, 2015, 2016, and 2017, Bumrungrad
          International received the AMCHAM "Corporate Social Responsibility
          Excellence Recognition - Gold Level" Award.
        </p>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">Description</p>
          <hr />
        </div>
        <p className="text-justify">
          Bumrungrad International Hospital delivers world-class care with
          compassion and innovation, serving over 1.1 million patients annually
          from 190 nations.
        </p>
        <div className="mt-4">
          <Image
            className="w-full h-full"
            height={500}
            width={500}
            src={responimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
      </div>
    </section>
  );
};

export default FactSheet;
