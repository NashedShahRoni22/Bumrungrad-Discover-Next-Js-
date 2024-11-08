"use client";

import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import loginimg from "@/public/assets/login image.png";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useAuth from "@/helpers/hooks/useAuth";
import toast from "react-hot-toast";
import { userTokenSet } from "@/helpers/lib/usertoken";
import Loader from "@/components/ui/loader";

export default function Login() {
  const { setIsAdd } = useAuth();
  const navigate = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputType = isVisible ? "text" : "password";

  const handleLogin = async () => {
    setLoader(true);
    const { email, password } = formData;
    const loginData = new FormData();
    loginData.append("email", email);
    loginData.append("password", password);

    try {
      const response = await fetch(
        "https://api.discoverinternationalmedicalservice.com/api/login",
        {
          method: "POST",
          body: loginData,
        }
      );
      const data = await response.json();
      setLoader(false);

      if (data.status === 200) {
        setIsAdd(true);
        localStorage.setItem("Access_Token", data?.msg?.token);
        localStorage.setItem(
          "User_Details",
          JSON.stringify(data?.msg?.user_details)
        );
        const setTokenOnServer = await userTokenSet(data?.msg?.token);

        if (setTokenOnServer.success == "success") {
          toast.success("Login Successful ✌️", {
            duration: 5000,
            position: "top-center",
            style: {
              padding: "20px",
              border: "1px solid #ccc",
              color: "green",
            },
          });
          setTimeout(() => {
            navigate.push("/");
          }, 1500);
        }

        if (setTokenOnServer.error == "error") {
          toast.error("Something went wrong 😱😱", {
            duration: 5000,
            style: {
              padding: "20px",
              color: "red",
            },
          });
        }
      } else {
        toast.error("Credential didn't match with our record! 😱😱", {
          duration: 5000,
          style: {
            padding: "20px",
            color: "red",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again. 😱😱", {
        duration: 5000,
        style: {
          padding: "20px",
          color: "red",
        },
      });
      setLoader(false);
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <section className="mx-5 md:container md:mx-auto flex items-center">
      <div className="hidden md:block md:w-1/2">
        <Image height={300} width={1000} src={loginimg} alt="Login Image" />
      </div>
      <div className="p-5 md:p-10 md:w-1/2 my-5 md:my-10 mx-5 md:container md:mx-auto shadow shadow-blue rounded relative">
        <h5 className="text-xl md:text-3xl font-semibold text-blue mb-4">
          Hello Dear!
        </h5>
        <Divider />
        <div className="mt-4">
          <TextField
            fullWidth
            label="Enter Email"
            name="email"
            placeholder="Required"
            onChange={handleInputChange}
            value={formData.email}
            type="email"
          />
        </div>
        <div className="mt-5 flex relative">
          <TextField
            fullWidth
            label="Enter Password"
            name="password"
            placeholder="Required"
            onChange={handleInputChange}
            value={formData.password}
            type={inputType}
          />
          <button onClick={toggleVisibility}>
            <AiFillEye className="text-3xl text-blue absolute right-4 top-[13px]" />
          </button>
        </div>
        <div className="mt-5">
          <button
            className={`btn_primary ${
              !isFormValid || loader
                ? "bg-white text-blue border"
                : "bg-blue text-white"
            }`}
            disabled={!isFormValid || loader}
            onClick={handleLogin}
          >
            {loader ? <Loader className="animate-spin" /> : "Login"}
          </button>
        </div>
        <p className="mt-5">
          New here?{" "}
          <Link href="/register" className="underline text-blue">
            Please create an account
          </Link>
        </p>
      </div>
    </section>
  );
}
