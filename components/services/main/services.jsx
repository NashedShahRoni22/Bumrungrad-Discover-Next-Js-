"use client";

import airimg from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ambulance.png";
import airpickup from "@/public/assets/service_logo/Bumrungrad  Hospital-air_pickup.png";
import airticket from "@/public/assets/service_logo/Bumrungrad  Hospital-air_ticket.png";
import appointment from "@/public/assets/service_logo/Bumrungrad  Hospital-appointment.png";
import hotelReservation from "@/public/assets/service_logo/Bumrungrad  Hospital_visa_processing.png";
import orderMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_order_medicine.png";
import teleMedicine from "@/public/assets/service_logo/Bumrungrad  Hospital_telemedicine.png";
import medicalRecords from "@/public/assets/service_logo/Bumrungrad  Hospital_medical_records.png";
import AirAmbulanceForm from "../airAmbulance";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/helpers/hooks/useAuth";
import AirtTcket from "../airtTcket";
import AirPickup from "../airPickup";
import UpComming from "../upComming";
import moneyTransfer from '@/public/assets/service_logo/bro4.png'
import languageImage from '@/public/assets/service_logo/bro.png'
import accommodation from '@/public/assets/service_logo/bro2.png'
import hospitalAdmission from '@/public/assets/service_logo/bro5.png'
import Arrival from "../arrival";
import LangugeInterpreter from "../languge";



export default function Services({ handaleOpen, getData }) {
  const {auth} = useAuth()
  const path = usePathname();
  const router = useRouter();

const handleClick = (s, i, id) => {
  // If the 'pageTo' property exists, navigate to that page
  if (s?.pageTo) {
    return router.push(s.pageTo);
  }

  // Handle specific case for "Language Interpreter"
  if (s?.name === "Language Interpreter") {
    handaleOpen(id);
    getData(s);
    return;
  }

  // If the user is not authenticated, redirect to login
  if (!auth) {
    return router.push('/login');
  }

  // Default case: handle opening and data fetching
  handaleOpen(id);
  getData(s);
};



  return (
    <div className="p-5 md:p-10 my-10 md:my-20 md:container md:mx-auto">
      {
        path == '/our-services' ? (
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
            Our Services
          </h2>
        ) : (
          <h2 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue text-center">
        Our Complete Services for Patients at
        Bumrungrad International Hospital
      </h2>
        )
      }
     
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5 md:mt-10">
        {services.map((s, i, id) => (
          <button
            key={i}
            onClick={() => handleClick(s, i, id)}
            className="cursor-pointer flex flex-col gap-4 items-center md:hover:scale-105 shadow md:hover:shadow-lg md:hover:shadow-blue duration-300 ease-linear p-4 rounded"
          >
            <Image height={150} width={100} src={s.img} alt={s.alt} />
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


const services = [
  {
    name: "Schedule Doctor Appointment",
    img: appointment,
    pageTo: "/our-services/appointment",
    alt: "Bumrungrad International Hospital",
    description:
      "Easily book your Appointment with top doctors at Bumrungrad International Hospital, Thailand. We're here to make sure you get the best care quickly and without any hassle.",
  },
  {
    name: "Thailand Visa Processing",
    img: hotelReservation,
    pageTo: "/our-services/visaprocessing",
    alt: "Bumrungrad International Hospital",
    description:
      "We’re make getting your Thailand visa simple and stress-free. From figuring out what you need to managing the paperwork, our team has you covered. Let us handle the details so you can get excited about your trip!",
  },
  {
    id: 3,
    name: "Order Medicine",
    img: orderMedicine,
    pageTo: "/our-services/order-medicine",
    alt: "Bumrungrad International Hospital",
    description:
      "Enjoy a simple and efficient way to order your medicine from Thailand. Our service manages the details for you, making sure your medication arrives as expected.",
  },
  {
    name: "Medical Records",
    img: medicalRecords,
    pageTo: "/our-services/medical-record",
    alt: "Bumrungrad International Hospital",
    description:
      'We want to support you every step of the way. That’s why we offer a clear and easy-to-understand treatment plan along with a detailed cost estimate for critical care. Our friendly approach ensures you have all the information you need, so you can focus on your health without any added stress.'
  },
  {
    name: "Telemedicine",
    img: teleMedicine,
    pageTo: "/our-services/telemedicine",
    alt: "Bumrungrad International Hospital",
    description:
      "Experience expert medical consultations from Bumrungrad Hospital through our telemedicine service. We make connecting with top doctors easy and accessible from home.",
  },
  {
    id: 2,
    name: "Air Ambulance Service",
    img: airimg,
    form: <AirAmbulanceForm />,
    alt: "Bumrungrad International Hospital",
    description:
      "We’re here to help in emergencies with fast and reliable air ambulance service. Our experienced team ensures you’re transported safely and comfortably to top hospitals.",
  },
  {
    id: 7,
    name: "Air Ticket",
    img: airticket,
    form: <AirtTcket />,
    alt: "Bumrungrad International Hospital",
    description:
      "Book your Thailand air ticket booking for treatment effortlessly with us. We offer daily options, competitive pricing, and seamless service, ensuring a smooth, professional, and stress-free experience.",
  },
  {
    id: 8,
    name: "Airport Transfer Service",
    img: airpickup,
    form: <AirPickup />,
    alt: "Bumrungrad International Hospital",
    description:
      "We’re here to make your airport journey as smooth as possible. Our team will handle pick-up and drop-off, so you can relax and enjoy a comfortable ride to your accommodation.",
  },
  {
    name: "Admission On Arrival",
    img: hospitalAdmission,
    form: <Arrival />,
    alt: "Bumrungrad International Hospital",
    description:
      "We’re make your arrival as smooth and stress-free as possible. From quick online pre-registration to personal help from our team, we’re committed to making sure you settle in comfortably and start your care without any hassle.",
  },
  {
    name: "Thai Local Accommodation",
    img: accommodation,
    pageTo: "http://wa.me/+66948382910",
    alt: "Bumrungrad International Hospital",
    description:
      "We offer your airport pick-up and drop-off is simple and relaxed. From the airport to your Thai accommodation, we make every step of your journey comfortable.",
  },
  {
    name: "Language Interpreter",
    img: languageImage,
    form: <LangugeInterpreter />,
    alt: "Bumrungrad International Hospital",
    description:
      "Our language interpreters are here to make your conversations seamless and stress-free. We ensure accurate and easy communication every time.",
  },
  {
    name: "Transfer Money for Treatment",
    img: moneyTransfer,
    pageTo: "http://wa.me/+66948382910",
    alt: "Bumrungrad International Hospital",
    description:
      "We simplify transferring funds for your medical treatment. Our process ensures your money reaches its destination quickly and securely, so you can focus on your care.",
  },
 
];