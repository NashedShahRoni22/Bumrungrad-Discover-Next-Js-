export const metadata = {
  title: 'Learn About Bumrungrad Hospital: Excellence in Healthcare',
  description: "Explore Bumrungrad International Hospital's excellence in healthcare. Discover cutting-edge services and compassionate care for your well-being.",
  alternates: {
    canonical: 'https://discoverinternationalmedicalservice.com/about-bumrungrad',
  },
  charset: 'utf-8',
};

import React from "react";
import careimg from "@/public/assets/about_bumrungrad/bumrungrad_owned.png";
import awardimg from "@/public/assets/about_bumrungrad/Bumrungrad _Hospital_Bumrungrad_Award.png";
import specialtiesimg from "@/public/assets/about_bumrungrad/bumrungrad_owned (1).png";
import inovationsimg from "@/public/assets/about_bumrungrad/bumrungrad_owned (2).png";
import careingimg from "@/public/assets/about_bumrungrad/bumrungrad_owned (3).png";
import Link from "next/link";
import Image from "next/image";


const Bumrungrad = () => {
  return (
    <section className="mx-5 md:container md:mx-auto">
      <div className="h-[20vh] md:h-[30vh] lg:h-[50vh] bumrungrand-back relative flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-black/60"></div>
        <h1 className="uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10">
          About Bumrungard International Hospital
        </h1>
      </div>

      {/* new content here */}
      <div className="mx-5 my-10">
        <h2 className="text-blue text-xl md:text-2xl font-semibold">
          Excellent Medical Care
        </h2>
        <p className="text-justify mt-5">
          Bumrungrad International Hospital has been at the forefront of
          providing patients from all over the world with excellent medical care
          and support for nearly 40 years, having been founded in 1980. Located
          at the heart of Bangkok, Thailand, a thriving city dubbed "The City of
          Angels" and renowned for its delicious cuisine and warm hospitality.
          Internationally accredited multispecialty hospital Bumrungrad has been
          listed on the Thai Stock Exchange since 1989. At
          <Link
            className="font-semibold text-blue underline"
            href="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>
          , one of the largest private hospitals in Southeast Asia, more than
          1.1 million patients from more than 190 countries are treated
          annually.
        </p>
      </div>
      <div className="mx-5 my-20">
        <div>
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">Benchmarks</p>
          <hr />
        </div>
        <div className="mt-4">
          <ol className="pl-6 list-decimal">
            <li>The 200-bed facility opened on September 17, 1980.</li>
            <li>Listed in 1989 on the Thai Stock Exchange</li>
            <li>
              Commissioning of the replacement hospital building occurred on
              January 1, 1997.
            </li>
            <li>
              The Joint Commission celebrated the opening of the Bumrungrad
              International Clinic Building in May 2008. Accreditation on a
              global scale: since February 2002
            </li>
            <li>
              September 2017 saw the Global Healthcare Accreditation with
              Excellence.
            </li>
          </ol>

          <div className="ml-4 mt-4">
            <Image
              className="w-full h-full"
              src={careimg}
              alt="Bumrungrad International Hospital"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="mx-5 my-20">
        <div>
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Expertise Cooperation
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="text-justify mt-5">
            In order to integrate quality treatment and serve as a one-stop shop
            for complex care needs,
            <Link
              className="font-semibold text-blue underline"
              href="https://discoverinternationalmedicalservice.com/"
            >
              Bumrungrad International Hospital
            </Link>
            has assembled multidisciplinary teams of skilled medical doctors,
            nurses, pharmacists, physical therapists, nutritionists, and other
            professional staff. More than 4,800 support staff members and more
            than 1,300 physicians work at
            <Link
              className="font-semibold text-blue underline"
              href="https://discoverinternationalmedicalservice.com/"
            >
              Bumrungrad International Hospital
            </Link>
            . International board certificates from the United States, United
            Kingdom, Australia, Japan, and other advanced economies with strong
            medical standards are held by the majority of the doctors. Better
            patient outcomes and therapies are made possible by the excellent
            collaboration between our medical teams in more than 70 medical
            subspecialties.
          </p>
          <div className="ml-4 mt-4">
            <Image
              height={500}
              width={500}
              className="w-full h-full"
              src={awardimg}
              alt="Bumrungrad International Hospital"
            />
          </div>
        </div>
      </div>
      <div className="mx-5 my-20">
        <div>
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Measurable results combined with quality and safety
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="text-justify mt-5">
            Accredited by the US-based Joint Commission International (JCI) in
            2002,
            <Link
              className="font-semibold text-blue underline"
              href="https://discoverinternationalmedicalservice.com/"
            >
              Bumrungrad International Hospital
            </Link>
            became the first hospital in Asia. Additionally, the hospital has
            received five consecutive accreditations. Also, Bumrungrad became
            the first hospital outside of the United States to receive the
            Global Healthcare Accreditation with Excellence designation from
            GHA, signifying the highest international standards of quality and
            safety for patients from other countries seeking treatment and care
            at Bumrungrad International Hospital. Additionally, Bumrungrad
            became the first hospital in Asia to receive the DNV GL MIR
            Certified for Infection Risk. Bumrungrad has shown some of the
            greatest clinical success rates and lowest infection rates in the
            area and worldwide thanks to our constant clinical standards and
            numerous international accreditations.
          </p>
          <div className="ml-4 mt-4">
            <Image
              src={specialtiesimg}
              alt="Bumrungrad International Hospital"
              height={500}
              width={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="mx-5 my-20">
        <div>
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Tech and Innovation
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="text-justify mt-5">
            Medical technology and cutting-edge patient healthcare services are
            areas in which
            <Link
              className="font-semibold text-blue underline"
              href="https://discoverinternationalmedicalservice.com/"
            >
              Bumrungrad International Hospital
            </Link>
            excels. The Precision Medicine department at Bumrungrad has grown,
            offering the most recent innovative therapies and individualized
            cancer treatments, primarily from the US and Europe. This is one of
            the most recent innovations. We further employ CardioInsight, the
            only operational facility in Asia Pacific, which is a fully
            non-invasive diagnostic tool for the diagnosis of cardiac
            arrhythmias. Becoming the first IBM Watson for Oncology facility
            globally allowed Bumrungrad to maintain its position as a leader in
            cutting-edge technology. Utilizing thousands of past instances,
            hundreds of medical articles and textbooks, the most recent clinical
            studies, and more than 12 million pages of data, IBM Watson, a
            machine-learning AI, helps doctors by analyzing patient data.
          </p>
          <div className="ml-4 mt-4">
            <Image
              height={500}
              width={500}
              className="w-full h-full"
              src={inovationsimg}
              alt="Bumrungrad International Hospital"
            />
          </div>
        </div>
      </div>
      <div className="mx-5 my-20">
        <div>
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">
            Kind Hearted Caregiving
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="text-justify mt-5">
            One of the core values of Bumrungrad International is compassionate
            care. Newsweek, The Financial Times, CBS 60 Minutes, Reader's
            Digest, International Herald Tribune, and Inside Man on CNN have all
            featured it. The article highlights Bumrungrad's excellent care and
            international medical tourism, making it a top choice for medical
            tourism hospital destinations. For patients from almost any country,
            Bumrungrad Hospital has more than 200 translators on staff to assist
            with linguistic issues. Almost all of the hospital's clinicians are
            fluent in English.Our
            <Link
              href="https://discoverims.com/"
              className="font-semibold underline text-blue"
            >
              Bumrungrad International
            </Link>
            Airport Representative Office at Suvarnabhumi Airport offers
            patients and their families comprehensive healthcare services,
            including hotel reservations upon arrival and efficient pick-up and
            drop-off logistics. Convenience is another important factor at
            Bumrungrad. Patients from outside can receive the care they require
            and get back home faster thanks to the hospital's one-stop medical
            campus, which can offer diagnostic tests, specialized referrals, and
            treatment in a matter of days rather than weeks.Furthermore,
            Bumrungrad International Hospital has a one-price policy for all
            medical services; this means that patients, whether domestic or
            foreign, pay the same amount for care regardless of their
            nationality. No matter where they are from, Bumrungrad goes above
            and beyond to make sure that every patient is treated fairly and
            with care via compassion, comfort, convenience, and coordination.
            Bumrungrad means "care for the people" in Thai, for this reason.
          </p>
          <div className="ml-4 mt-4">
            <Image
              height={500}
              width={500}
              className="w-full h-full"
              src={careingimg}
              alt="Bumrungrad International Hospital"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bumrungrad;
