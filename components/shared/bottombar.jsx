import React from "react";
import Link from "next/link";
import CopyrightIcon from "@mui/icons-material/Copyright";

const serives = [
  {
    name: "Book Appointment",
    link: "/our-services/appointment",
  },
  {
    name: "Health Screening",
    link: "/check-up",
  },
  {
    name: "Find a Doctor",
    link: "/doctors",
  },
  {
    name: "Clinic & Centers",
    link: "/clinic-centers",
  },
];
const corporates = [
  { name: "About Bumrungrad", link: "/about-bumrungrad" },
  { name: "Send Inquiry", link: "/send-query" },
  { name: "Contact", link: "/contact-us" }, 
  { name: "Dhaka Offices", link: "/dhaka-offices" }, 
];
const blognews = [
  { name: 'Blogs', link: '/blogs' },
  { name: 'News', link: '/news' },
  // { name: 'Treatments', link: '/treatments' },
]

export default function BottomBar() {
  return (
    <footer>
      <div className='px-4 md:px-28 my-8'>
        <div className='py-6 px-2.5 bg-cream rounded'>
          {' '}
          <p className='text-center mb-2.5 font-semibold'>Disclaimer</p>
          <p className='text-center'>
            DIMS is a Medical Tourism Facilitator and does not provide direct
            treatment advice. We connect you with top-quality, licensed
            hospitals. Any treatment plans come solely from licensed doctors at
            our partner hospitals. DIMS holds no liability for advice given by
            third-party licensed doctors or hospitals. We strongly recommend
            consulting your local doctor to discuss treatment options provided
            through our platform.
          </p>
        </div>
      </div>
      <section className='bg-cream pt-10 pb-5 text-blue px-5'>
        <div className='md:container md:mx-auto mx-5 grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <p className='font-semibold'>Services</p>
            <ul className='text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc'>
              {serives.map((s, i) => (
                <li key={i}>
                  <Link href={s.link}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='font-semibold'>Blog & News</p>
            <ul className='text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc'>
              {blognews.map((s, i) => (
                <li key={i}>
                  <Link href={s.link}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='font-semibold'>Corporates</p>
            <ul className='text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc'>
              {corporates.map((s, i) => (
                <li key={i}>
                  <Link href={s.link}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className='pt-5 pb-36 md:pb-20 bg-blue text-white'>
        <div className='md:container md:mx-auto mx-5 flex flex-col md:flex-row items-center justify-center md:justify-between'>
          <p className='text-center flex gap-2 items-center'>
            <CopyrightIcon />
            2024 Bumrungrad International Hospital Referral Office
          </p>
          <div className='flex gap-4 items-center'>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </footer>
  )
}
