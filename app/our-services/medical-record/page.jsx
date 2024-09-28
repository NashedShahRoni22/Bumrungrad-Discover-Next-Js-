"use client";

import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import useAuth from "@/helpers/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import { comapanyMailBody } from "@/helpers/mail/mailbody";
import Loader from "@/components/ui/loader";
import { formatKeys } from "@/helpers/objectKeyFormat";


const MedicalRecords = () => {
  const { auth } = useAuth();
  const userDetails = auth;
  const [loader, setLoader] = useState();
  const [passport, setPassport] = useState("");
  const [name, setName] = useState('');
  const [hnNum, setHnNum] = useState("");
  const [caseSummary, setCaseSummary] = useState("");
  const navigate = useRouter();

  const addPatient = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();

    const fields = {
      passport,
      name,
      hnNum,
      caseSummary,
    };

    Object.entries(fields).forEach(([key, value]) => formData.append(key, value));

    try {
      setLoader(true);
      const response = await fetch(
        "https://api.discoverinternationalmedicalservice.com/api/add/medical/report",
        {
          method: "POST",
          body: formData,
        }
      );
      setLoader(false);

      const data = await response.json();

      if (data.status == 200) {
        // toast.success("Medical record request sent!", {
        //   position: "top-center",
        //   duration: 4000,
        //   style: {
        //     color: "green",
        //   },
        // });

        const uploadDoc = data?.passport ?  data?.passport : "Link not found"; ;
        
        setLoader(true);
        const send_admin_mails = await sendEmails(admin_mails,`Medical Records - ${auth?.email}`, comapanyMailBody(formatKeys({name: auth?.firstName, email: auth?.email, hnNum: hnNum, case_summary: caseSummary, passport: uploadDoc}), "Medical Records"));
        setLoader(false);

        setLoader(true);
        const send_client_mails = await sendEmails(auth?.email,`Medical Records`, comapanyMailBody(formatKeys({name: auth?.firstName, email: auth?.email, hnNum: hnNum, case_summary: caseSummary, passport: uploadDoc}), "Medical Records"));
        setLoader(false);

        if (send_admin_mails.messageId && send_client_mails.messageId) {
          toast.success(
          "Medical record request sent",{
            position: "top-center",
            duration: 4000,
            style: {
              color: "green",
            },
          }
        );
        form.reset();
         navigate.push("/");
        setLoader(false);
        }else{
          toast.error("Something went wrong - Mail not sent", {
            position: "top-center",
            duration: 4000,
            style: {
              color: "red",
            },
          })
        }
      } else {
        setLoader(false);
        toast.error("Something went wrong", {
          position: "top-center",
          duration: 4000,
          style: {
            color: "red",
          },
        });
      }
    } catch (error) {
      setLoader(false);
      console.error(error?.message);
    }
  };

  useEffect(()=>{
    if(userDetails){
      setName(`${userDetails?.firstName} ${userDetails?.lastName}` || "")
    }
  },[userDetails])
  return (
    <>
      <div className="md:my-10 md:p-10 mx-5 md:container md:mx-auto   lg:w-1/2  shadow-xl rounded-xl p-5 ">
        <h1 className="text-center capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          Medical Records
        </h1>
        <form
          onSubmit={addPatient}
          className="mt-3 mb-2 w-full"
        >
          <div className="mb-2 flex flex-col">
            <div>
              <p className="mb-2 font-semibold text-sm">
                {" "}
                <span className="text-red text-lg">*</span>Enter Your Name
              </p>
              <TextField
                onChange={(e) => setName(e.target.value)}
                fullWidth
                value={name}
              />
            </div>
            <div className="mt-2">
              <p className="mt-2 font-semibold text-sm">
                <span className="text-red text-lg">*</span> Attach Your Passport
                Copy
              </p>
              <TextField
                type="file"
                onChange={(e) => setPassport(e.target.files[0])}
                fullWidth
                required
              />
            </div>
            <div>
              <p className="mt-2 font-semibold text-sm">
                {" "}
                <span className="text-red text-lg">*</span> HN Number
              </p>
              <TextField onChange={(e) => setHnNum(e.target.value)} fullWidth />
            </div>
            <div>
              <p className="mt-2 font-semibold text-sm">
                {" "}
                <span className="text-red text-lg">*</span> Report Details
              </p>
              <TextField
                multiline
                onChange={(e) => setCaseSummary(e.target.value)}
                rows={4}
                fullWidth
              />
            </div>
          </div>
          <button
            disabled={loader || !name || !passport || !hnNum || !caseSummary}
            type="submit"
            className={`${loader || !name || !passport || !hnNum || !caseSummary ? "bg-white text-black border" : "bg-blue text-white"} btn_primary`}
          >
           {
            loader ? <Loader className="animate-spin" stroke={loader ? "black" : "white"} fill={loader ? "black" : "white"} /> : "Submit"
           }
          </button>
        </form>
      </div>
    </>
  );
};

export default MedicalRecords;
