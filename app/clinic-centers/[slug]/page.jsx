import React from 'react'
import SingleCenter from './clinicalCenter'

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.discoverinternationalmedicalservice.com/api/get/centers`
  );
  const data = await res.json();
  return data?.response?.data?.map((item) => ({
    slug: item?.slug,
  }));
}

const ClinicalCenterpage = ({params}) => {
  return <SingleCenter params={params} />
}

export default ClinicalCenterpage