'use client'

import Image from "next/image";
import React from "react";
import { useEffect,useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const BlogDetailsPage = ({params}) => {
  
  const [loader, setLoader] = useState(true);
  const [oneBlog, setBlog] = useState({});

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // get data
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.discoverinternationalmedicalservice.com/api/get/blogs/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data?.data);
        setLoader(false);
      });
  }, [params.slug]);

  const [headings, setHeadings] = useState([]);
  // Generate table of contents
  useEffect(() => {
    const blogDescElement = document.getElementById("blog_desc");
    if (blogDescElement) {
      const headingsData = [];
      const headingElements = blogDescElement.querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
      );
      headingElements.forEach((element) => {
        const name = element.innerText;
        const target = name.toLowerCase().replace(/\s+/g, "_");
        element.id = target; // Set the id attribute of the element
        headingsData.push({ name, target });
      });
      setHeadings(headingsData);
    }
  }, [loader]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-5 my-5 md:container md:mx-auto relative">
      {loader ? (
       <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 animate-pulse">
       <div className="lg:w-4/6 lg:mx-auto flex flex-col gap-5">
         <div className="w-full lg:h-[40vh] h-64 bg-[#DFE2F4]/70 rounded"></div>
         <div className="h-6 bg-[#DFE2F4]/70 rounded w-3/4"></div>
         <div className="h-4 bg-[#DFE2F4]/70 rounded w-1/2"></div>
         <div className="space-y-2">
           <div className="h-4 bg-[#DFE2F4]/70 rounded"></div>
           <div className="h-4 bg-[#DFE2F4]/70 rounded w-5/6"></div>
           <div className="h-4 bg-[#DFE2F4]/70 rounded w-2/3"></div>
           <div className="h-4 bg-[#DFE2F4]/70 rounded w-4/5"></div>
         </div>
       </div>
     </div>
     
      ) : (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="lg:w-4/6 lg:mx-auto flex flex-col gap-5">
            <Image
              height={300}
              width={1000}
              src={oneBlog?.blogImage}
              alt="Bumrungrad International Hospital"
              className="w-full lg:h-[40vh] rounded"
            />
            <h5 className="font-semibold text-blue text-xl">
              {oneBlog?.blogTitle}
            </h5>
            <p>{oneBlog?.blogSlogan}</p>
            <div
              id="blog_desc"
              className="text-sm lg:text-base"
              dangerouslySetInnerHTML={{ __html: oneBlog?.blogDescription }}
            />
          </div>
        </div>
      )}
      {/* Scroll-to-top button */}
      {showScrollToTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue text-white p-3 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-dark"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BlogDetailsPage;
