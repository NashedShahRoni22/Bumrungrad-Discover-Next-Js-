"use client";

import {
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { countries } from "@/public/data/country";
import { MuiTelInput } from "mui-tel-input";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/ui/loader";

export default function Register() {
  const navigate = useRouter();
  //yes or no
  const [yes, setYes] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, SetError] = useState("");

  //user information
  const [firstname, setfirstname] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [pataientEmail, setPataientEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [citizenship, setCitizenship] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [errors, SetErrors] = useState(null);
  const [passport, setPassport] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const inputType = isVisible ? "text" : "password";

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  const inputType1 = isVisible1 ? "text" : "password";

  const handlePhone = (newPhone) => {
    setPhone(newPhone);
  };

  const handaleRegister = async () => {
    if (password !== confirmPassword) {
      SetError("Your Confirm Password Didn't Match");
      setLoader(false);
    } else {
      const formData = new FormData();
      formData.append("firstName", firstname);
      formData.append("lastName", lastName);
      formData.append("dob", dob);
      formData.append("email", pataientEmail);
      formData.append("phone", phone);
      formData.append("gender", gender);
      formData.append("citizenship", citizenship);
      formData.append("passport", passport);
      if (yes) {
        formData.append("country", "Thailand");
      } else {
        formData.append("country", country);
      }
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);

      try {
        setLoader(true);
        SetErrors(null);

        const res = await fetch(
          "https://api.discoverinternationalmedicalservice.com/api/register",
          {
            method: "POST",
            body: formData,
          }
        );
        setLoader(false);

        if (res?.status !== 200) {
          toast.error("Something went wrong", {
            position: "top-center",
            style: {
              padding: "20px",
              border: "1px solid #ccc",
              color: "red",
            },
          });
          SetErrors({
            status: 500,
          });
          //  return;
        }
        const jsonData = await res.json();

        if (jsonData?.err) {
          toast.error("Something went wrong", {
            position: "top-center",
            style: {
              padding: "20px",
              border: "1px solid #ccc",
              color: "red",
            },
          });
          SetErrors(jsonData.err);
          return;
        }

        if (jsonData?.data?.token) {
          toast.success("Your Registration is Successfull", {
            position: "top-center",
            style: {
              padding: "20px",
              border: "1px solid #ccc",
              color: "green",
            },
            duration: 5000,
          });
          navigate.push("/login");
        }
      } catch (error) {}
    }
  };

  return (
    <section className="md:p-10 my-5 md:my-10 md:container mx-5 md:mx-auto">
      <div className="p-5 md:p-10 shadow shadow-blue rounded">
        {/* first-card */}
        <section className="">
          <h5 className="mb-4 text-xl md:text-3xl text-semibold font-semibold text-blue">
            Register for premium health care services!
          </h5>
          <Divider />
          <div className="grid md:grid-cols-2 gap-4 mt-5 md:mt-10">
            <div>
              <p className="mb-2.5">Enter First Name</p>
              <TextField
                onChange={(e) => setfirstname(e.target.value)}
                fullWidth
                placeholder="Required"
              />
            </div>
            <div>
              <div>
                <p className="mb-2.5">Enter Last Name</p>
                <TextField
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  placeholder="Required"
                />
              </div>
            </div>

            <FormControl fullWidth>
              <p className="mb-2.5">Select Citizenship(Required)</p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={citizenship}
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
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <div>
              <p className="mb-2.5">Enter Email(Required)</p>{" "}
              {errors?.email && <p className="text-red">{errors?.email[0]}</p>}
              <TextField
                fullWidth
                placeholder="Required"
                type="email"
                onChange={(e) => setPataientEmail(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-2.5">Enter Phone Number(Required)</p>
              <MuiTelInput
                defaultCountry="TH"
                value={phone}
                onChange={handlePhone}
                fullWidth
              />
            </div>
            <div>
              <p className="mb-2.5">Enter Date of Birth(Required)</p>
              <TextField
                fullWidth
                type="date"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-2.5">Passport Copy(Optional)</p>
              <TextField
                fullWidth
                type="file"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* second card  */}
        <section>
          <h5 className="mt-5">Are you in Thailand?</h5>
          <div className="flex gap-2 mt-2.5 mb-5">
            <button
              className={`px-5 py-2 rounded ${
                yes === true && "bg-blue text-white"
              }`}
              onClick={() => setYes(true)}
            >
              Yes
            </button>
            <button
              className={`px-5 py-2 rounded ${
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
                value={country}
                className="mb-4"
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
        </section>

        {/* password card  */}
        <section className="md:grid md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2.5">Enter Password</p>
            <div className=" flex relative">
              <TextField
                type={inputType}
                fullWidth
                placeholder="Required"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={toggleVisibility}>
                <AiFillEye className="text-3xl text-blue !absolute right-4 top-[13px]" />
              </button>
            </div>
          </div>
          <div>
            <p className="mt-3 md:mt-0 mb-2.5">Confirm Password</p>
            <div className="mt-3 md:mt-0  flex relative">
              <TextField
                type={inputType1}
                fullWidth
                placeholder="Required"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={toggleVisibility1}>
                <AiFillEye className="text-3xl text-blue !absolute right-4 top-[13px]" />
              </button>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-red font-semibold">{error}</p>
          </div>
        </section>
        <div className="flex justify-center">
          <button
            className={`btn_primary ${
              loader ||
              firstname === "" ||
              lastName === "" ||
              citizenship === "" ||
              gender === "" ||
              pataientEmail === "" ||
              phone === "" ||
              dob === ""
                ? "bg-white text-blue border"
                : "text-white bg-blue border"
            }`}
            disabled={
              loader ||
              firstname === "" ||
              lastName === "" ||
              citizenship === "" ||
              gender === "" ||
              pataientEmail === "" ||
              phone === "" ||
              dob === ""
            }
            onClick={handaleRegister}
          >
            {loader ? (
              <Loader className="animate-spin" stroke="black" color="black" />
            ) : (
              "Register"
            )}
          </button>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="underline text-blue">
            Please Login
          </Link>{" "}
        </p>
      </div>
    </section>
  );
}
