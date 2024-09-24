import ChildPackage from "./childPackage";


export async function generateStaticParams() {
  const res = await fetch('https://api.discoverinternationalmedicalservice.com/api/get/sub/packages').then((res) => res.json());
  
  console.log("🚀 ~ generateStaticParams ~ data:", res)
  return res?.data?.map((item) => ({
    slug: item?.slug,
  }));
}

const ChildPackagePage = ({params}) => {
  return <ChildPackage params={params} />
};

export default ChildPackagePage;
