'use client'
import React from 'react'
import packageimg from '@/public/assets/insurance/Bumrungrad  Hospital_Packages-Promotion1.png'
import weacceptimg from '@/public/assets/insurance/Bumrungrad  Hospital_We-Accept-Active2.png'
import goodvibesimg from '@/public/assets/insurance/Bumrungrad  Hospital_Good-Vibes-2023.png'
import img1 from '@/public/assets/insurance/Bumrungrad  Hospital_Allianz-Ayudhya1.jpg'

import Image from 'next/image'


const WeAccept = () => {
  const questionsAns = [
    {
      question: 'Thailand Company Direct Billing Contracts',
      datas: [
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
      ],
    },
    {
      question: 'Thailand Company Direct Billing Contracts',
      datas: [
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
      ],
    },
  ]
  return (
    <section className='mx-5 md:container md:mx-auto'>
     
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] insurance-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Insurance
        </h1>
      </div>

      <div className='mx-10 my-10'>
        {questionsAns?.map((questionans, i) => (
          <OneWeAccept key={i} i={i} questionans={questionans} />
        ))}
      </div>
      <div className=' my-10 bg-cream'>
        <div className='flex justify-center flex-wrap p-10'>
          <Image
          height={200}
            width={200}
            src={packageimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
          <Image
          height={200}
            width={200}
            src={weacceptimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
          <Image
          height={200}
            width={200}
            src={goodvibesimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
      </div>
    </section>
  )
}



function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='#ffffff'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'


const OneWeAccept = (props) => {
  const { question, datas, i } = props.questionans

  const [open, setOpen] = React.useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='mt-[1px]'>
      <>
        <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
          <div>
            {' '}
            <AccordionHeader
              className='bg-blue p-3'
              onClick={() => handleOpen(i)}
            >
              <p className='text-white text-sm'>{question}</p>
            </AccordionHeader>
          </div>

          <AccordionBody>
            {datas?.map((data, i) => (
              <div key={i}>
                <div className='flex justify-evenly items-center h-[150px]'>
                  <div className=''>
                    <p className='text-blue font-semibold text-sm'>
                      {data?.ans}
                    </p>
                  </div>
                  <div className=''>
                    <Image
                      height={200}
                      width={200}
                      src={data?.img}
                      alt='Bumrungrad International Hospital'
                      className='h-[120px]'
                      srcset=''
                    />
                  </div>
                </div>

                <hr className='w-[1000px] mx-auto' />
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </>
    </div>
  )
}

export default WeAccept