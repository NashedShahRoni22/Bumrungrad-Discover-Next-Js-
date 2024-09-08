"use client";

import airimg from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ambulance.png";
import airpickup from "@/public/assets/service_logo/Bumrungrad  Hospital-air_pickup.png";
import airticket from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ticket.png";
import appointment from "@/public/assets/service_logo/Bumrungrad  Hospital-appointment.png";
import hotelReservation from "@/public/assets/service_logo/Bumrungrad  Hospital_visa_processing.png";
import orderMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_order_medicine.png";
import teleMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_telemedicine.png";
import medicalRecords from "@/public/assets/service_logo/Bumrungrad  Hospital_medical_records.png";
// import AirAmbulanceForm from "./modalFrom/AirAmbulanceForm";
// import AirtTcket from "./modalFrom/AirtTcket";
// import AirPickup from "./modalFrom/AirPickup";
import Image from "next/image";

const services = [
  {
    name: "Schedule Doctor Appointment",
    img: appointment,
    pageTo: "/appointment",
    alt: "Bumrungrad International Hospital",
    description:
      "Easily book your Appointment with top doctors at Bumrungrad International Hospital, Thailand. We're here to make sure you get the best care quickly and without any hassle.",
  },
  {
    name: "Thailand Visa Processing",
    img: hotelReservation,
    pageTo: "/visaprocessing",
    alt: "Bumrungrad International Hospital",
    description:
      "We’re make getting your Thailand visa simple and stress-free. From figuring out what you need to managing the paperwork, our team has you covered. Let us handle the details so you can get excited about your trip!",
  },
  {
    id: 3,
    name: "Order Medicine",
    img: orderMedicine,
    pageTo: "/order-medicine",
    alt: "Bumrungrad International Hospital",
    description:
      "Enjoy a simple and efficient way to order your medicine from Thailand. Our service manages the details for you, making sure your medication arrives as expected.",
  },
  {
    name: "Medical Enquiry",
    img: medicalRecords,
    pageTo: "/medical-record",
    alt: "Bumrungrad International Hospital",
    description:
      "We want to support you every step of the way. That’s why we offer a clear and easy-to-understand treatment plan along with a detailed cost estimate for critical care. Our friendly approach ensures you have all the information you need, so you can focus on your health without any added stress",
  },
  {
    name: "Telemedicine",
    img: teleMedicine,
    pageTo: "/telemedicine",
    alt: "Bumrungrad International Hospital",
    description:
      "Experience expert medical consultations from Bumrungrad Hospital through our telemedicine service. We make connecting with top doctors easy and accessible from home.",
  },
  {
    id: 2,
    name: "Air Ambulance Service",
    img: airimg,
    alt: "Bumrungrad International Hospital",
    description:
      "We’re here to help in emergencies with fast and reliable air ambulance service. Our experienced team ensures you’re transported safely and comfortably to top hospitals.",
  },
  {
    id: 7,
    name: "Air Ticket",
    img: airticket,
    alt: "Bumrungrad International Hospital",
    description:
      "Book air tickets for patients and their families traveling for treatment.",
  },
  {
    id: 8,
    name: "Airport Transfer Service",
    img: airpickup,
    alt: "Bumrungrad International Hospital",
    description:
      "We’re here to make your airport journey as smooth as possible. Our team will handle pick-up and drop-off, so you can relax and enjoy a comfortable ride to your accommodation.",
  },
  {
    name: "Admission On Arrival",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "We’re make your arrival as smooth and stress-free as possible. From quick online pre-registration to personal help from our team, we’re committed to making sure you settle in comfortably and start your care without any hassle.",
  },
  {
    name: "Thai Local Accommodation",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "We offer your airport pick-up and drop-off is simple and relaxed. From the airport to your Thai accommodation, we make every step of your journey comfortable.",
  },
  {
    name: "Language Interpreter",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "Our language interpreters are here to make your conversations seamless and stress-free. We ensure accurate and easy communication every time.",
  },
  {
    name: "Transfer Money for Treatment",
    img: appointment,
    alt: "Bumrungrad International Hospital",
    description:
      "We simplify transferring funds for your medical treatment. Our process ensures your money reaches its destination quickly and securely, so you can focus on your care.",
  },
];

export default function Services({ handaleOpen, getData }) {
  const handleClick = (s, i, id) => {
    handaleOpen(id);
    getData(s);
  };

  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto">
      <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Our Complete Services for Bangladeshi Patients <br /> at Bumrungrad
        International Hospital
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5 md:mt-10">
        {services.map((s, i, id) => (
          <button
            key={i}
            onClick={() => handleClick(s, i, id)}
            className="cursor-pointer flex flex-col gap-4 items-center md:hover:scale-105 shadow md:hover:shadow-lg md:hover:shadow-blue duration-300 ease-linear p-4 rounded"
          >
            <Image height={100} width={100} src={s.img} alt={s.alt} />
            <h5 className="text-xl text-center font-semibold text-blue">
              {s.name}
            </h5>
            <p className="text-center">{s.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
