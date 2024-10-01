import React from 'react'
import SingleCenter from './_comp/singleCenter'

export async function generateMetadata({ params }) {
  const clinicId = params.id;

  // Fetch clinic details or other relevant data
  const clinic = await fetch(`https://api.discoverinternationalmedicalservice.com/api/get/centers/${params.slug}`)
    .then((res) => res.json())
    .then((data) => data?.response?.data);

  return {
    title: `${clinic.name} - Bumrungrad Hospital`,
    description: `Discover top care at Bumrungrad Hospital's ${clinic.name}. Tailored healthcare services at our ${clinic.specialty} clinic.`,
    alternates: {
      canonical: `https://discoverinternationalmedicalservice.com/clinic-centers/${clinicId}`,
    },
  };
}

const page = ({params}) => {
  return (
    <div>
      <SingleCenter params={params} />
    </div>
  )
}

export default page