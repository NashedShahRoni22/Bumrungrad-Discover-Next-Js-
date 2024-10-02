import React from 'react'
import ViewAllCenters from './_comp/ViewAllCenters'

export const metadata = {
  title: 'Bumrungrad Hospital: Premier Care Clinics & Centers',
  description: 'Discover premier care at Bumrungrad International Hospital\'s top clinics & centers. Tailored healthcare for your well-being. Experience excellence today.',
  charset: 'utf-8',
  alternates: {
    canonical: 'https://discoverinternationalmedicalservice.com/clinic-centers',
  },
};


const page = () => {
  return (
    <div>
      <ViewAllCenters />
    </div>
  )
}

export default page