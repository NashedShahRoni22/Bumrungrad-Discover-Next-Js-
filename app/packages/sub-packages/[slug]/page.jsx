import ChildPackage from "./childPackage";


export async function generateStaticParams(params) {
  const res = await fetch(
    `https://api.discoverinternationalmedicalservice.com/api/get/sub/packages/${params.slug}`
  );
  const data = await res.json();
  return data?.response?.data?.map((item) => ({
    slug: item?.slug,
  }));
}

const ChildPackagePage = ({params}) => {
  return <div>
    <ChildPackage params={params} />
  </div>
};

export default ChildPackagePage;
