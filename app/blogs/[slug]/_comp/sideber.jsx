"use client"; // Ensure this is at the top

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Sideber = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [_index, setIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

  const currentPath = usePathname();
  const customValue = "OTHERS";

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.discoverinternationalmedicalservice.com/api/get-blogs-by-category"
      );
      const jsonData = await response.json();
      setBlogs(jsonData?.data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const updatedDatas = blogs.map((item) => ({
    ...item,
    region: item.region === "" ? customValue : item.region,
  }));

  const handleClick = useCallback((index) => {
    setIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="flex flex-col gap-4 relative mt-5">
      {/* <button 
                onClick={handleToggle} 
                className='z-30 right-0 absolute top-0 text-xl font-bold border p-3 bg-cream max-md:block'>
                Blog List
            </button> */}
      <aside
        className={`flex flex-col gap-2 py-4 min-w-[270px] bg-[#DFE2F4]/20 h-fit max-md:w-full`}
      >
        {loading ? (
          <div className="space-y-6 h-fit">
            {[...Array(10)].map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ) : (
          updatedDatas.map((blog, index) => (
            <div key={blog.id || index}>
              <button
                onClick={() => handleClick(index)}
                className="flex justify-between items-center  w-full text-left px-4 py-2.5 border-b border-cream last:border-none"
              >
                {blog.region} <IoChevronDownOutline />
              </button>

              {_index === index && (
                <ul className="flex flex-col gap-1 ml-8">
                  {blog.blogs.map((innerBlog, innerIndex) => {
                    const blogPath = `/blogs/${innerBlog.slug}`;

                    return (
                      <li
                        key={innerBlog.id || innerIndex}
                        className="list-disc"
                      >
                        <Link
                          href={blogPath}
                          className={
                            currentPath === blogPath
                              ? "text-blue font-bold"
                              : "text-black hover:border-b transition-all duration-300"
                          }
                        >
                          {innerBlog.blogTitle.length > 20
                            ? `${innerBlog.blogTitle.slice(0, 20)}...`
                            : innerBlog.blogTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))
        )}
      </aside>
    </div>
  );
};

export default Sideber;

const Skeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-6 bg-[#DFE2F4]/50 rounded w-32"></div>
    <div className="flex flex-col gap-2">
      <div className="h-4 bg-[#DFE2F4]/50 rounded w-50"></div>
      <div className="h-4 bg-[#DFE2F4]/50 rounded w-46"></div>
      <div className="h-4 bg-[#DFE2F4]/50 rounded w-38"></div>
    </div>
  </div>
);
