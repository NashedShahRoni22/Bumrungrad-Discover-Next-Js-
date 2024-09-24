import SubPackDetails from "./subPackDetails";



export async function generateStaticParams() {
    const res = await fetch("https://api.discoverinternationalmedicalservice.com/api/get/sub-packages").then((res) => res.json());

    return res?.data?.map((item) => ({
        slug: item?.slug,
    }));
}

const ChildPackageDetailsPage = ({ params }) => {
    return <SubPackDetails params={params} />
};

export default ChildPackageDetailsPage;
