'use client'

import React, { useEffect, useState } from "react";
// import CardLoader from "@/components/ui/cardLoader";
import Image from "next/image";

const News = ({params}) => {
  const [loader, setLoader] = useState(true);
  const [oneNews, setNews] = useState({});
  useEffect(() => {
    fetch(`https://api.discoverinternationalmedicalservice.com/api/get/news/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data);
        setLoader(false);
      });
  }, [params.id]);
  return (
    <div className="p-5 my-5 md:container lg:w-[50%] md:mx-auto">
      {loader ? (
        <div className="flex flex-col gap-5 animate-pulse">
        {/* Image skeleton */}
        <div className="bg-[#DFE2F4]/90 h-[40vh] w-full rounded"></div>
  
        {/* Text content skeleton */}
        <div>
          <div className="h-6 bg-[#DFE2F4]/90 w-2/3 rounded mb-3"></div>
          <div className="h-4 bg-[#DFE2F4]/90 w-full rounded mb-2"></div>
          <div className="h-4 bg-[#DFE2F4]/90 w-5/6 rounded"></div>
        </div>
      </div>
      ) : (
        <div className="flex flex-col gap-5">
          <Image
            height={300}
            width={300}
            src={oneNews?.newsImage}
            alt="Bumrungrad International Hospital"
            className="lg:h-[40vh] min-w-full w-full"
          />
          <div className="">
            <h5 className="font-semibold text-blue text-xl">
              {oneNews?.newsTitle}
            </h5>
            <p className="my-3">{oneNews?.newsDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default News