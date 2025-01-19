import Image from "next/image";
import Link from "next/link";
import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const SinglePackage = ({p}) => {
  return (
    <div className="flex flex-col justify-between  gap-2 shadow">
      {
        p?.cover_photo ? <Image
          height={210}
          width={400}
          src={p?.cover_photo}
          effect="blur"
          alt="Bumrungrad International Hospital"
        />
        : <div className="w-full h-[210px] bg-gray-200"></div>
      }
      <div className="p-2.5 h-[210px]">
        <p className="font-semibold text-blue md:text-xl">{p?.title}</p>
        <p className="pb-5 mt-2.5">{p?.description.slice(0, 160)} ... </p>
      </div>
      <Link
        href={`/packages/sub-packages/${p.slug}`}
        className="group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br "
        target="_blank"
      >
        <RemoveRedEyeIcon />
        <span className="capitalize">See Packages</span>
      </Link>
    </div>
  );
};

export default SinglePackage;
