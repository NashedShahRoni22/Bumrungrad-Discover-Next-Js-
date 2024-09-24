'use client'

import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import Link from "next/link";

const ChildPackage = ({params}) => {
  const [loader, setLoader] = useState();
  const [childPackage, setChildPackage] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch(`https://api.discoverinternationalmedicalservice.com/api/get/sub/packages/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setChildPackage(data?.data);
          setLoader(false);
        }
        setLoader(false);
      });
  }, [params.slug]);


  return (
    <section className="mx-5 md:container md:mx-auto py-10">
      {loader ? (
       <div>
       {/* Title Skeleton */}
       <div className="md:ml-8 h-8 bg-[#DFE2F4]/90 w-2/5 rounded animate-pulse mb-5"></div>
 
       {/* Packages Grid Skeleton */}
       <div className="md:ml-8 my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
         {Array(4).fill().map((_, i) => (
           <div
             key={i}
             className="flex flex-col justify-between gap-5 shadow animate-pulse"
           >
             {/* Image Skeleton */}
             <div className="bg-[#DFE2F4]/90 w-full h-64 rounded"></div>
 
             {/* Text Skeleton */}
             <div className="p-2.5 space-y-3">
               <div className="h-6 bg-[#DFE2F4]/90 w-3/4 rounded"></div>
               <div className="h-5 bg-[#DFE2F4]/90 w-1/2 rounded"></div>
             </div>
 
             {/* Button Skeleton */}
             <div className="bg-[#DFE2F4]/90 w-full h-10 rounded-bl rounded-br"></div>
           </div>
         ))}
       </div>
     </div>
      ) : (
        <div>
          {childPackage?.length > 0 ? (
            <>
              <h2 className="md:ml-8 text-xl font-semibold md:text-2xl lg:text-3xl capitalize text-blue">
                our packages
              </h2>
              <div className="md:ml-8 my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {childPackage.map((cp, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-5 shadow"
                  >
                    <Image
                    height={400}
                      width={400}
                      src={cp?.cover_photo}
                      alt="Bumrungrad International Hospital"
                      effect="blur"
                    />
                    <div className="p-2.5">
                      <p className="font-semibold text-blue md:text-xl">
                        {cp?.title}
                      </p>

                      <p className="mt-2.5">
                        <span className="font-semibold">Location:</span> {cp?.location}.
                      </p>
                    </div>
                    <Link
                      href={`/packages/sub-packages/sub-package-details/${cp?.slug}`}
                      className="group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br"
                      target="_blank"
                    >
                      <RemoveRedEyeIcon />
                      <span className="capitalize">View Package</span>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="min-h-[80vh] flex justify-center items-center text-3xl text-red font-semibold">
              No Data Found
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default ChildPackage