"use client";

import Image from "next/image";
import airimg from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ambulance.png";
import airpickup from "@/public/assets/service_logo/Bumrungrad  Hospital-air_pickup.png";
import airticket from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ticket.png";
import appointment from "@/public/assets/service_logo/Bumrungrad  Hospital-appointment.png";
import hotelReservation from "@/public/assets/service_logo/Bumrungrad  Hospital_visa_processing.png";
import orderMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_order_medicine.png";
import teleMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_telemedicine.png";
import medicalRecords from "@/public/assets/service_logo/Bumrungrad  Hospital_medical_records.png";
import moneyTransfer from "@/public/assets/service_logo/bro4.png";
import languageImage from "@/public/assets/service_logo/bro.png";
import accommodation from "@/public/assets/service_logo/bro2.png";
import hospitalAdmission from "@/public/assets/service_logo/bro5.png";
import ContactCardImg from "@/public/assets/Bumrungrad  Hospital_contact_card.png";
import { useRouter } from "next/navigation";
import useAuth from "@/helpers/hooks/useAuth";
import Link from "next/link";

export default function Page() {
  const { auth } = useAuth();
  const router = useRouter();
  const services = [
    {
      name: "Schedule Doctor Appointment",
      img: appointment,
      pageTo: "/our-services/appointment",
      alt: "Bumrungrad International Hospital",
      description:
        "We help you book appointments with top doctors at Bumrungrad Hospital, so you get the care you need quickly.",
    },
    {
      name: "Thailand Visa Processing",
      img: hotelReservation,
      pageTo: "/our-services/visaprocessing",
      alt: "Bumrungrad International Hospital",
      description:
        "We make getting your Thailand visa easy, handling all the paperwork so you can focus on your treatment.",
    },
    {
      id: 3,
      name: "Order Medicine",
      img: orderMedicine,
      pageTo: "/our-services/order-medicine",
      alt: "Bumrungrad International Hospital",
      description:
        "We help you order medicine from Thailand and ensure it arrives safely and on time for your treatment.",
    },
    {
      name: "Medical Records",
      img: medicalRecords,
      pageTo: "/our-services/medical-record",
      alt: "Bumrungrad International Hospital",
      description:
        "We assist with transferring your medical records to Bumrungrad Hospital, making sure your doctors have all the information.",
    },
    {
      name: "Telemedicine",
      img: teleMedicine,
      pageTo: "/our-services/telemedicine",
      alt: "Bumrungrad International Hospital",
      description:
        "You can connect with expert doctors at Bumrungrad through telemedicine for consultations and follow-up care, no matter where you are.",
    },
    {
      id: 2,
      name: "Air Ambulance Service",
      img: airimg,

      alt: "Bumrungrad International Hospital",
      description:
        "If you need urgent medical care, we arrange fast and safe air ambulance transport to Bumrungrad International Hospital.",
    },
    {
      id: 7,
      name: "Air Ticket",
      img: airticket,

      alt: "Bumrungrad International Hospital",
      description:
        "We help you book international flights to Thailand for medical treatment, ensuring smooth and affordable travel.",
    },
    {
      id: 8,
      name: "Airport Transfer Service",
      img: airpickup,

      alt: "Bumrungrad International Hospital",
      description:
        "We provide airport pick-up and drop-off services, making your travel to and from the hospital easy and comfortable.",
    },
    {
      name: "Admission On Arrival",
      img: hospitalAdmission,

      alt: "Bumrungrad International Hospital",
      description:
        "We assist with your direct hospital admission upon arrival, so you can start your treatment without any delays.",
    },
    {
      name: "Thai Local Accommodation",
      img: accommodation,
      pageTo: "http://wa.me/+66948382910",
      alt: "Bumrungrad International Hospital",
      description:
        "We help you find comfortable and safe accommodation near the hospital, making your stay in Thailand relaxing and convenient.",
    },
    {
      name: "Language Interpreter",
      img: languageImage,

      alt: "Bumrungrad International Hospital",
      description:
        "We provide language interpreters to help you communicate easily with your doctors and medical team during your treatment.",
    },
    {
      name: "Transfer Money for Treatment",
      img: moneyTransfer,
      pageTo: "http://wa.me/+66948382910",
      alt: "Bumrungrad International Hospital",
      description:
        "We assist in transferring money for your medical treatment, making sure your payment reaches the hospital safely and quickly.",
    },
  ];
  const ContactCards = [
    {
      office: "Dhanmondi Office",
      building: "Rupayan Prime Tower",
      floor: "10th Floor (Lift-9)",
      house: "House:02,Road: 07, Green Road",
      city: "Dhanmondi, Dhaka-1205",
      phone1: "+8801847284860",
      phone2: "+8801324418100",
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
  const referralOffices = [
    {
      name: "Bumrungrad Hospital Referral Office Dhanmondi",
      address:
        "Rupayan Prime Tower, Plot No: 02 (9th Floor), Road No: 07, Green Road, Dhanmondi, Dhaka-1205, Bangladesh",
      phone: "+880 1847 28 4860, +880 1847 28 4863",
      email: [
        {
          label: "support@bumrungraddiscover.com",
          href: "mailto:support@bumrungraddiscover.com",
        },
        {
          label: "dhanmondi@bumrungraddiscover.com",
          href: "mailto:dhanmondi@bumrungraddiscover.com",
        },
      ],
      website: [
        { label: "discoverims.com", href: "https://discoverims.com" },
        {
          label: "discoverinternationalmedicalservice.com",
          href: "https://discoverinternationalmedicalservice.com/",
        },
      ],
      mapLink: "https://goo.gl/maps/ThG9Hx7K1Qy9rdTx6",
      fanpage: "https://www.facebook.com/bumrungraddhakaoffice",
      mapLabel: "Bumrungrad Hospital Dhaka Office",
    },
    {
      name: "Bumrungrad Hospital Referral Office Banani",
      address:
        "Alamin Park Panorama (Infront of Banani Block -C Park), Lift-5, House 105, Road 13/A, Block - C, Banani, Dhaka - 1213",
      phone: "+8801847284868, +8801977284862",
      email: [
        {
          label: "banani@bumrungraddiscover.com",
          href: "mailto:banani@bumrungraddiscover.com",
        },
        {
          label: "support@bumrungraddiscover.com",
          href: "mailto:support@bumrungraddiscover.com",
        },
      ],
      website: [
        { label: "discoverims.com", href: "https://discoverims.com" },
        {
          label: "discoverinternationalmedicalservice.com",
          href: "https://discoverinternationalmedicalservice.com/",
        },
      ],
      mapLink: "https://goo.gl/maps/K5qV5SFFbrN6YydL6",
      fanpage: "https://www.facebook.com/bumrungraddhakaoffice",
      mapLabel: "Bumrungrad Hospital Dhaka Bangladesh - Banani Branch",
    },
    {
      name: "Bumrungrad Hospital Referral Office Uttara",
      address:
        "Oasis Oliveira, Lift-02, House-01, Road-1/A, Sonargaon Janapad Road, Sector-13, Uttara, Dhaka, Bangladesh",
      phone: "+8801977284861, +8801601284300",
      email: [
        {
          label: "uttara@bumrungraddiscover.com",
          href: "mailto:uttara@bumrungraddiscover.com",
        },
        {
          label: "support@bumrungraddiscover.com",
          href: "mailto:support@bumrungraddiscover.com",
        },
      ],
      website: [
        { label: "discoverims.com", href: "https://discoverims.com" },
        {
          label: "discoverinternationalmedicalservice.com",
          href: "https://discoverinternationalmedicalservice.com/",
        },
      ],
      mapLink: "https://goo.gl/maps/XpTCEu6FrTYygwM57",
      fanpage: "https://www.facebook.com/bumrungraddhakaoffice",
      mapLabel: "Bumrungrad International Hospital Uttara Office",
    },
    {
      name: "Bumrungrad Hospital Referral Office Chittagong Agrabad",
      address:
        "Daar E Shahidi Building 3rd Floor, (Lift-3), Opposite of Ethnological Museum 69, Agrabad C/A. Chittagong.",
      phone: "+8801973-284836, +8801973-284862",
      email: [
        {
          label: "ctg@bumrungraddiscover.com",
          href: "mailto:ctg@bumrungraddiscover.com",
        },
        {
          label: "support@bumrungraddiscover.com",
          href: "mailto:support@bumrungraddiscover.com",
        },
      ],
      website: [
        { label: "discoverims.com", href: "https://discoverims.com" },
        {
          label: "discoverinternationalmedicalservice.com",
          href: "https://discoverinternationalmedicalservice.com/",
        },
      ],
      mapLink: "https://goo.gl/maps/XqXeLgP2Zj72",
      fanpage: "https://www.facebook.com/bumrungraddhakaoffice",
      mapLabel: "Bumrungrad International Hospital Chittagong",
    },
  ];

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
    <div className="mx-5 md:container md:mx-auto">
      <div className="py-20 md:py-0 md:h-[60vh] bumrungrand-back relative flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-black/60"></div>
        <div className="text-white z-10">
          <h1 className="uppercase md:text-xl text-center font-bold">
            Experience World-Class Healthcare with Bumrungrad International
            Hospital - Dhaka Office
          </h1>
          <p className="text-sm md:text-base text-center my-4 md:my-8">
            Discover International Medical Service (DIMS) is the official
            representative and International Referral Office for Bumrungrad
            Hospital Dhaka Office. We connect Bangladeshi patients with
            world-class healthcare at Bumrungrad International Hospital in
            Thailand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleAppointment}
              className="text-sm px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded"
            >
              Doctor Appoinment
            </button>
            <button
              onClick={handleHealthScreen}
              className="text-sm px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded"
            >
              Health Screening
            </button>
            <a
              href="/doctors"
              className="text-sm px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded"
            >
              Find Doctor
            </a>
            <a
              href="/send-query"
              className="text-sm px-4 py-2 bg-blue text-white border border-blue hover:bg-cream hover:text-blue md:hover:scale-105 ease-linear duration-300 shadow rounded"
            >
              Send Querey
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-10">
        <h2 className="text-xl font-semibold">
          Your Journey to Health Starts Here at Bumrungrad Hospital
        </h2>
        <p className="mt-4">
          Start your journey to exceptional healthcare at Bumrungrad Hospital
          Bangkok. Our top-notch facilities and dedicated team are committed to
          providing the best care possible, making every step of your healthcare
          journey seamless and supportive.
        </p>

        <p className="mt-4">
          <Link
            href="https://discoverinternationalmedicalservice.com"
            className="text-blue underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            DIMS (Discover International Medical Service)
          </Link>{" "}
          is a trusted name in providing seamless medical assistance and
          facilitation services to individuals seeking world-class healthcare
          solutions abroad. Our mission is to guide patients through the
          complexities of medical travel, ensuring easy access to Bumrungrad
          Hospital and top doctors across the globe.
        </p>

        <p className="mt-4">
          We specialize in coordinating treatments, consultations, and aftercare
          for a wide range of medical conditions. In collaboration with leading
          hospitals like Bumrungrad Hospital, we make sure patients receive the
          highest standard of healthcare, no matter where they are located. Our
          extensive network of international referral offices in countries such
          as Bangladesh, Bahrain, Cambodia, Chad, China, East Africa, Ethiopia,
          Hong Kong, Indonesia, Kenya, Kuwait, Laos, Mongolia, Myanmar, Nepal,
          Pakistan, UAE, and Vietnam ensures that patients worldwide can easily
          access the right medical expertise. If you have any questions or need
          assistance with any step of the process, please feel free to ask in
          the{" "}
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B66948382910&text&type=phone_number&app_absent=0"
            className="text-blue underline font-semibold"
            target="_blank"
          >
            Live Chat.
          </Link>{" "}
          We are here to help you plan your journey to world-class healthcare.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue">
            Access Bumrungrad Hospital Through Our Dhaka Referral Offices
          </h2>
          <p className="mt-4">
            {" "}
            Below is a list of our of Bumrungrad Hospital overseas Dhaka
            Referral offices. These offices will assist you in every way
            possible to ensure you receive the information and support you need.
            Contact us directly at one of our international Referral offices.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {referralOffices.map((office, index) => (
              <div key={index}>
                <h5 className="font-semibold text-blue">{office.name}</h5>
                <p className="mt-2">Address: {office.address}</p>
                <p className="mt-2">Phone: {office.phone}</p>
                <p className="mt-2">
                  Email:{" "}
                  {office.email.map((mail, i) => (
                    <span key={i}>
                      <Link
                        href={mail.href}
                        className="text-blue-600 underline"
                      >
                        {mail.label}
                      </Link>{" "}
                      {i < office.email.length - 1 && "&"}{" "}
                    </span>
                  ))}
                </p>
                <p className="mt-2">
                  Website:{" "}
                  {office.website.map((site, i) => (
                    <span key={i}>
                      <Link
                        href={site.href}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.label}
                      </Link>{" "}
                      {i < office.website.length - 1 && "&"}{" "}
                    </span>
                  ))}
                </p>
                <p className="mt-2">
                  Google Map Location:{" "}
                  <Link
                    href={office.mapLink}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {office.mapLabel}
                  </Link>
                </p>
                <p className="mt-2">
                  Fanpage:{" "}
                  <Link
                    href={office.fanpage}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {office.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-4">
            <div>
              <h5 className="text-blue font-semibold mt-8">Visa Officer</h5>
              <ul className="mt-4">
                <li>
                  Mr Shahriyar:{" "}
                  <a
                    href="tel:+8801847284864"
                    className="text-blue-600 underline"
                  >
                    +8801847284864
                  </a>
                </li>
                <li>
                  Ms Pushpi:{" "}
                  <a
                    href="tel:+8801977284860"
                    className="text-blue-600 underline"
                  >
                    +8801977284860
                  </a>
                </li>
                <li>
                  Mr Tapos Saha:{" "}
                  <a
                    href="tel:+8801977284862"
                    className="text-blue-600 underline"
                  >
                    +8801977284862
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-blue font-semibold mt-8">Reservation</h5>
              <ul className="mt-4">
                <li>
                  Mr Abdus Samad:{" "}
                  <a
                    href="tel:+8801847284867"
                    className="text-blue-600 underline"
                  >
                    +8801847284867
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-blue font-semibold mt-8">Support Mail</h5>
              <p className="mt-4">
                <a
                  href="mailto:support@bumrungraddiscover.com"
                  className="text-blue-600 underline"
                >
                  support@bumrungraddiscover.com
                </a>
              </p>
            </div>

            <div>
              <h5 className="text-blue font-semibold mt-8">Website</h5>
              <p className="mt-4">
                <Link
                  href="https://discoverinternationalmedicalservice.com/"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bumrungrad International Hospital
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <p className="text-center font-semibold text-xl text-blue">
          Our Complete Services for Patients at Bumrungrad International
          Hospital
        </p>
        <p className="text-center my-5 md:my-10">
          At Discover International Medical Service (DIMS), We provide a wide
          range of services for patients visiting Bumrungrad International
          Hospital. Here’s a quick overview of what we can help you with:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {services.map((s, i, id) => (
            <div
              key={i}
              className="cursor-pointer flex flex-col gap-4 items-center md:hover:scale-105 shadow md:hover:shadow-lg md:hover:shadow-blue duration-300 ease-linear p-4 rounded"
            >
              <Image height={150} width={100} src={s.img} alt={s.alt} />
              <h5 className="text-xl text-center font-semibold text-blue">
                {s.name}
              </h5>
              <p className="text-center">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <p className="font-semibold text-xl text-blue text-center">
          Lets make your medical trip to Bumrungrad a seamless experience!
        </p>
        <p className="my-5 md:my-10 text-center">
          At DIMS, We are committed to providing you with seamless access to the
          best healthcare at Bumrungrad International Hospital. Whether you are
          seeking treatment for a chronic condition, undergoing surgery, or just
          looking for a second opinion, Our team is here to guide you every step
          of the way. Our goal is to simplify the process of medical travel,
          handling the logistics so that you can focus on your health and
          recovery. By partnering with Bumrungrad International Hospital, we
          ensure that you receive the highest quality care in one of the world's
          Top medical destinations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <h5 className="text-center font-semibold ">{cc.office}</h5>
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
