"use client";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CardLoader } from "@/components/ui/cardload"; // Make sure this is correctly implemented

const AllBlogs = () => {
  const [allBlogData, setAllBlogData] = useState([]);
  const [loader, setLoader] = useState(true); // Default to loading state

  useEffect(() => {
    fetch("https://api.discoverinternationalmedicalservice.com/api/get/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setAllBlogData(data?.data);
        } else {
        }
        setLoader(false); // Stop loader regardless of response
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoader(false);
      });
  }, []);

  return (
    <div className="p-5 md:p-10 md:container md:mx-auto">
      <div className="">
        <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          Bumrungrad Health Blogs
        </h1>
        <div className="my-5">
          <Divider />
        </div>
      </div>

      {loader ? (
        <CardLoader cardLength={15} gridNumber={3} speed="slow" /> // Skeleton loader
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10">
          {allBlogData?.map((d, i) => (
            <div
              key={i}
              className="shadow rounded hover:shadow-xl duration-300 ease-linear flex flex-col justify-between"
            >
              <Image
                height={300}
                width={1000}
                src={d.blogImage}
                alt="Bumrungrad International Hospital"
                className="w-full h-[200px] object-cover"
              />
              <div className="p-5">
                <h5 className="font-semibold text-blue text-lg">
                  {d.blogTitle}
                </h5>
                <div
                  className="text-sm lg:text-base mb-5"
                  dangerouslySetInnerHTML={{
                    __html: `${d?.blogDescription.slice(0, 300)}${
                      d.blogDescription.length > 300 ? "..." : ""
                    }`,
                  }}
                />
                {d.blogDescription.length > 300 && (
                  <Link
                    href={`/blogs/${d?.slug}`}
                    className="px-4 py-2 bg-blue text-white shadow rounded text-sm"
                  >
                    Read More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
