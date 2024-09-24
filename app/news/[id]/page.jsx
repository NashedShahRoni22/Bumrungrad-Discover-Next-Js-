
import News from "./_comp/news";


export async function generateStaticParams(params) {
  const res = await fetch(
    `https://api.discoverinternationalmedicalservice.com/api/get/news/${params.id}`
  );
  const data = await res.json();
  return data?.response?.data?.map((item) => ({
    id: item?.id,
  }));
}


const OneNewsPage = ({params}) => {
  return <div>
    <News params={params} />
  </div>
};

export default OneNewsPage;
