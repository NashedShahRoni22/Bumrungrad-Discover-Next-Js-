'use client'

import React, { useState } from 'react'
import personImg from '@/public/assets/Bumrungrad  Hospital_Abdus Samad.jpg'
import PersonIcon from '@mui/icons-material/Person'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/navigation'
import useAuth from '@/helpers/hooks/useAuth'
import Image from 'next/image'
import { countries } from '@/public/data/country'
import toast from 'react-hot-toast'
import { sendEmails } from '@/helpers/mail/sendMail'
import { admin_mails } from '@/constant'
import { mailBody } from '@/helpers/mail/mailbody'

const VisaProcessing = () => {
  const { auth} = useAuth()
  const userDetails = auth
  const [old, setOld] = useState(true)

  const navigate = useRouter()

  const handlePhone = (newPhone) => {
    setPhone(newPhone)
  }

  const [hnNumber, setHnNumber] = React.useState('')
  const [firstname, setfirstname] = React.useState(
    userDetails?.firstName ? userDetails?.firstName : ''
  )

  const [lastName, setLastName] = React.useState(
    userDetails?.lastName ? userDetails?.lastName : ''
  )

  const [dob, setDob] = React.useState(userDetails?.dob ? userDetails?.dob : '')
  const [pataientEmail, setPataientEmail] = React.useState(
    userDetails?.email ? userDetails?.email : ''
  )
  const [phone, setPhone] = React.useState(
    userDetails?.phone ? userDetails?.phone : ''
  )
  const [gender, setGender] = React.useState(
    userDetails?.gender ? userDetails?.gender : ''
  )
  const [citizenship, setCitizenship] = React.useState(
    userDetails?.citizenship ? userDetails?.citizenship : ''
  )
  const [country, setCountry] = React.useState(
    userDetails?.country ? userDetails?.country : ''
  )
  const [desc, setDesc] = React.useState('')

  const [passport, setPassport] = React.useState('')
  const [medicalReport1, setmedicalReport1] = React.useState('')
  const [medicalReport2, setmedicalReport2] = React.useState('')
  const [invitationLetter, setInvitationLetter] = React.useState('')

  const [driveLink1, setDriveLink1] = React.useState('')
  const [driveLink2, setDriveLink2] = React.useState('')
  const [formDatas,setFormDatas] = useState(null)

  const [loader, setLoader] = useState(false)

  const handleBookVisa =async () => {
   
    const formData = new FormData()

    const fields = {
      oldPataint: old,
      HnNumber: hnNumber,
      PataientFirstName: firstname,
      PataientLastName: lastName,
      PataientCitizenship: citizenship,
      PataientGender: gender,
      PataientEmail: pataientEmail,
      PataientPhone: phone,
      PataientDob: dob,
      country: country,
      mediicalCorncern: desc,

      passport: passport,
      medicalReport1: medicalReport1,
      medicalReport2: medicalReport2,
      invitationLetter: invitationLetter,

      driveLink1: driveLink1,
      driveLink2: driveLink2,

    }
      // Append all fields to FormData
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
        setFormDatas((prev) => ({ ...prev, [key]: value }));
      });

    setLoader(true)

   const res = await fetch('https://api.discoverinternationalmedicalservice.com/api/add/visa/precessing', {
      method: 'POST',
      body: formData,
    })
    setLoader(false)
    const data = await res.json()
  
    if (data.status === 200) {
      toast.success('Please your email or spam box!')
     try {
       setLoader(true)
       console.log("formdatas", formDatas)
       const mailRes = await sendEmails(admin_mails,`Visa Processing Request- ${userDetails?.firstName}`,mailBody({...formDatas,oldPataint: formDatas.oldPataint ? "Yes, I am an old patient" : "I am a New Patient"}))
       setLoader(false)
       
       setLoader(true)
       const mailRes2 = await sendEmails(userDetails?.email,`Visa Processing Request- ${userDetails?.firstName}`,mailBody({...formDatas,oldPataint: formDatas.oldPataint ? "Yes, I am an old patient" : "I am a New Patient"}))
       setLoader(false)
       if(mailRes.messageId && mailRes2.messageId){
         toast.success("Request Sent. We will get back to you soon")
         navigate.push('/my-profile')
       }else{
         setLoader(false)
         toast.error("Something went wrong, please try again")
        //  return;
       }
     } catch (error) {
      setLoader(false)
      console.error(error)
     }
      // navigate.push('/')
    }else{
      setLoader(false)
      toast.error("Something went wrong")
      return;
    }

      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.status === 200) {
      //     setLoader(false)
      //     window.alert('Please your email or spam box!')
      //     navigate.push('/')
      //   }
      // })
      // .catch((e) => {
      //   console.error(e)
      //   setLoader(false)
      // })
  }

  return (
   <>
     <section className='mx-5 md:container md:mx-auto pb-10'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-blue my-5 text-center'>
        Process Your Visa
      </h1>
      {/* second card  */}
      <section className=''>
        <p className='my-5 text-xl text-blue font-semibold'>
          Where are you from?
        </p>
        <FormControl fullWidth className='md:!w-1/2'>
          <p className='my-2.5'>Select Country(Required)</p>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={country ? country : country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((c, i) => (
              <MenuItem key={i} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </section>
      {country === 'Bangladesh' ? (
        <section className='flex flex-col justify-center items-center py-5 gap-4 shadow rounded md:w-1/2'>
          <div className='mb-2'>
            <Image
              height={300}
              width={500}
              src={personImg}
              alt='Bumrungrad International Hospital'  
              className='w-[100px] h-[100px] rounded-full mx-auto my-0'
            />
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <PersonIcon className='text-blue' />
              <p className='text-center text-xl font-semibold'>Abdus Samad</p>
            </div>

            <a
              href='http://wa.me/+8801847284867'
              target='_blank'
              rel='noopener noreferrer'
              alt='Bumrungrad Hospital'
            >
              <div className='flex items-center justify-center gap-2 mt-2'>
                <WhatsAppIcon className='text-green' />
                <p className='text-xl font-semibold'>01847284867</p>
              </div>
            </a>
          </div>
        </section>
      ) : (
        <section className='py-5'>
          {/* info card */}
          <section className=''>
            <h5 className=' text-lg text-semibold  mt-5 font-semibold text-blue'>
              Patient Infromation
            </h5>
            <Divider />

            <div className='mt-5 flex gap-4'>
              <button
                onClick={() => setOld(!old)}
                className={`px-4 py-2 font-semibold ${
                  old ? 'bg-blue text-white' : 'text-blue'
                }  rounded-full`}
              >
                New Patient
              </button>
              <button
                onClick={() => setOld(!old)}
                className={`px-4 py-2 font-semibold ${
                  !old ? 'bg-blue text-white' : 'text-blue'
                } rounded-full`}
              >
                Old Patient
              </button>
            </div>

            {!old && (
              <div className='mt-5'>
                <p className='mb-2.5'>Enter H.N. Number</p>
                <TextField
                  fullWidth
                  defaultValue="Don't Remember"
                  onChange={(e) => setHnNumber(e.target.value)}
                />
              </div>
            )}
            <div className='grid md:grid-cols-2 gap-4 mt-5'>
              <div>
                <p className='mb-2.5'>Enter First Name(Required)</p>
                <TextField
                  onChange={(e) => setfirstname(e.target.value)}
                  fullWidth
                  placeholder='Required'
                  defaultValue={firstname}
                />
              </div>
              <div>
                <div>
                  <p className='mb-2.5'>Enter Last Name(Required)</p>
                  <TextField
                    onChange={(e) => setLastName(e.target.value)}
                    fullWidth
                    placeholder='Required'
                    defaultValue={lastName}
                  />
                </div>
              </div>

              <FormControl fullWidth>
                <p className='mb-2.5'>Select Citizenship(Required)</p>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={citizenship ? citizenship : citizenship}
                  onChange={(e) => setCitizenship(e.target.value)}
                >
                  {countries.map((c, i) => (
                    <MenuItem key={i} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <p className='mb-2.5'>Select Gender(Required)</p>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={gender ? gender : gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>
              <div>
                <p className='mb-2.5'>Enter Email(Required)</p>
                <TextField
                  fullWidth
                  placeholder='Required'
                  defaultValue={pataientEmail}
                  onChange={(e) => setPataientEmail(e.target.value)}
                />
              </div>
              <div>
                <p className='mb-2.5'>Whatsapp Number(Required)</p>
                <MuiTelInput
                  defaultCountry='TH'
                  value={phone ? phone : phone}
                  onChange={handlePhone}
                  fullWidth
                />
              </div>
              <div>
                <p className='mb-2.5'>Enter Date of Birth(Required)</p>
                <TextField
                  fullWidth
                  type='date'
                  defaultValue={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>
            <div>
              <p className='my-2.5'>Medical Description</p>
              <TextField
                className='capitalize'
                placeholder='MEDICAl CORNCERN OR REQUEST(OPTIONAL)'
                fullWidth
                multiline
                rows={5}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </section>

          {/* docs card */}
          <section className=' flex flex-col gap-4 mt-4'>
            <p className='text-xl font-semibold text-blue'>Documents</p>
            <Divider />
            <p className='font-semibold'>*Choose file or Add drive link</p>

            <div>
              {' '}
              <div>
                <p className='mb-2.5'>Attendance Passport Copy(Required)</p>
                <TextField
                  type='file'
                  fullWidth
                  onChange={(e) => setPassport(e.target.files[0])}
                />
              </div>
              <div>
                <p className='my-2.5'>Attendance Passport Copy 2(If any)</p>
                <TextField
                  type='file'
                  fullWidth
                  onChange={(e) => setmedicalReport1(e.target.files[0])}
                />
              </div>
              <div>
                <p className='my-2.5'>Attendance Passport Copy 3(If any)</p>
                <TextField
                  type='file'
                  fullWidth
                  onChange={(e) => setmedicalReport2(e.target.files[0])}
                />
              </div>
              <div>
                <p className='my-2.5'>Visa Invitation Letter</p>
                <TextField
                  type='file'
                  fullWidth
                  onChange={(e) => setInvitationLetter(e.target.files[0])}
                />
              </div>
              <div className='my-2.5'>
                {' '}
                <div className='flex flex-col gap-2.5'>
                  <TextField
                    fullWidth
                    placeholder='Add Drive Link 1 (Required)'
                    value={driveLink1}
                    onChange={(e) => setDriveLink1(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    placeholder='Add Drive Link 2'
                    value={driveLink2}
                    onChange={(e) => setDriveLink2(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className='flex justify-center gap-2'>
            <button
              onClick={handleBookVisa}
              className={`flex items-center gap-1 mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                firstname === '' ||
                lastName === '' ||
                citizenship === '' ||
                gender === '' ||
                pataientEmail === '' ||
                phone === '' ||
                dob === '' ||
                (passport === '' && driveLink1 === '')
                  ? 'bg-white text-blue'
                  : 'text-white'
              }`}
              disabled={
                loader ||
                firstname === '' ||
                lastName === '' ||
                citizenship === '' ||
                gender === '' ||
                pataientEmail === '' ||
                phone === '' ||
                dob === '' ||
                (passport === '' && driveLink1 === '')
              }
            >
              Submit
              {loader && (
                <div className='flex gap-1'>
                  <div className='h-3 w-3 shadow bg-white rounded-full'></div>
                  <div className='h-3 w-3 shadow bg-white rounded-full animate-bounce'></div>
                </div>
              )}
            </button>
          </div>
        </section>
      )}
    </section>
   </>
  )
}

export default VisaProcessing
