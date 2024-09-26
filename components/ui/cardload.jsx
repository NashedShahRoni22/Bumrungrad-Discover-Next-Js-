import React from 'react';
import { Skeleton } from '@mui/material';



export const CardLoader = ({ cardLength, gridNumber, speed }) => {
  return (
    <div className={`grid gap-5 md:grid-cols-${gridNumber} lg:grid-cols-${gridNumber} my-10`}>
      {[...Array(cardLength)].map((_, i) => (
        <div key={i} className="shadow rounded-lg overflow-hidden bg-white">
          {/* Skeleton for the image */}
          <Skeleton 
            variant="rectangular" 
            height={200} 
            animation={speed} 
            className="w-full h-[200px] object-cover" 
          />
          {/* Skeleton for text */}
          <div className="p-5">
            <Skeleton variant="text" width="60%" animation={speed} className="mb-2" />
            <Skeleton variant="text" width="80%" animation={speed} className="mb-2" />
            <Skeleton variant="text" width="40%" animation={speed} className="mb-4" />
          </div>
        </div>
      ))}
    </div>
  );
};


export const CardLoaders = ({ cardLength, gridNumber, speed, Component= SkeletonCard }) => {
  return (
    <div className={`grid gap-5 md:grid-cols-3 xl:grid-cols-${gridNumber} lg:grid-cols-${gridNumber} my-10 max-sm:px-1`}>
      {[...Array(cardLength)].map((_, i) => (
        <div key={i}>
          <Component />
        </div>
      ))}
    </div>
  );
};


export const SkeletonCard = () => {
  return (
    <div className= 'border border-[#DFE2F4] shadow hover:shadow-xl duration-300 ease-linear flex flex-col gap-5 w-full h-[380px] md:h-[520px] rounded-xl animate-pulse'>
      <div className='relative'>
        <div className='bg-[#DFE2F4]/40 h-[200px] md:h-[350px] w-full rounded-tl-xl rounded-tr-xl'></div>
        <div className='absolute bottom-0 w-full'>
          <div className='bg-[#DFE2F4] h-10 md:h-12 w-24 md:w-32 mx-auto rounded-tl-xl rounded-tr-xl'></div>
        </div>
      </div>
      <div className='mb-2.5'>
        <div className='bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded'></div>
        <div className='bg-[#DFE2F4] h-4 md:h-6 w-1/2 mx-auto mt-1 rounded'></div>
      </div>
    </div>
  );
};




