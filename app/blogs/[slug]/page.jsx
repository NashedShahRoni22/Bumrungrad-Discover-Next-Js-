import React from "react";
import BlogDetailsPage from "./_comp/BlogDetails";

export async function generateMetadata({ params }) {
    const _blog = await fetch(
        `https://api.discoverinternationalmedicalservice.com/api/get/blogs/${params?.slug}`,
    );
    const res = await _blog.json();
    const blog = res?.data;

    return {
        title: `${blog?.blogTitle} - Bumrungrad Hospital`,
        description: `Discover top care at Bumrungrad Hospital's ${blog?.blogTitle}.`,
        alternates: {
            canonical: `https://discoverinternationalmedicalservice.com/blogs/${params?.slug}`,
        },
    };
}

const Page = ({ params }) => {
    return (
        <div>
            <BlogDetailsPage params={params} />
        </div>
    );
};

export default Page;
