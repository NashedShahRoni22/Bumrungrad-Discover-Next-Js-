"use client"; // Ensure this is at the top

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sideber = () => {
    const [blogs, setBlogs] = useState([]); // Initialize as an array
    const [loading, setLoading] = useState(false);
    const [_index, set_Index] = useState(0);

    // Get the current path
    const currentPath = usePathname();

    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    "https://api.discoverinternationalmedicalservice.com/api/get-blogs-by-category",
                    {
                        cache: "no-store",
                    }
                );
                const jsonData = await response.json();

                setBlogs(jsonData?.data || []); // Set default value to empty array if undefined
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Skeleton component
    const Skeleton = () => (
        <div className="animate-pulse space-y-4">
            {/* Skeleton for button */}
            <div className="h-6 bg-[#DFE2F4]/50 rounded w-32"></div>

            {/* Skeleton for blog titles */}
            <div className="flex flex-col gap-2">
                <div className="h-4 bg-[#DFE2F4]/50 rounded w-40"></div>
                <div className="h-4 bg-[#DFE2F4]/50 rounded w-36"></div>
                <div className="h-4 bg-[#DFE2F4]/50 rounded w-28"></div>
            </div>
        </div>
    );

    return (
        <aside className="bg-[#DFE2F4] h-fit flex flex-col gap-3 p-4 min-w-[270px]">
            {loading ? (
                // Display skeleton placeholders while loading
                <div className="space-y-6 min-h-screen">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                blogs?.map((blog, index) => (
                    <div key={index}>
                        <button
                            onClick={() => set_Index(index)}
                            className="font-bold text-xl"
                        >
                            {blog?.region}
                        </button>

                        {_index === index && (
                            <div className="flex flex-col gap-1 ml-4">
                                {blog?.blogs?.map((innerBlog, innerIndex) => {
                                    const blogPath = `/blogs/${innerBlog?.slug}`;

                                    return (
                                        <Link
                                            key={innerIndex}
                                            href={blogPath}
                                            className={
                                                currentPath === blogPath
                                                    ? "text-blue font-bold"
                                                    : "text-black"
                                            }
                                        >
                                            {innerBlog?.blogTitle?.length > 20
                                                ? `${innerBlog?.blogTitle?.slice(0, 20)}...`
                                                : innerBlog?.blogTitle}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))
            )}
        </aside>
    );
};

export default Sideber;
