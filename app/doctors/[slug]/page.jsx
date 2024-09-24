
import Doctor from "./doctor";


export async function generateStaticParams(params) {
  const res = await fetch(
    `https://api.discoverinternationalmedicalservice.com/api/get/doctors/${params?.slug}`
  );
  const data = await res.json();
  return data?.response?.data?.map((item) => ({
    slug: item?.slug,
  }));
}


export default function DoctorInfo({params}) {
  return <Doctor params={params} />
}
