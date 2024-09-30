"use client";

import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import Loader from "../ui/loader";
import toast from "react-hot-toast";
import useAuth from "@/helpers/hooks/useAuth";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import { comapanyMailBody } from "@/helpers/mail/mailbody";
import { formatKeys } from "@/helpers/objectKeyFormat";

const AirPickup = () => {
    const { auth } = useAuth();
    const [loader, setLoader] = useState();
    const [appointmentfile, setAppointmentfile] = useState("");
    const [airTicketFile, setAirTicketFile] = useState("");
    const [passenger, setPassenger] = useState("");

    const orderAirPickup = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();

        const fields = {
            appointment: appointmentfile,
            air_ticket: airTicketFile,
            passenger: passenger,
        };
        Object.keys(fields).forEach((key) => formData.append(key, fields[key]));

        setLoader(true);
        const response = await fetch(
            "https://api.discoverinternationalmedicalservice.com/api/add/air/pickup",
            {
                method: "POST",
                body: formData,
            },
        );

        setLoader(false);
        const resjson = await response.json();

        if (resjson.status === 200) {
            const uploadImage = resjson?.appointment
                ? resjson?.appointment
                : "No file found";
            const uploadImage2 = resjson?.air_ticket
                ? resjson?.air_ticket
                : "No file found";

            setLoader(true);
            const send_mails = await sendEmails(
                admin_mails,
                `Airport Transfer`,
                comapanyMailBody(
                    formatKeys({
                        name: `${auth?.firstName} ${auth?.lastName}`,
                        email: auth?.email,
                        ...fields,
                        air_ticket: uploadImage,
                        appointment: uploadImage2,
                    }),
                    "Airport Transfer",
                ),
            );
            setLoader(false);

            setLoader(true);
            const send_mail_client = await sendEmails(
                auth?.email,
                `Airport Transfer`,
                comapanyMailBody(
                    formatKeys({
                        name: `${auth?.firstName} ${auth?.lastName}`,
                        email: auth?.email,
                        ...fields,
                        air_ticket: uploadImage,
                        appointment: uploadImage,
                    }),
                    "Airport Transfer",
                ),
            );
            setLoader(false);

            if (send_mails.messageId && send_mail_client.messageId) {
                toast.success(
                    "We have received your request. Our representative will reach you shortly!",
                    {
                        position: "top-center",
                        style: { borderRadius: "20px" },
                        duration: 5000,
                    },
                );
                form.reset();
                window.location.reload();
            }
        } else {
            toast.error("Airport Transfer request failed!");
        }
    };
    return (
        <div>
            <form
                onSubmit={orderAirPickup}
                className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
            >
                <div className='mb-2 flex flex-col gap-6'>
                    <div className='mt-2'>
                        <p className='mb-2 font-semibold text-sm'>
                            Patient Appointment File
                        </p>
                        <TextField
                            type='file'
                            onChange={(e) =>
                                setAppointmentfile(e.target.files[0])
                            }
                            fullWidth
                            required
                        />
                    </div>
                    <div className='mt-2'>
                        <p className='mb-2 font-semibold text-sm'>
                            Air Ticket Copy
                        </p>
                        <TextField
                            type='file'
                            onChange={(e) =>
                                setAirTicketFile(e.target.files[0])
                            }
                            fullWidth
                            required
                        />
                    </div>
                    <div className='mt-2'>
                        <p className='mb-2 font-semibold text-sm'>
                            Number of Passenger
                        </p>
                        <TextField
                            type='number'
                            onChange={(e) => setPassenger(e.target.value)}
                            fullWidth
                            required
                        />
                    </div>
                </div>
                <button
                    disabled={loader}
                    type='submit'
                    className={`btn_primary ${
                        loader
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

export default AirPickup;
