import React from "react";
import ContactCardImg from "@/public/assets/Bumrungrad  Hospital_contact_card.png";
import ContactForm from "./_comp/ContactForm";
import Image from "next/image";


export default function ContactUs() {
  const ContactCards = [
    {
      office: "Dhanmondi Office",
      building: "Rupayan Prime Tower",
      floor: "10th Floor (Lift-9)",
      house: "House:02,Road: 07, Green Road",
      city: "Dhanmondi, Dhaka-1205",
      phone1: "+8801847284860",
      phone2: "+8801324418100",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.05224193445!2d90.3824876761062!3d23.745516388962468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91b29851709%3A0xc3d50a2ecf8fad9a!2sBumrungrad%20Hospital%20Dhaka%20Office!5e0!3m2!1sen!2sbd!4v1692206329747!5m2!1sen!2sbd",
    },
    {
      office: "Banani Office",
      building: "Alamin Park Panorama (Beside Banani Post Office),",
      floor: "8th Floor (Lift-5)",
      house: "Road 13/A, Block - C, House 105,",
      city: "Banani, Dhaka - 1213,",
      phone1: "+8801977284860",
      phone2: "+8801847284862",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29212.303573866055!2d90.3837837!3d23.7638509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72e25bd9c23%3A0x3d32da1eea1d8b1c!2sBumrungrad%20Hospital%20Bangladesh%20%7C%20Patient%20Support%20Center%20In%20Gulshan%20Dhaka%20%7C%20Book%20Your%20Doctor%20Appointment%20at%20Bumrungrad!5e0!3m2!1sen!2ssg!4v1692561871626!5m2!1sen!2ssg",
    },
    {
      office: "Uttara Office",
      building: "Sector-13, House: 01",
      floor: "Janapadd Road",
      house: "Opposite of Bata Showroom",
      city: "Uttara, Dhaka-1230",
      phone1: "+8801977284861",
      phone2: "+8801601284300",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.434392452508!2d90.3928183!3d23.874210400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52a06df3939%3A0x5865aa1fbf242113!2sBumrungrad%20International%20Hospital%20Uttara%20Office!5e0!3m2!1sen!2ssg!4v1692561953360!5m2!1sen!2ssg",
    },
    {
      office: "Chattogram Office",
      building: "Daar E Shahidi Building",
      floor: "3rd Floor, (Lift-3)",
      house: "House:69, Agrabad C/A",
      city: "Chattogram-4100",
      phone1: "+8801847284863",
      phone2: "+8801847284862",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939716.4091297725!2d90.5450213!3d23.0689941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9b23e4a2043%3A0x4d00aafa2c904ae3!2zQnVtcnVuZ3JhZCBJbnRlcm5hdGlvbmFsIEhvc3BpdGFsIFJlZmVycmFsIE9mZmljZS1DaGF0dGFncmFtIC4vLyDgpqzgpr7gpq7gprDgp4Hgpqjgppfgp43gprDgpqYg4KaH4Kao4KeN4Kaf4Ka-4Kaw4Kao4KeN4Kav4Ka-4Ka24Kao4Ka-4KayIOCmueCmvuCmuOCmquCmvuCmpOCmvuCmsiDgprDgp4fgpqvgpr7gprDgp4fgprIg4KaF4Kar4Ka_4Ka4IOCmmuCmn-CnjeCmn-Cml-CnjeCmsOCmvuCmrg!5e0!3m2!1sen!2ssg!4v1692561993428!5m2!1sen!2ssg",
    },
  ];
  return (
    <div className='md:container mx-auto p-5 md:p-10 my-5 md:my-10'>
      <ContactForm />
      <h2 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
        Locate us
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-10'>
        {ContactCards.map((cc, i) => (
          <div
            key={i}
            className='group flex flex-col md:flex-row shadow-xl rounded items-center justify-between gap-8 md:gap-0'
          >
            <div className='p-5 h-full w-full md:w-1/2 relative flex flex-col items-center gap-4'>
              <Image
              height={150}
                width={150}

                src={ContactCardImg}
                alt='Bumrungrad International Hospital'
                effect='blur'
                className='h-[150px] w-[150px]'
              />
              <div className='flex flex-col'>
                <h5 className='text-center font-semibold text-xl'>
                  {cc.office}
                </h5>
                <div className='absolute top-0 left-0 bg-black/90 h-full w-full hidden group-hover:flex flex-col items-center justify-center rounded md:rounded-r-none text-white duration-300 ease-linear'>
                  <h5 className='text-center font-semibold text-lg'>
                    {cc.office}
                  </h5>
                  <p className='text-center'>{cc.building}</p>
                  <p className='text-center'>{cc.floor}</p>
                  <p className='text-center'>{cc.house}</p>
                  <p className='text-center'>{cc.city}</p>
                  <p className='text-center'>{cc.phone1}</p>
                  <p className='text-center'>{cc.phone2}</p>
                </div>
              </div>
            </div>
            <div className='hidden md:block md:w-1/2 md:h-full'>
              <iframe
                src={cc.map}
                title={cc.map}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
