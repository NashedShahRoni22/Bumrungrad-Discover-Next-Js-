import News from "./news";

export async function generateStaticParams() {
  const res = await fetch('https://api.discoverinternationalmedicalservice.com/api/get/news').then((res) => res.json());

  if (!res?.data) return [];

  // Convert the id to a string
  return res?.data?.map((item) => ({
    id: item?.id?.toString(),
  }));
}

const OneNewsPage = ({ params }) => {
  return <News params={params} />;
};

export default OneNewsPage;
