import SubPackDetails from "./subPackDetails";



export async function generateStaticParams({params}) {
    const res = await fetch(
        `https://api.discoverinternationalmedicalservice.com/api/get/sub-packages/${params?.slug}`
    );
    const data = await res.json();
    return data?.response?.data?.map((item) => ({
        slug: item?.slug,
    }));
}

const ChildPackageDetailsPage = ({ params }) => {
    return <SubPackDetails params={params} />
};

export default ChildPackageDetailsPage;
