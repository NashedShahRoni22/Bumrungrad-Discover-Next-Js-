import TeleMedicine from "./_comp/telemedicine";

export const metadata = {
    title: 'Bumrungrad Hospital: Explore The Accreditation & Awards',
    description: "Discover Bumrungrad International Hospital's Accolades. Elevate your health journey with excellence at our hospital. Explore now! #BumrungradHospital",
    alternates: {
      canonical: 'https://discoverinternationalmedicalservice.com/telemedicine',
    },
    charset: 'utf-8',
  };


const page = () => {
  return (
    <div>
        <TeleMedicine />
    </div>
  )
}

export default page