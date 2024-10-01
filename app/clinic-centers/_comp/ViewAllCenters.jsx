'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { IoSearchOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import notFoundAnim from "@/public/assets/anim/notfound.json";
import Image from "next/image";
import { CardLoaders, ClinicCenterCardSkeleton } from "@/components/ui/cardload";


export default function ViewAllCenters() {
  const [loader, setLoader] = useState(false);
  const [slides, setSlides] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  useEffect(() => {
    setLoader(true);
    let url = "https://api.discoverinternationalmedicalservice.com/api/get/centers";

    if (searchValue !== "") {
      url = `https://api.discoverinternationalmedicalservice.com/api/search/center/${searchValue}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.response) {
          setSlides(data?.response?.data);
          setLoader(false);
        } else if (data?.status === 200) {
          setSlides(data?.data);
          setLoader(false);
        } else if (data?.status === 404) {
          setSlides([]);
          setLoader(false);
        } else {
          setLoader(false);
        }
      });
  }, [searchValue]);
  //.......pagination Start...//

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const itemsPerPage = 10;
  const numberOfpage = Math.ceil(slides?.length / itemsPerPage);
  const pageIndex = Array.from({ length: numberOfpage }, (_, idx) => idx + 1);

  const showpageNumber = pageIndex?.filter((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return number;
    } else {
      return null;
    }
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChangePrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handlePageChangeNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const curentSlide = slides?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // ........Pagination End....//

  const style = {
    height: 300,
  };
  return (
    <div className="p-5 my-5 md:container md:mx-auto">
    
      <div className="flex justify-between items-center">
        <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          Clinic & Centers: {slides?.length}
        </h1>
      </div>
      <div className="my-8 flex md:justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 relative">
          <TextField
            id="outlined-basic"
            fullWidth
            placeholder="Search Clinic & Centers"
            variant="outlined"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="text-3xl text-blue !absolute right-4 top-[13px]"
          >
            <IoSearchOutline />
          </button>
        </div>
      </div>
      {loader ? (
        <CardLoaders Component={ClinicCenterCardSkeleton} cardLength={15} gridNumber={5} speed="speed" />
      ) : (
        <div>
          {curentSlide?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {/* cards  */}
              {curentSlide?.map((sc, i) => (
                <div
                  key={i}
                  className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                >
                  <div>
                    <Image
                    height={300}
                      width={300}
                      className="min-h-full w-full object-cover"
                      src={sc?.cover_photo}
                      effect="blur"
                      alt="Bumrungrad International Hospital"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-black/70 via-black/60 to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="mb-2.5 md:mb-5 font-dmserif md:text-xl font-bold text-white">
                      {sc?.name}
                    </h2>
                    <p className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span
                        className="md:hidden"
                        dangerouslySetInnerHTML={{
                          __html: sc?.content?.slice(0, 60),
                        }}
                      />
                      <span
                        className="hidden md:block lg:hidden"
                        dangerouslySetInnerHTML={{
                          __html: sc?.content?.slice(0, 100),
                        }}
                      />
                      <span
                        className="hidden lg:block"
                        dangerouslySetInnerHTML={{
                          __html: sc?.content?.slice(0, 200),
                        }}
                      />
                    </p>
                    <Link
                      href={`/clinic-centers/${sc?.slug}`}
                      className=" mt-3 bg-white shadow-xl rounded py-1 md:py-2 px-2 md:px-4 font-com text-sm capitalize text-blue font-semibold"
                      target="_blank"
                    >
                      See More
                    </Link>
                    <a href={'#'} className="mt-1 hidden text-white px-1 py-1 rounded-full bg-blue">
                      <ArrowOutwardIcon />
                    </a>
                  </div>
                </div>
              ))}
              <div className="custom-pagination mt-5 flex gap-2 justify-center"></div>
            </div>
          ) : (
            <div className="min-h-[40vh] shadow-xl rounded p-5 mb-2.5">
              <Lottie style={style} animationData={notFoundAnim} loop={true} />
              <p className="text-xl font-semibold text-blue text-center">
                No Package Found
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center items-center gap-2 md:gap-4 mt-8 ">
        <button
          onClick={handlePageChangePrev}
          disabled={currentPage === 1}
          className="flex items-center  gap-1 md:gap-2 md:px-6 md:py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Prev
        </button>
        {minPageNumberLimit >= 1 && (
          <button
            onClick={handlePageChangePrev}
            disabled={currentPage === 1}
            className=" px-3 py-2  rounded"
          >
            ....
          </button>
        )}
        {showpageNumber.map((index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`px-2 py-2 md:h-10 md:max-h-[40px] md:w-10 md:max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none${
              currentPage === index ? " bg-black text-white" : ""
            }`}
            type="button"
          >
            {index}
          </button>
        ))}
        {pageIndex.length > maxPageNumberLimit && (
          <button
            onClick={handlePageChangeNext}
            disabled={currentPage === pageIndex.length}
            className=" px-3 py-2  rounded"
          >
            ....
          </button>
        )}
        <button
          onClick={handlePageChangeNext}
          disabled={currentPage === pageIndex.length}
          className="flex items-center gap-1 md:gap-2 md:px-6 md:py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
