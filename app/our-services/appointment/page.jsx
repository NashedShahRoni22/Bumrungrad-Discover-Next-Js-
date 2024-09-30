"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./style.css";
import { countries } from "@/public/data/country";
import { MuiTelInput } from "mui-tel-input";
import Divider from "@mui/material/Divider";
import logo from "@/public/assets/Bumrungrad  Hospital_nav_logo.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useAuth from "@/helpers/hooks/useAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { admin_mails } from "@/constant";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { comapanyMailBody } from "@/helpers/mail/mailbody";
import Loader from "@/components/ui/loader";
import { formatKeysWithRemoveKeys } from "@/helpers/objectKeyFormat";

const customStyles = {
  day: {
    fontSize: "1rem",
    color: "blue",
    borderRadius: "50%",
    padding: "5px",
  },
  selected: {
    backgroundColor: "green",
    color: "white",
  },
  today: {
    border: "1px solid red",
  },
  caption: {
    color: "orange",
    fontSize: "1.2rem",
  },
};

export default function Appointment() {
  const { auth } = useAuth();
  let doctor1, speacility1;
  if (typeof window !== "undefined") {
    doctor1 = JSON.parse(localStorage.getItem("doctor_name"));
    speacility1 = JSON.parse(localStorage.getItem("Doctor_specialty"));
  }

  const [loader, setLoader] = useState(false);
  // previwer control
  const [Previewopen, PreviewsetOpen] = React.useState(false);

  const handlePreviewClickOpen = () => {
    PreviewsetOpen(true);
  };

  const handlePreviewClosePreview = () => {
    PreviewsetOpen(false);
  };

  // stepper functionality
  const [stepperOpen, setStepperOpen] = useState(true);
  const [stepperOpen2, setStepperOpen2] = useState(false);
  const [stepperOpen3, setStepperOpen3] = useState(false);

  const handleClick = () => {
    setStepperOpen(false);
    setStepperOpen2(true);
  };
  const handleClick2Next = () => {
    setStepperOpen2(false);
    setStepperOpen3(true);
  };
  const handleClick2Prev = () => {
    setStepperOpen(true);
    setStepperOpen2(false);
  };
  const handleClick3Prev = () => {
    setStepperOpen2(true);
    setStepperOpen3(false);
  };

  const [old, setOld] = useState(false);
  const [yes, setYes] = useState(true);
  const [activeChoose, setActiveChoose] = useState(true);
  const [activeRecommend, setActiveRecommend] = useState(false);
  const [activeYourSelf, setActiveYourSelf] = useState(true);

  //manage data
  const [specialty, setSpeacility] = React.useState(
    speacility1 ? speacility1 : ""
  );
  const [subSpecialty, setSubSpeacility] = React.useState("");
  const [doctor, setDoctor] = React.useState(doctor1 ? doctor1 : "");
  const [medicalDesc, setMedicalDesc] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());
  const [shift, setShift] = React.useState("");
  const [shift2, setShift2] = React.useState("");
  const [firstSiftTime, setFirstShiftTime] = React.useState("");
  const [SecondSiftTime, setSecondSiftTime] = React.useState("");

  const [hnNumber, setHnNumber] = React.useState("");
  const [firstname, setfirstname] = React.useState("");

  const [lastName, setLastName] = React.useState("");

  const [dob, setDob] = React.useState("");
  const [pataientEmail, setPataientEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [citizenship, setCitizenship] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const [requestorFirstname, setRequestorFirstname] = React.useState("");
  const [requestorLastName, setRequestorLastName] = React.useState("");
  const [requestorEmail, setRequestorEmail] = React.useState("");
  const [phone2, setPhone2] = React.useState("");
  const [relation, setRelation] = React.useState("");

  useEffect(() => {
    if (auth) {
      setfirstname(auth?.firstName || "");
      setLastName(auth?.lastName || "");
      setDob(auth?.dob || "");
      setPataientEmail(auth?.email || "");
      setPhone(auth?.phone || "");
      setGender(auth?.gender || "");
      setCitizenship(auth?.citizenship || "");
      setCountry(auth?.country || "");
      setRequestorFirstname(auth?.firstName || "");
      setRequestorLastName(auth?.lastName || "");
      setRequestorEmail(auth?.email || "");
      setPhone2(auth?.phone || "");
    }
  }, [auth]);
  const [passport, setPassport] = React.useState("");
  const [medicalReport1, setmedicalReport1] = React.useState("");
  const [medicalReport2, setmedicalReport2] = React.useState("");

  const [driveLink1, setDriveLink1] = React.useState("");
  const [driveLink2, setDriveLink2] = React.useState("");

  const handlePhone = (newPhone) => {
    setPhone(newPhone);
  };
  const handlePhone2 = (newPhone) => {
    setPhone2(newPhone);
  };

  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialities] = useState([]);
  const [subSpecialties, setSubSpecialities] = useState([]);

  const handleChange = (event) => {
    setSpeacility(event.target.value);
  };

  //get speacilities
  useEffect(() => {
    fetch(
      "https://api.discoverinternationalmedicalservice.com/api/get/specialty"
    )
      .then((res) => res.json())
      .then((data) => setSpecialities(data?.response?.data));
  }, []);
  //get sub speacilities
  useEffect(() => {
    if (specialty) {
      fetch(
        `https://api.discoverinternationalmedicalservice.com/api/get/selected/sub/specialty/${specialty}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.response?.status === 200) {
            setSubSpecialities(data?.response?.data);
          } else {
            setSubSpecialities([]);
          }
        });
    }
  }, [specialty]);
  // get doctors name
  useEffect(() => {
    // setLoader(true);
    // Create a function to fetch data based on the URL
    const fetchData = () => {
      // Create a query string based on your query states
      const queryParams = `specialty=${specialty}&sub_specialty=${subSpecialty}`;
      // Create the base URL
      const baseUrl =
        "https://api.discoverinternationalmedicalservice.com/api/search/doctor";
      // Create the final URL by appending the query string if it's not empty
      const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
      // Fetch data from the API
      fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setDoctors(data.data);
          } else {
            setDoctors([]);
          }
        })
        .catch((error) => console.error(error));
    };
    // Call the fetchData function whenever any state changes
    fetchData();
  }, [specialty, subSpecialty]);

  const navigate = useRouter();

  //book apppointment
  const handleBookAppointment = async () => {
    try {
      setLoader(true);

      const formData = new FormData();

      const fields = {
        user_id: auth?.id,
        specialty,
        doctor,
        subSpecialty,
        medicalDesc,
        selectedDate: format(selectedDate, "PP"),
        selectedDate2: format(selectedDate2, "PP"),
        shift,
        shift2,
        firstSiftTime,
        SecondSiftTime,
        oldPataint: old,
        HnNumber: hnNumber,
        PataientFirstName: firstname,
        PataientLastName: lastName,
        PataientCitizenship: citizenship,
        PataientGender: gender,
        PataientEmail: pataientEmail,
        PataientPhone: phone,
        PataientDob: dob,
        country,
        mediicalCorncern: desc,
        RequestorFirstname: requestorFirstname,
        RequestorLastName: requestorLastName,
        RequestorEmail: requestorEmail,
        RequestorPhone: phone2,
        RequestoerRelation: relation,
        passport,
        medicalReport1,
        medicalReport2,
        driveLink1,
        driveLink2,
      };

      // Append all fields to FormData
      Object.entries(fields).forEach(([key, value]) =>  formData.append(key, value));

      // Send API request
      const apiResponse = await fetch(
        "https://api.discoverinternationalmedicalservice.com/api/add/doctor/appointment",
        {
          method: "POST",
          body: formData,
        }
      );
      setLoader(false);

      const data = await apiResponse.json();
   

      if (data.status === 200) {
        // toast.success("Please check your email or spam box!");
        localStorage.removeItem("doctor_name");
        localStorage.removeItem("Doctor_specialty");
        // setLoader(false);
      } else {
       toast.error("Failed to book appointment");
       return
      }

      // upload image
      setLoader(true);
      const uploadImage = data?.passport ? data?.passport : "link not provided";
      const uploadImage2 =  data?.medicalReport1
        ? data?.medicalReport1
        : "link not provided";
      const uploadImage3 = data?.medicalReport2
        ? data?.medicalReport2
        : "link not provided";
      setLoader(false);
      // Send email

      setLoader(true);
      const emailResponse = await sendEmails(
        admin_mails,
        "Book Appointment",
        comapanyMailBody(
          formatKeysWithRemoveKeys(
            {
              ...fields,
              passport: uploadImage,
              medicalReport1: uploadImage2,
              medicalReport2: uploadImage3,
            },
            ["user_id"]
          ),
          "Book Appointment"
        )
      );
      setLoader(false);
      setLoader(true);

      const responseClient = await sendEmails(
        auth?.email,
        "Book Appointment",
        comapanyMailBody(
          formatKeysWithRemoveKeys(
            {
              ...fields,
              passport: uploadImage,
              medicalReport1: uploadImage2,
              medicalReport2: uploadImage3,
            },
            ["user_id"]
          ),
          "Book Appointment"
        )
      );
      setLoader(false);

      if (emailResponse.messageId && responseClient.messageId) {
        toast.success("We have received your request. Our representative will reach you shortly!", {
          position: "top-center",
          style: { borderRadius: "20px" },
          duration: 5000,
        });

        if (typeof window !== "undefined") {
          localStorage.removeItem("doctor_name");
          localStorage.removeItem("Doctor_specialty");
        }
        PreviewsetOpen(false);
        navigate.push("/my-profile");
      }
    } catch (error) {
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  const today = new Date();

  // Disable today and previous dates
  const disabledDays = [
    { before: today }, // This will disable today and all previous dates
  ];
  return (
    <>
      <div className="md:p-10 my-5 md:my-10 md:container md:mx-auto lg:flex lg:flex-col lg:items-center">
        <h1 className="text-center capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          Book Appointment
        </h1>
        <div className="my-10 lg:w-11/12">
          {/* top buttons  */}
          <div className="flex justify-between items-center w-1/2 mx-auto">
            <button
              className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
                (stepperOpen || stepperOpen2 || stepperOpen3) &&
                "bg-blue text-white border-white"
              }`}
            >
              1
            </button>
            <div
              className={`h-1 rounded mx-5 w-full ${
                stepperOpen2 || stepperOpen3 ? "bg-blue" : "bg-cream"
              }`}
            ></div>
            <button
              className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
                (stepperOpen2 || stepperOpen3) &&
                "bg-blue text-white border-white"
              }`}
            >
              2
            </button>
            <div
              className={`h-1 rounded mx-5 w-full ${
                stepperOpen3 ? "bg-blue" : "bg-cream"
              }`}
            ></div>
            <button
              className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
                stepperOpen3 && "bg-blue text-white border-white"
              }`}
            >
              3
            </button>
          </div>
          {/* Appointment form  */}
          <div className="my-5 px-2 py-5">
            {stepperOpen && (
              <div className="md:px-5 ">
                <div className="flex flex-col gap-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Speciality
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={specialty}
                      label="Select Speciality"
                      onChange={handleChange}
                    >
                      {specialties?.map((s, i) => (
                        <MenuItem key={i} value={s?.name}>
                          {s?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Sub Speciality
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={subSpecialty}
                      label="Select Sub Speacility"
                      onChange={(e) => setSubSpeacility(e.target.value)}
                      disabled={subSpecialties?.length === 0}
                    >
                      {subSpecialties?.map((s, i) => (
                        <MenuItem value={s?.sub_specialty} key={i}>
                          {s?.sub_specialty}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {/* select or choose  */}
                <div>
                  <div className="my-4 flex gap-4">
                    <button
                      className={`flex items-center gap-1 px-4 py-2 font-semibold  rounded-full ${
                        activeChoose && "bg-blue text-white"
                      }`}
                      onClick={() => {
                        setActiveRecommend(false);
                        setActiveChoose(true);
                      }}
                    >
                      Choose
                      <span className="hidden md:block">Doctor</span>
                    </button>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 font-semibold  rounded-full ${
                        activeRecommend && "bg-blue text-white"
                      }`}
                      onClick={() => {
                        setActiveRecommend(true);
                        setActiveChoose(false);
                      }}
                    >
                      Recommend
                      <span className="hidden md:block">Doctor</span>
                    </button>
                  </div>
                  <div>
                    {activeChoose && (
                      <div className="flex flex-col gap-5">
                        <FormControl fullWidth className="mb-5">
                          <InputLabel id="demo-simple-select-label">
                            Choose Doctor
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={doctor}
                            label="Choose Doctor"
                            onChange={(e) => setDoctor(e.target.value)}
                            disabled={doctors?.length === 0}
                          >
                            {doctors?.map((s, i) => (
                              <MenuItem value={s?.name} key={i}>
                                {s?.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <TextField
                          placeholder="Please Describe Your Medical Corcern or Symptoms!"
                          fullWidth
                          multiline
                          rows={6}
                          onChange={(e) => setMedicalDesc(e.target.value)}
                        />
                      </div>
                    )}
                    {activeRecommend && (
                      <TextField
                        placeholder="Please Describe Your Medical Corcern or Symptoms!"
                        fullWidth
                        multiline
                        rows={6}
                        onChange={(e) => setMedicalDesc(e.target.value)}
                      />
                    )}
                  </div>
                </div>
                <p className="text-blue font-semibold py-2.5 text-center">
                  *Select a Speciality. <br />
                  *Select a Doctor or Write Symtopms.
                </p>
                <div className="flex justify-center">
                  <button
                    className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                      (doctor === "" && medicalDesc === "") || specialty === ""
                        ? "bg-white text-blue"
                        : "text-white"
                    }`}
                    onClick={handleClick}
                    disabled={
                      (doctor === "" && medicalDesc === "") || specialty === ""
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {stepperOpen2 && (
              <div className=" flex flex-col justify-center items-center gap-5 ">
                <p className="font-semibold text-blue text-xl">
                  Select Desired Day
                </p>
                <div className="flex flex-col gap-2.5 md:flex-row md:gap-5">
                  <div className="flex flex-col items-center shadow my-2.5">
                    <p className="font-semibold text-blue">First Date Choice</p>

                    <DayPicker
                      styles={customStyles}
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      // disabledDays={disabledDays}
                      disabled={disabledDays}
                    />
                    <p className="mb-2.5">
                      <span className="font-semibold text-blue">
                        *Update Date:
                      </span>
                      {selectedDate
                        ? format(selectedDate, "PP")
                        : "No date selected"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center shadow my-2.5">
                    <p className="font-semibold text-blue">
                      Second Date Choice
                    </p>
                    <DayPicker
                      styles={customStyles}
                      mode="single"
                      selected={selectedDate2}
                      onSelect={setSelectedDate2}
                      disabled={disabledDays}
                    />
                    <p className="mb-2.5">
                      <span className="font-semibold text-blue">
                        *Update Date:
                      </span>
                      {selectedDate2
                        ? format(selectedDate2, "PP")
                        : "No date selected"}
                    </p>
                  </div>
                </div>
                <p className="my-2.5 font-semibold text-blue text-xl">
                  Select Desired Shift
                </p>
                <div className="lg:w-[770px] max-sm:w-full mx-auto flex flex-col md:flex-row gap-5">
                  <div className="w-full">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        First Priority Shift
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={shift}
                        label="First Priority Shift"
                        onChange={(e) => setShift(e.target.value)}
                      >
                        <MenuItem value="Morning">
                          Morning (06:00 am - 12:00 pm)
                        </MenuItem>
                        <MenuItem value="Evening">
                          Afternoon (12:00 pm - 06:00 pm)
                        </MenuItem>
                        <MenuItem value="Night">
                          Night (06:00 pm - 12:00 am)
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <p className="text-sm mt-1.5 text-blue text-right">
                      *Required
                    </p>
                    <p className="font-semibold my-2.5 text-blue">
                      First Prefarable Time
                    </p>
                    <TextField
                      type="time"
                      fullWidth
                      onChange={(e) => setFirstShiftTime(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Second Priority Shift
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={shift2}
                        label="Second Priority Shift"
                        onChange={(e) => setShift2(e.target.value)}
                      >
                        <MenuItem value="Morning">
                          Morning (06:00 am - 12:00 pm)
                        </MenuItem>
                        <MenuItem value="Evening">
                          Afternoon (12:00 pm - 06:00 pm)
                        </MenuItem>
                        <MenuItem value="Night">
                          Night (06:00 pm - 12:00 am)
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <p className="text-sm mt-1.5 text-blue text-right">
                      *Required
                    </p>
                    <p className="font-semibold my-2.5 text-blue">
                      Second Prefarable Time
                    </p>
                    <TextField
                      type="time"
                      fullWidth
                      onChange={(e) => setSecondSiftTime(e.target.value)}
                    />
                  </div>
                </div>
                <p className="font-semibold text-center mt-5 md:text-xl text-blue">
                  This is only a tentative booking. Your actual appointment will
                  be confirmed by email.
                </p>
                <div className="flex justify-center gap-2">
                  <button
                    className="max-sm:w-full xl:w-[150px] mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border border-blue hover:text-blue duration-300 ease-linear"
                    onClick={handleClick2Prev}
                  >
                    Previous
                  </button>
                  <button
                    className={`max-sm:w-full xl:w-[150px] mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                      selectedDate === "" ||
                      selectedDate2 === "" ||
                      shift === "" ||
                      shift2 === ""
                        ? "bg-white text-blue"
                        : "text-white"
                    }`}
                    onClick={handleClick2Next}
                    disabled={
                      selectedDate === "" ||
                      selectedDate2 === "" ||
                      shift === "" ||
                      shift2 === ""
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {stepperOpen3 && (
              <section className="md:px-5 overflow-y-auto">
                {/* first-card */}
                <section className="">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveYourSelf(!activeYourSelf)}
                      className={`font-semibold px-4 py-2 rounded-full ${
                        activeYourSelf
                          ? "bg-blue text-white"
                          : "bg-white text-blue"
                      }`}
                    >
                      For Yourself
                    </button>
                    <button
                      onClick={() => setActiveYourSelf(!activeYourSelf)}
                      className={`font-semibold px-4 py-2 rounded-full ${
                        activeYourSelf === false
                          ? "bg-blue text-white"
                          : "bg-white text-blue"
                      }`}
                    >
                      Someone else
                    </button>
                  </div>
                  {activeYourSelf === false && (
                    <div>
                      <h5 className="my-5 text-lg text-blue font-semibold">
                        Requestor Information
                      </h5>
                      <Divider />
                      <div className="mt-5 grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="mb-2.5">Enter First Name(Required)</p>
                          <TextField
                            fullWidth
                            placeholder="Required"
                            value={requestorFirstname}
                            onChange={(e) =>
                              setRequestorFirstname(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <p className="mb-2.5">Enter Last Name(Required)</p>
                          <TextField
                            fullWidth
                            value={requestorLastName}
                            placeholder="Required"
                            onChange={(e) =>
                              setRequestorLastName(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <p className="mb-2.5">Enter Email(Required)</p>
                          <TextField
                            fullWidth
                            placeholder="Required"
                            value={requestorEmail}
                            onChange={(e) => setRequestorEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <p className="mb-2.5">
                            Enter Phone Number (Required)
                          </p>
                          <MuiTelInput
                            defaultCountry="TH"
                            value={phone2}
                            onChange={handlePhone2}
                            fullWidth
                          />
                        </div>
                        <div>
                          <p className="mb-2.5">Select Relation (Required)</p>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Relation
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={relation}
                              label="Select Relation"
                              onChange={(e) => setRelation(e.target.value)}
                            >
                              <MenuItem value="Son">Son</MenuItem>
                              <MenuItem value="Daughter">Daughter</MenuItem>
                              <MenuItem value="Father">Father</MenuItem>
                              <MenuItem value="Mother">Mother</MenuItem>
                              <MenuItem value="Spouse">Spouse</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  )}
                  <h5 className=" text-lg text-semibold  mt-5 font-semibold text-blue">
                    Patient Infromation
                  </h5>
                  {!activeYourSelf && (
                    <h1 className="text-red font-semibold my-2.5">
                      * Please update the following fields with required patient
                      information
                    </h1>
                  )}
                  <Divider />

                  <div className="mt-5 flex gap-4">
                    <button
                      onClick={() => setOld(!old)}
                      className={`px-4 py-2 font-semibold ${
                        old ? "bg-blue text-white" : "text-blue"
                      }  rounded-full`}
                    >
                      New Patient
                    </button>
                    <button
                      onClick={() => setOld(!old)}
                      className={`px-4 py-2 font-semibold ${
                        !old ? "bg-blue text-white" : "text-blue"
                      } rounded-full`}
                    >
                      Old Patient
                    </button>
                  </div>

                  {!old && (
                    <div className="mt-5">
                      <p className="mb-2.5">Enter H.N. Number</p>
                      <TextField
                        fullWidth
                        defaultValue="Don't Remember"
                        onChange={(e) => setHnNumber(e.target.value)}
                      />
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div>
                      <p className="mb-2.5">Enter First Name(Required)</p>
                      <TextField
                        onChange={(e) => setfirstname(e.target.value)}
                        fullWidth
                        placeholder="Required"
                        defaultValue={firstname}
                      />
                    </div>
                    <div>
                      <div>
                        <p className="mb-2.5">Enter Last Name(Required)</p>
                        <TextField
                          onChange={(e) => setLastName(e.target.value)}
                          fullWidth
                          placeholder="Required"
                          defaultValue={lastName}
                        />
                      </div>
                    </div>

                    <FormControl fullWidth>
                      <p className="mb-2.5">Select Citizenship(Required)</p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
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
                      <p className="mb-2.5">Select Gender(Required)</p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender ? gender : gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                    <div>
                      <p className="mb-2.5">Enter Email(Required)</p>
                      <TextField
                        fullWidth
                        placeholder="Required"
                        defaultValue={pataientEmail}
                        onChange={(e) => setPataientEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <p className="mb-2.5">Whatsapp Number(Required)</p>
                      <MuiTelInput
                        defaultCountry="TH"
                        value={phone ? phone : phone}
                        onChange={handlePhone}
                        fullWidth
                      />
                    </div>
                    <div>
                      <p className="mb-2.5">Enter Date of Birth(Required)</p>
                      <TextField
                        fullWidth
                        type="date"
                        defaultValue={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>
                </section>

                {/* second card  */}
                <section className="">
                  <p className="my-5 text-xl text-blue font-semibold">
                    Where are you from?
                  </p>
                  <Divider />
                  <h5 className="mt-5">Are you in Thailand?</h5>
                  <div className="flex gap-2 mt-2.5 mb-5">
                    <button
                      className={`px-5 py-2 rounded-xl ${
                        yes === true && "bg-blue text-white"
                      }`}
                      onClick={() => setYes(true)}
                    >
                      Yes
                    </button>
                    <button
                      className={`px-5 py-2 rounded-xl ${
                        yes === false && "bg-blue text-white"
                      }`}
                      onClick={() => {
                        setYes(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                  {yes === false && (
                    <FormControl fullWidth>
                      <p className="mb-2.5">Select Country(Required)</p>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country ? country : country}
                        className="mb-5"
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {countries.map((c, i) => (
                          <MenuItem key={i} value={c}>
                            {c}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  <div>
                    <p className="mb-2.5">Medical Description</p>
                    <TextField
                      className="capitalize"
                      placeholder="MEDICAl CORNCERN OR REQUEST(OPTIONAL)"
                      fullWidth
                      multiline
                      rows={5}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                </section>

                {/* third card */}
                <section className=" flex flex-col gap-4 mt-4">
                  <p className="text-xl font-semibold text-blue">Documents</p>
                  <Divider />
                  <p className="font-semibold">
                    *Choose file or Add drive link
                  </p>

                  <div>
                    <div>
                      <p className="mb-2.5">Attach Passport(Required)</p>
                      <TextField
                        type="file"
                        fullWidth
                        onChange={(e) => setPassport(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <p className="my-2.5">Medical Report 1(Optional)</p>
                      <TextField
                        type="file"
                        fullWidth
                        onChange={(e) => setmedicalReport1(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <p className="my-2.5">Medical Report 2(Optional)</p>
                      <TextField
                        type="file"
                        fullWidth
                        onChange={(e) => setmedicalReport2(e.target.files[0])}
                      />
                    </div>
                    <div className="my-2.5">
                      <div className="flex flex-col gap-2.5">
                        <TextField
                          fullWidth
                          placeholder="Add Drive Link 1 (Required)"
                          value={driveLink1}
                          onChange={(e) => setDriveLink1(e.target.value)}
                        />
                        <TextField
                          fullWidth
                          placeholder="Add Drive Link 2"
                          value={driveLink2}
                          onChange={(e) => setDriveLink2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex justify-center gap-2">
                  <button
                    disabled={loader}
                    className="mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border border-blue hover:text-blue duration-300 ease-linear"
                    onClick={handleClick3Prev}
                  >
                    Previous
                  </button>
                  <button
                    className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                      firstname === "" ||
                      lastName === "" ||
                      citizenship === "" ||
                      gender === "" ||
                      pataientEmail === "" ||
                      phone === "" ||
                      dob === "" ||
                      (passport === "" && driveLink1 === "")
                        ? "bg-white text-blue"
                        : "text-white"
                    }`}
                    onClick={handlePreviewClickOpen}
                    disabled={
                      loader ||
                      firstname === "" ||
                      lastName === "" ||
                      citizenship === "" ||
                      gender === "" ||
                      pataientEmail === "" ||
                      phone === "" ||
                      dob === "" ||
                      (passport === "" && driveLink1 === "")
                    }
                  >
                    Preview
                  </button>
                </div>
              </section>
            )}
            {/* preview modal  */}

            <React.Fragment>
              <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={Previewopen}
                onClose={handlePreviewClosePreview}
              >
                <DialogContent>
                  <div className="md:p-4 flex flex-col gap-5 lg:container lg:mx-auto">
                    <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between">
                      <Image
                        height={200}
                        width={200}
                        src={logo}
                        className="w-[200px]"
                        alt="Bumrungrad International Hospital"
                      />
                      <div className="text-center md:font-semibold text-blue">
                        <p>Bumrungrad International Hospital</p>
                        <p>33 Sukhumvit 3, Wattana, Bangkok 10110 Thailand.</p>
                      </div>
                    </div>
                    <div className="h-0.5 w-full bg-blue"></div>
                    <div className="shadow rounded-xl p-5 text-black">
                      <p className="mb-2.5 md:text-xl font-semibold text-blue">
                        Appointment For:
                      </p>
                      <Divider />
                      <ul className="mt-2.5">
                        <li>{doctor && <span>Doctor: {doctor}</span>}</li>
                        <li>
                          {specialty && (
                            <span>
                              Specialty:
                              {specialty}
                            </span>
                          )}
                        </li>
                        <li>
                          {subSpecialty && (
                            <span>
                              Sub Specialty:
                              {subSpecialty}
                            </span>
                          )}
                        </li>
                        <li>
                          {medicalDesc && (
                            <span>
                              Medical Description:
                              {medicalDesc}
                            </span>
                          )}
                        </li>
                        <li>
                          {requestorEmail && (
                            <span>
                              Email:
                              {requestorEmail}
                            </span>
                          )}
                        </li>
                        <li>{phone2 && <span>Phone: {phone2}</span>}</li>
                        <li>{relation && <span>Relation: {relation}</span>}</li>
                      </ul>
                    </div>
                    <div className="shadow rounded-xl p-5 text-black">
                      <p className="mb-2.5 md:text-xl font-semibold text-blue">
                        Appointment Schedule:
                      </p>
                      <Divider />
                      <ul className="mt-2.5 grid md:grid-cols-2 gap-2">
                        <div>
                          <li>
                            {selectedDate && (
                              <span>
                                First Date:
                                {format(selectedDate, "PP")}
                              </span>
                            )}
                          </li>
                          <li>
                            {shift && (
                              <span>
                                First Shift:
                                {shift}
                              </span>
                            )}
                          </li>
                          <li>
                            {firstSiftTime && (
                              <span>
                                First Shift Time:
                                {firstSiftTime}
                              </span>
                            )}
                          </li>
                        </div>
                        <div>
                          <li>
                            {selectedDate2 && (
                              <span>
                                Second Date:
                                {format(selectedDate2, "PP")}
                              </span>
                            )}
                          </li>
                          <li>
                            {shift && (
                              <span>
                                Second Shift:
                                {shift2}
                              </span>
                            )}
                          </li>
                          <li>
                            {SecondSiftTime && (
                              <span>
                                Second Shift Time:
                                {SecondSiftTime}
                              </span>
                            )}
                          </li>
                        </div>
                      </ul>
                    </div>
                    {activeYourSelf === false && (
                      <div className="shadow rounded-xl p-5 text-black">
                        <p className="mb-2.5 md:text-xl font-semibold text-blue">
                          Requestor Information:
                        </p>
                        <Divider />
                        <ul className="mt-2.5">
                          <li>
                            {requestorFirstname && (
                              <span>
                                Firstname:
                                {requestorFirstname}
                              </span>
                            )}
                          </li>
                          <li>
                            {requestorLastName && (
                              <span>
                                Lastname:
                                {requestorLastName}
                              </span>
                            )}
                          </li>
                          <li>
                            {requestorEmail && (
                              <span>
                                Email:
                                {requestorEmail}
                              </span>
                            )}
                          </li>
                          <li>{phone2 && <span>Phone: {phone2}</span>}</li>
                          <li>
                            {relation && (
                              <span>
                                Relation:
                                {relation}
                              </span>
                            )}
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className="shadow rounded-xl p-5 text-black">
                      <p className="mb-2.5 md:text-xl font-semibold text-blue">
                        Patient Information
                      </p>
                      <Divider />
                      <ul className="mt-2.5">
                        <li>
                          {firstname && lastName ? (
                            <span>
                              Name: {firstname}
                              {lastName}
                            </span>
                          ) : (
                            ""
                          )}
                        </li>

                        <li>{dob && <span>DOB: {dob}</span>}</li>
                        <li>
                          {hnNumber && (
                            <span>
                              HN Number:
                              {hnNumber}
                            </span>
                          )}
                        </li>
                        <li>
                          {pataientEmail && (
                            <span>
                              Email:
                              {pataientEmail}
                            </span>
                          )}
                        </li>
                        <li>{phone && <span>Phone: {phone}</span>}</li>
                        <li>{gender && <span>Gender: {gender}</span>}</li>
                        <li>
                          {citizenship && (
                            <span>
                              Citizenship:
                              {citizenship}
                            </span>
                          )}
                        </li>
                        <li>{country && <span>Country: {country}</span>}</li>
                        <li>
                          {desc && (
                            <span>
                              Medical Description:
                              {desc}
                            </span>
                          )}
                        </li>
                      </ul>
                    </div>
                    <div className="shadow rounded-xl p-5 text-black">
                      <p className="mb-2.5 md:text-xl font-semibold text-blue">
                        Attached Documents
                      </p>
                      <Divider />
                      <ul className="mt-2.5 flex flex-col gap-2 w-full list-decimal ml-5">
                        <li className="">
                          {passport && <span>{passport.name}</span>}
                        </li>

                        {medicalReport1 !== "" && (
                          <li className="">
                            <span>{medicalReport1.name}</span>
                          </li>
                        )}

                        {medicalReport2 !== "" && (
                          <li className="">
                            <span>{medicalReport2.name}</span>
                          </li>
                        )}

                        {driveLink1 !== "" && (
                          <li className="">
                            <a
                              href={driveLink1}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {driveLink1}
                            </a>
                          </li>
                        )}
                        {driveLink2 !== "" && (
                          <li className="">
                            <a
                              href={driveLink2}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {driveLink2}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        disabled={loader}
                        onClick={handleBookAppointment}
                        className={`btn_primary ${
                          loader
                            ? "bg-white border text-black"
                            : "text-white bg-blue"
                        }`}
                      >
                        {loader ? (
                          <Loader
                            className="animate-spin"
                            stroke="black"
                            color="black"
                          />
                        ) : (
                          "Book Appointment"
                        )}
                      </button>
                      <button
                        disabled={loader}
                        onClick={handlePreviewClosePreview}
                        className="mt-6 ml-2 px-4 py-2 bg-red border border-red text-white rounded-md hover:bg-white hover:text-red font-semibold duration-300 ease-linear"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </React.Fragment>
          </div>
        </div>
      </div>
    </>
  );
}
