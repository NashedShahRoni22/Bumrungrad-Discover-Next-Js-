export const metadata = {
  title: "Meet Our Doctors | Bumrungrad International Specialists",
  description:
    "Meet Bumrungrad’s top specialists, ready to provide expert medical care in a range of specialties. Your health is our priority.",
};

import Doctors from "./doctors";
import React from "react";

const DoctorsPage = () => {
  return (
    <div>
      <Doctors />
    </div>
  );
};

export default DoctorsPage;
