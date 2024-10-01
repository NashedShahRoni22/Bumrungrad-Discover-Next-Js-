"use client";

import React, { useState } from "react";

import { TextField } from "@mui/material";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import useAuth from "@/helpers/hooks/useAuth";
import { comapanyMailBody } from "@/helpers/mail/mailbody";
import Loader from "../ui/loader";
import { formatKeys } from "@/helpers/objectKeyFormat";

const AirAmbulanceForm = () => {
    const { auth } = useAuth();
    const [loader, setLoader] = useState();

    const [date, setDate] = useState("");
    const [passport, setPassport] = useState("");
    const [caseSummary, setCaseSummary] = useState("");
    const [briflyDiscusion, setbriflyDiscusion] = useState("");

    const addPatient = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const fields = {
            entry_date: date,
            passport_copy: passport,
            summary: caseSummary,
            description: briflyDiscusion,
        };

        Object.keys(fields).forEach((key) => formData.append(key, fields[key]));

        try {
            setLoader(true);
            const response = await fetch(
                "https://api.discoverinternationalmedicalservice.com/api/add/air/ambulance",
                {
                    method: "POST",
                    body: formData,
                },
            );
            setLoader(false);

            const data = await response.json();

            if (data.status == 200) {
                setLoader(true);
                const uploadImage = data?.passport_copy
                    ? data?.passport_copy
                    : "No file found";
                setLoader(false);

                setLoader(true);
                const send_mails = await sendEmails(
                    admin_mails,
                    `Air Ambulance Request`,
                    comapanyMailBody(
                        formatKeys({
                            name: `${auth?.firstName} ${auth?.lastName}`,
                            email: auth?.email,
                            date: date,
                            passport_copy: uploadImage,
                            summary: caseSummary,
                            description: briflyDiscusion,
                        }),
                        "Air Ambulance Request",
                    ),
                );
                setLoader(false);

                setLoader(true);
                const send_mail_client = await sendEmails(
                    auth?.email,
                    `Air Ambulance Request`,
                    comapanyMailBody(
                        formatKeys({
                            name: `${auth?.firstName} ${auth?.lastName}`,
                            email: auth?.email,
                            date: date,
                            passport_copy: uploadImage,
                            summary: caseSummary,
                            description: briflyDiscusion,
                        }),
                        "Air Ambulance Request",
                    ),
                );

                setLoader(false);

                if (send_mails?.messageId && send_mail_client?.messageId) {
                    toast.success(
                        "We have received your request. Our representative will reach you shortly!",
                        {
                            position: "top-center",
                            style: { borderRadius: "20px" },
                            duration: 5000,
                        },
                    );
                    window.location.reload();
                    form.reset();
                } else {
                    toast.error(
                        "Something went wrong. Mail not sent. Please try again later.",
                    );
                }
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setLoader(false);
            console.error(error);
        }
    };
    return (
        <div>
            <form
                onSubmit={addPatient}
                className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
            >
                <div className='mb-2 flex flex-col gap-6'>
                    <div className=''>
                        <p className='mb-2 font-semibold text-sm'>Enter Date</p>
                        <TextField
                            type='date'
                            onChange={(e) => setDate(e.target.value)}
                            fullWidth
                            required
                        />
                    </div>
                    <div className='mt-1'>
                        <p className='mb-1 font-semibold text-sm'>
                            Attach Your Passport Copy
                        </p>
                        <TextField
                            type='file'
                            onChange={(e) => setPassport(e.target.files[0])}
                            fullWidth
                            required
                        />
                    </div>
                    <div className='mt-1'>
                        <p className='mb-2 font-semibold text-sm'>
                            Upload Case Summary
                        </p>
                        <TextField
                            multiline
                            onChange={(e) => setCaseSummary(e.target.value)}
                            rows={2}
                            fullWidth
                        />
                    </div>
                    <div className='mt-1'>
                        <p className='mb-2 font-semibold text-sm'>
                            Write In Brifley
                        </p>
                        <TextField
                            multiline
                            onChange={(e) => setbriflyDiscusion(e.target.value)}
                            rows={2}
                            fullWidth
                        />
                    </div>
                </div>
                <button
                    disabled={
                        loader ||
                        !date ||
                        !passport ||
                        !caseSummary ||
                        !briflyDiscusion
                    }
                    type='submit'
                    className={`btn_primary ${
                        loader ||
                        !date ||
                        !passport ||
                        !caseSummary ||
                        !briflyDiscusion
                            ? "bg-white text-black border"
                            : "bg-blue text-white"
                    }`}
                >
                    {loader ? (
                        <Loader
                            className='animate-spin'
                            stroke='black'
                            fill='black'
                        />
                    ) : (
                        "Submit"
                    )}
                </button>
            </form>
        </div>
    );
};

export default AirAmbulanceForm;
