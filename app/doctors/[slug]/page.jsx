import DoctorInfo from "./_comp/singleDoctor";

export async function generateMetadata({ params }) {
  const slug = params.slug;

  // Fetch doctor data based on the slug
  const doctor = await fetch(
    `https://api.discoverinternationalmedicalservice.com/api/search/doctor/${slug}`
  )
    .then((res) => res.json())
    .then((data) => data.response.data);


  return {
    title: doctor?.name,
    description: doctor?.specialty,
    openGraph: {
      type: 'website',
      title: doctor?.name,
      description: doctor?.specialty,
      images: [
        {
          url: doctor?.cover_photo,
          alt: doctor?.name,
        },
      ],
      url: `https://discoverinternationalmedicalservice.com/doctors/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: doctor?.name,
      description: doctor?.specialty,
      images: [doctor?.cover_photo],
    },
    charset: 'utf-8',
  };
}

const Page = ({ params }) => {
  return (
    <div>
      <DoctorInfo params={params} />
    </div>
  );
}

export default Page;
