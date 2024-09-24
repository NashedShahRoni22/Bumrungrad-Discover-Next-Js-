

import News from "./news";

export async function generateStaticParams({ params }) {
  try {
    const res = await fetch(
      `https://api.discoverinternationalmedicalservice.com/api/get/news/${params?.id}`
    );

    // Handle non-OK response
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();
    const newsData = data?.response?.data;

    console.log("datas info", newsData);

    // Ensure newsData is an array before mapping
    if (Array.isArray(newsData)) {
      return newsData.map((item) => ({
        id: item?.id,
      }));
    } else {
      console.error("newsData is not an array", newsData);
      return []; // Return an empty array if the data isn't iterable
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
}

const OneNewsPage = ({ params }) => {
  return <News params={params} />;
};

export default OneNewsPage;
