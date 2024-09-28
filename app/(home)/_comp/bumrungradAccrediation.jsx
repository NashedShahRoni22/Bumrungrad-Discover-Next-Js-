import { GiTrophyCup } from "react-icons/gi";

export default function BumrungradAccrediation() {
  const awards = [
    "No.1 Hospital in Thailand",
    "Advanced Hospital Accreditation",
    "World's Best Smart Hospitals",
    "International Standard of Excellence",
    "Global Brand Awards",
  ];
  return (
    <section className="mx-5 md:container md:mx-auto p-10 md:p-20 bg-blue text-white shadow rounded">
      <h2 className="text-xl md:text-2xl text-center font-semibold ">
        Bumrungrad Accreditation & Awards
      </h2>
      <ul className="grid gap-5 lg:grid-cols-2 mt-5 md:mt-10">
        {awards.map((a, i) => (
          <li key={i} className="flex items-center gap-2">
            <GiTrophyCup className="text-2xl md:text-4xl " /> 
            <span className="text-xl md:text-2xl font-semibold">{a}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