export const DoctorSkeleton = () => {
  return (
    <section>
      <div className="bg-[#DFE2F4]/50 p-5 md:p-10">
        <div className="md:flex p-5 md:p-10 md:container md:mx-auto animate-pulse">
          <div className="flex flex-col justify-center">
            <div className="bg-[#DFE2F4] h-[370px] md:h-[400px] lg:h-[450px] w-full md:w-[300px] lg:w-[350px] rounded-tl-xl rounded-tr-xl"></div>
            <div className="bg-[#DFE2F4] mt-2.5 h-10 w-full rounded-bl-xl rounded-br-xl"></div>
          </div>

          {/* Right side skeleton */}
          <div className="flex-1 text-blue lg:text-center p-5">
            <div className="bg-[#DFE2F4] h-8 md:h-12 w-3/4 lg:w-2/4 mx-auto rounded"></div>
            <div className="mt-5">
              <div className="bg-[#DFE2F4] h-6 md:h-8 lg:h-10 w-1/2 mx-auto rounded"></div>
              <div className="my-2.5 h-2 w-full bg-[#DFE2F4]"></div>
              <div className="bg-[#DFE2F4] h-6 md:h-8 lg:h-10 w-3/4 mx-auto rounded"></div>
            </div>

            <div className="mt-5">
              <div className="bg-[#DFE2F4] h-6 md:h-8 lg:h-10 w-1/2 mx-auto rounded"></div>
              <div className="my-2.5 h-2 w-full bg-[#DFE2F4]"></div>
              <ul className="space-y-3">
                <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
                <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
              </ul>
            </div>

            <div className="mt-5">
              <div className="bg-[#DFE2F4] h-6 md:h-8 lg:h-10 w-1/2 mx-auto rounded"></div>
              <div className="my-2.5 h-2 w-full bg-[#DFE2F4]"></div>
              <ul className="space-y-3">
                <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
                <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Qualifications skeleton */}
      <div className="p-5 md:p-10 md:container md:mx-auto lg:flex space-y-5 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-1/2 flex flex-col gap-5 md:gap-10">
          <div>
            <div className="bg-[#DFE2F4] h-6 md:h-8 w-1/2 mx-auto rounded"></div>
            <ul className="mt-2.5 space-y-3">
              <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
              <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
            </ul>
          </div>
          <div>
            <div className="bg-[#DFE2F4] h-6 md:h-8 w-1/2 mx-auto rounded"></div>
            <ul className="mt-2.5 space-y-3">
              <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
              <li className="bg-[#DFE2F4] h-6 md:h-8 w-3/4 mx-auto rounded"></li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-[#DFE2F4] h-6 md:h-8 w-1/2 mx-auto rounded"></div>
          <div className="my-5 bg-[#DFE2F4] h-10 w-full rounded-lg"></div>
          <div className="space-y-3">
            <div className="bg-[#DFE2F4] h-6 w-full rounded-lg"></div>
            <div className="bg-[#DFE2F4] h-6 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

import './style.css'

export const NewsCardSkeleton = () => {
  return (
    <div className="shadow rounded hover:shadow-xl duration-300 ease-linear flex flex-col justify-between">
      {/* Skeleton for the image */}
      <div className="skeleton w-full h-[200px] rounded-t-md"></div>

      <div className="p-4">
        {/* Skeleton for the title */}
        <div className="skeleton w-3/4 h-6 mb-3 rounded"></div>

        {/* Skeleton for the description */}
        <div className="skeleton h-4 mb-2 rounded"></div>
        <div className="skeleton h-4 mb-2 rounded"></div>
        <div className="skeleton h-4 rounded"></div>
      </div>

      <div className="p-4">
        {/* Skeleton for the button */}
        <div className="skeleton w-24 h-8 rounded"></div>
      </div>
    </div>
  );
};


export const ClinicCenterCardSkeleton = () => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/5">
      {/* Skeleton for the image */}
      <div className="skeleton min-h-full w-full h-[350px]"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-black/20 via-black/30 to-black/40"></div>

      {/* Content skeleton */}
      <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
        {/* Skeleton for the title */}
        <div className="skeleton w-3/4 h-6 mb-5 rounded"></div>

        {/* Skeleton for the content */}
        <div className="skeleton w-full h-4 mb-2 rounded"></div>
        <div className="skeleton w-full h-4 mb-2 rounded"></div>
        <div className="skeleton w-full h-4 mb-2 rounded hidden md:block"></div>
        <div className="skeleton w-full h-4 rounded hidden lg:block"></div>

        {/* Skeleton for the 'See More' button */}
        <div className="skeleton w-24 h-8 mt-3 rounded"></div>

        {/* Skeleton for the arrow button */}
        <div className="skeleton w-8 h-8 mt-1 rounded-full hidden"></div>
      </div>
    </div>
  );
};

export const ClinicCenterSkeleton = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-5 md:gap-10">
      {/* Skeleton for Image */}
      <div className="skeleton h-[250px] md:h-[400px] w-[400px]"></div>

      {/* Skeleton for content */}
      <div className="md:flex-1 flex flex-col gap-5">
        {/* Skeleton for Title */}
        <div className="skeleton w-3/4 h-6 rounded"></div>

        {/* Skeleton for Location */}
        <div className="skeleton w-1/2 h-4 rounded"></div>

        {/* Skeleton for Description Label */}
        <div className="skeleton w-1/4 h-5 rounded"></div>

        {/* Skeleton for Description Content */}
        <div className="skeleton w-full h-16 rounded mt-2"></div>

        {/* Skeleton for Informations Section */}
        <div className="skeleton w-1/4 h-5 rounded mt-5"></div>
        <div className="skeleton w-3/4 h-4 rounded mt-2"></div>
        <div className="skeleton w-3/4 h-4 rounded mt-2"></div>

        {/* Skeleton for Conditions Section */}
        <div className="skeleton w-1/4 h-5 rounded mt-5"></div>
        <div className="skeleton w-3/4 h-4 rounded mt-2"></div>
        <div className="skeleton w-3/4 h-4 rounded mt-2"></div>

        {/* Skeleton for Treatments Section */}
        <div className="skeleton w-1/4 h-5 rounded mt-5"></div>
        <div className="skeleton w-3/4 h-4 rounded mt-2"></div>
        <div className="skeleton w-3/4 h-4 rounded mt-2"></div>
      </div>
    </div>
  );
};