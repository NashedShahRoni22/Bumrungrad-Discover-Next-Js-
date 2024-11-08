export const metadata = {
  title: "Privacy Policy | Bumrungrad International Medical Services",
  description:
    "Learn how we protect your privacy at Bumrungrad International Medical, ensuring your personal data is safe and secure with our services.",
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCardImg from "@/public/assets/Bumrungrad  Hospital_contact_card.png";

export default function PrivacyPolicy() {
  const ContactCards = [
    {
      office: "Dhanmondi Office",
      building: "Rupayan Prime Tower",
      floor: "10th Floor (Lift-9)",
      house: "House:02,Road: 07, Green Road",
      city: "Dhanmondi, Dhaka-1205",
      phone1: "+8801847284860",
      phone2: "+8801324-418100",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.05224193445!2d90.3824876761062!3d23.745516388962468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91b29851709%3A0xc3d50a2ecf8fad9a!2sBumrungrad%20Hospital%20Dhaka%20Office!5e0!3m2!1sen!2sbd!4v1692206329747!5m2!1sen!2sbd",
    },
    {
      office: "Banani Office",
      building: "Alamin Park Panorama (Beside Banani Post Office),",
      floor: "8th Floor (Lift-5)",
      house: "Road 13/A, Block - C, House 105,",
      city: "Banani, Dhaka - 1213,",
      phone1: "+8801977284860",
      phone2: "+8801847284862",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29212.303573866055!2d90.3837837!3d23.7638509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72e25bd9c23%3A0x3d32da1eea1d8b1c!2sBumrungrad%20Hospital%20Bangladesh%20%7C%20Patient%20Support%20Center%20In%20Gulshan%20Dhaka%20%7C%20Book%20Your%20Doctor%20Appointment%20at%20Bumrungrad!5e0!3m2!1sen!2ssg!4v1692561871626!5m2!1sen!2ssg",
    },
    {
      office: "Uttara Office",
      building: "Sector-13, House: 01",
      floor: "Janapadd Road",
      house: "Opposite of Bata Showroom",
      city: "Uttara, Dhaka-1230",
      phone1: "+8801977284861",
      phone2: "+8801601284300",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.434392452508!2d90.3928183!3d23.874210400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52a06df3939%3A0x5865aa1fbf242113!2sBumrungrad%20International%20Hospital%20Uttara%20Office!5e0!3m2!1sen!2ssg!4v1692561953360!5m2!1sen!2ssg",
    },
    {
      office: "Chattogram Office",
      building: "Daar E Shahidi Building",
      floor: "3rd Floor, (Lift-3)",
      house: "House:69, Agrabad C/A",
      city: "Chattogram-4100",
      phone1: "+8801847284863",
      phone2: "+8801847284862",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939716.4091297725!2d90.5450213!3d23.0689941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9b23e4a2043%3A0x4d00aafa2c904ae3!2zQnVtcnVuZ3JhZCBJbnRlcm5hdGlvbmFsIEhvc3BpdGFsIFJlZmVycmFsIE9mZmljZS1DaGF0dGFncmFtIC4vLyDgpqzgpr7gpq7gprDgp4Hgpqjgppfgp43gprDgpqYg4KaH4Kao4KeN4Kaf4Ka-4Kaw4Kao4KeN4Kav4Ka-4Ka24Kao4Ka-4KayIOCmueCmvuCmuOCmquCmvuCmpOCmvuCmsiDgprDgp4fgpqvgpr7gprDgp4fgprIg4KaF4Kar4Ka_4Ka4IOCmmuCmn-CnjeCmn-Cml-CnjeCmsOCmvuCmrg!5e0!3m2!1sen!2ssg!4v1692561993428!5m2!1sen!2ssg",
    },
  ];
  return (
    <div className="p-5 my-5 md:container md:mx-auto ">
      <h5 className="text-3xl">
        Welcome to Bumrungrad Discover – Your Privacy Matters
      </h5>
      <p className="text-justify mt-4">
        We are committed to protecting your privacy and ensuring that your
        personal information is handled in a safe and responsible manner. This
        Privacy Policy outlines the types of personal information we collect,
        how we use and protect that information, and your rights regarding your
        personal data.
      </p>
      <h5 className="text-3xl mt-8">
        Welcome to Bumrungrad Discover – Your Privacy Matters
      </h5>
      <p className="text-justify mt-4">
        We may collect and process the following types of personal information:
      </p>
      <ol className="pl-6">
        <li className="list-disc mt-2">
          Personal Identification Information: Name, email address, phone
          number, and postal address.
        </li>
        <li className="list-disc mt-2">
          Health Information: Medical history, current health conditions, and
          details of treatment received or required.
        </li>
        <li className="list-disc mt-2">
          Travel Information: Passport details, visa information, travel
          itinerary, and accommodation details.
        </li>
        <li className="list-disc mt-2">
          Payment Information: Credit card details, billing address, and other
          payment-related information.
        </li>
        <li className="list-disc mt-2">
          Technical Data: IP address, browser type, operating system, and
          browsing behavior on our website.
        </li>
      </ol>
      <h5 className="text-3xl mt-8">How We Use Your Information</h5>
      <p className="text-justify mt-4">
        We use the collected information for the following purposes:
      </p>
      <ol className="pl-6">
        <li className="list-disc mt-2">
          To provide medical referral services to Bumrungrad International
          Hospital.
        </li>
        <li className="list-disc mt-2">
          To assist with visa processing, air tickets, air ambulance, and
          airport pickups
        </li>
        <li className="list-disc mt-2">
          To schedule doctor appointments and arrange telemedicine
          consultations.
        </li>
        <li className="list-disc mt-2">To order and deliver medications.</li>
        <li className="list-disc mt-2">
          To respond to your inquiries and provide customer support.
        </li>
        <li className="list-disc mt-2">
          To send you updates, promotional materials, and other information
          related to our services.
        </li>
        <li className="list-disc mt-2">To improve our website and services.</li>
      </ol>
      <h5 className="text-3xl mt-8">Sharing Your Information</h5>
      <p className="text-justify mt-4">
        We may share your personal information with:
      </p>
      <ol className="pl-6">
        <li className="list-disc mt-2">
          <Link
            className="font-semibold text-blue underline"
            href="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>{" "}
          International Hospital to arrange medical services.
        </li>
        <li className="list-disc mt-2">
          Travel agencies, airlines, and other service providers for travel
          arrangements.
        </li>
        <li className="list-disc mt-2">
          Payment processors to facilitate transactions.
        </li>
        <li className="list-disc mt-2">
          Government authorities if required by law or necessary for visa and
          travel arrangements.
        </li>
        <li className="list-disc mt-2">
          Our affiliates and partners to improve our{" "}
          <Link
            className="font-semibold text-blue underline"
            href="https://discoverinternationalmedicalservice.com/our-services"
          >
            Our Service
          </Link>{" "}
        </li>
        <li className="list-disc mt-2">
          We do not sell or rent your personal information to third parties.
        </li>
      </ol>
      <h5 className="text-3xl mt-8">Data Security</h5>
      <p className="text-justify mt-4">
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access, loss, or
        destruction. These measures include encryption, secure servers, and
        restricted access to personal information.
      </p>
      <h5 className="text-3xl mt-8">Your Rights</h5>
      <p className="text-justify mt-4">
        You have the following rights regarding your personal information:
      </p>
      <ol className="pl-6">
        <li className="list-disc mt-2">
          Access: You can request access to your personal information and obtain
          a copy of it.
        </li>
        <li className="list-disc mt-2">
          Correction: You can request correction of any inaccurate or incomplete
          personal information.
        </li>
        <li className="list-disc mt-2">
          Deletion: You can request deletion of your personal information,
          subject to certain conditions.
        </li>
        <li className="list-disc mt-2">
          Objection: You can object to the processing of your personal
          information under certain circumstances.
        </li>
        <li className="list-disc mt-2">
          Restriction: You can request restrictions on the processing of your
          personal information under certain conditions.
        </li>
        <li className="list-disc mt-2">
          Portability: You can request the transfer of your personal information
          to another party.
        </li>
        <li className="list-disc mt-2">
          To exercise any of these rights, please
          <Link
            className="font-semibold text-blue underline ml-2"
            href="https://discoverinternationalmedicalservice.com/contact-us"
          >
            Contact
          </Link>{" "}
          us at{" "}
          <span className="text-blue font-bold">
            support@discoverinternationalmedicalservice.com
          </span>
        </li>
      </ol>
      <h5 className="text-3xl mt-8">Cookies and Tracking Technologies</h5>
      <p className="text-justify mt-4">
        Our website uses cookies and similar tracking technologies to enhance
        your browsing experience and analyze website traffic. You can set your
        browser to refuse cookies, but this may affect your ability to use
        certain features of our website.
      </p>
      <h5 className="text-3xl mt-8">Changes to This Privacy Policy</h5>
      <p className="text-justify mt-4">
        We may update this Privacy Policy from time to time. We will notify you
        of any significant changes by posting the updated policy on our website.
        Your continued use of our services after the changes take effect
        constitutes your acceptance of the revised policy.
      </p>
      <h5 className="text-3xl mt-8">Contact Us</h5>
      <p className="text-justify mt-4">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <h5 className="text-2xl mt-5">Bumrungrad Discover</h5>
      <p className="text-justify mt-2">
        {" "}
        <span className="font-extrabold ">Email : </span>
        <span className="text-blue underline">
          support@discoverinternationalmedicalservice.com
        </span>
      </p>
      <p className="text-justify mt-2">
        {" "}
        <span className="font-extrabold ">Phone : </span>
        +8801847284860 , +8801324-418100
      </p>
      <h5 className="text-3xl mt-8">Address : </h5>
      <div className="md:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          {ContactCards.map((cc, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row shadow-xl rounded items-center justify-between gap-8 md:gap-0"
            >
              <div className="p-5 h-full w-full md:w-1/2 relative flex flex-col items-center gap-4">
                <Image
                  height={150}
                  width={150}
                  src={ContactCardImg}
                  alt="Bumrungrad International Hospital"
                  effect="blur"
                  className="h-[150px] w-[150px]"
                />
                <div className="flex flex-col">
                  <h5 className="text-center font-semibold text-xl">
                    {cc.office}
                  </h5>
                  <div className="absolute top-0 left-0 bg-black/90 h-full w-full hidden group-hover:flex flex-col items-center justify-center rounded md:rounded-r-none text-white duration-300 ease-linear">
                    <h5 className="text-center font-semibold text-lg">
                      {cc.office}
                    </h5>
                    <p className="text-center">{cc.building}</p>
                    <p className="text-center">{cc.floor}</p>
                    <p className="text-center">{cc.house}</p>
                    <p className="text-center">{cc.city}</p>
                    <p className="text-center">{cc.phone1}</p>
                    <p className="text-center">{cc.phone2}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2 md:h-full">
                <iframe
                  src={cc.map}
                  title={cc.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
