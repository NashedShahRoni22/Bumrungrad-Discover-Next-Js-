import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

export default function WhyUs() {
  const data = [
    {
      title: "Global Healthcare Excellence",
      desc: "Recognized as a global leader in healthcare, Bumrungrad International Hospital provides exceptional medical services to patients from over 190 countries. With a reputation for excellence, it combines advanced medical treatments with patient-centered care to ensure the highest standards of healthcare.",
    },
    {
      title: "Over 40 Specialized Departments & Centers",
      desc: "Bumrungrad offers an extensive range of over 40 specialized departments, ensuring that patients have access to experts in every field, from cardiology and oncology to neurology and orthopedics. Each department is staffed with highly trained professionals who provide individualized, specialized care to address complex medical needs.",
    },
    {
      title: "Advanced Medical Technology & Experienced Doctors",
      desc: "Bumrungrad is at the forefront of medical innovation, utilizing cutting-edge technology such as robotic surgery, advanced imaging systems, and AI-assisted diagnostics to enhance the accuracy and effectiveness of treatments. The hospital’s team of over 1,200 doctors—many of whom have received international training and certifications—bring a wealth of experience, ensuring world-class expertise in treating various conditions.",
    },
    {
      title: "JCI Accreditation",
      desc: "Bumrungrad is accredited by the Joint Commission International (JCI), the gold standard in global healthcare accreditation. This certification reflects the hospital’s commitment to maintaining the highest standards of patient safety, care quality, and operational excellence. JCI accreditation ensures that every patient receives care that adheres to the most rigorous international standards.",
    },
    {
      title: "International Patient Support",
      desc: "With a comprehensive range of services tailored for international patients, Bumrungrad ensures a smooth healthcare journey from start to finish. The hospital offers personalized assistance with travel arrangements, visas, accommodation, and financial matters. Multilingual staff and interpreters are available to make sure communication is seamless, while a dedicated International Patient Services team ensures that all logistical and medical needs are met",
    },
    {
      title: "World-Class Care",
      desc: "As one of the leading hospitals in Southeast Asia, Bumrungrad delivers world-class healthcare that rivals top medical institutions worldwide. Patients benefit from the combination of expert medical teams, cutting-edge technology, and compassionate care, all within a state-of-the-art facility designed for comfort and healing. Whether it’s routine procedures or complex surgeries, Bumrungrad ensures that every patient receives the highest quality of care possible.",
    },
  ];
  return (
    <div className="mx-5 my-10 md:my-20 md:container md:mx-auto flex flex-col gap-5 md:gap-10">
      <h5 className="text-center text-2xl md:text-4xl font-semibold text-blue">
        World-Class Care Awaits: <br /> Bumrungrad International Hospital
        Partnership
      </h5>
      <p className="text-center font-bold">
        DMIS (discover international medical service ) has formed a strategic
        partnership with Bumrungrad International Hospital to bring world-class
        healthcare services. This collaboration aims to provide patients in the
        region with access to advanced medical expertise, cutting-edge
        technology, and personalized care.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((d, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 items-center p-8 shadow rounded"
          >
            <CheckCircleOutlineIcon
              className="text-green"
              style={{ fontSize: "48px" }}
            />
            <h5 className="font-semibold text-blue text-xl text-center">
              {d.title}
            </h5>
            <p className="text-center">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
