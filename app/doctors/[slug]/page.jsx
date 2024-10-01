import DoctorInfo from "./_comp/singleDoctor";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  
  // Fetch doctor data based on the slug
  const doctor = await fetch(
    `https://api.discoverinternationalmedicalservice.com/api/search/doctor/${params.slug}`
  ).then((res) => res.json()).then((data) => data.response.data);

  return {
    title: doctor?.name || "Doctor's name",
    description: doctor?.specialty || "Doctor's specialty",
    openGraph: {
      type: 'website',
      title: doctor?.name || "Doctor's name",
      description: doctor?.specialty || "Doctor's specialty",
      images: [
        {
          url: doctor?.cover_photo || 'default-image-url.jpg',
          alt: doctor?.name || 'Doctor cover photo',
        },
      ],
      url: `https://discoverinternationalmedicalservice.com/doctors/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: doctor?.name || "Doctor's name",
      description: doctor?.specialty || "Doctor's specialty",
      images: [doctor?.cover_photo || 'default-image-url.jpg'],
    },
    charset: 'utf-8',
  };
}

const page = ({params}) => {
  return (
    <div>
      <DoctorInfo params={params} />
    </div>
  )
}

export default page


