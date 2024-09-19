'use client'

import { admin_mails } from "@/constant";
import { mailBody } from "@/helpers/mail/mailbody";
import { sendEmails } from "@/helpers/mail/sendMail";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const Arrival = () => {
    const [loader, setLoader] = useState(false);
    const [errors, SetErrors] = useState(null);
    const [formData, setFormData] = useState({
        "passport copy": "",
        "case summary": "",
        "admission date": "",
        "message": "",
    });

        // filed validation
        const handleValidation = (fields) => {
            let isValid = true;
            Object.keys(fields).forEach((key) => {
                if (!fields[key]) {
                    SetErrors((prev) => ({
                        ...prev,
                        [key]: "This field is required",
                    }));
                    isValid = false;
                }
            });
            return isValid;
        };

    const handleSubmit = async () => {
        try {
            if (!handleValidation(formData)) {
                return;
            }
            setLoader(true);
            SetErrors(null);
            const response_admin = await sendEmails(
                admin_mails,
                `Admission on arrival - ${formData.email}`,
                mailBody(formData),
            );
            setLoader(false);

            if (response_admin?.success == false) {
                toast.error("Something went wrong", {
                    position: "top-center",
                    style: {
                        padding: "16px",
                        border: "1px solid #ccc",
                        color: "red",
                    },
                    duration: 3000,
                    icon: "😱",
                });
            }

            toast.success("Admission on arrival sent successfully 🚑", {
                position: "top-center",
                style: {
                    padding: "16px",
                    border: "1px solid #ccc",
                    color: "green",
                },
                duration: 3000,
                icon: "👌👌",
            });

            // send email on user
            setLoader(true);
            const response_sender = await sendEmails(
                [formData.email],
                `Admission on arrival`,
                mailBody(formData),
            );

            setLoader(false);
            if (response_sender?.success == false) {
                toast.error("Something went wrong getting email", {
                    position: "top-center",
                    style: {
                        padding: "16px",
                        border: "1px solid #ccc",
                        color: "red",
                    },
                    duration: 3000,
                    icon: "😱",
                });
            }

            toast.success("You will receive an email 🚑", {
                position: "top-center",
                style: {
                    padding: "16px",
                    border: "1px solid #ccc",
                    color: "green",
                },
                duration: 3000,
                icon: "👌👌",
            });

            setFormData({
                "passport copy": "",
                "case summary": "",
                "admission date": "",
                message: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <div>
                    <TextField
                        id='outlined-multiline-flexible'
                        label='Passport Copy'
                        value={formData["passport copy"]}
                        placeholder='Passport Copy'
                        fullWidth
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                "passport copy": e.target.value,
                            })
                        }
                    />
                    {errors && errors["passport copy"] && (
                        <p className='text-red text-sm'>
                            {errors["passport copy"]}
                        </p>
                    )}
                </div>
                <div>
                    <TextField
                        id='outlined-multiline-flexible 1'
                        label='Case Summary'
                        value={formData["case summary"]}
                        placeholder='Case Summary'
                        fullWidth
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                "case summary": e.target.value,
                            })
                        }
                    />

                    {errors && errors["case summary"] && (
                        <p className='text-red text-sm'>
                            {errors["case summary"]}
                        </p>
                    )}
                </div>
                <div>
                    <TextField
                        id='outlined-multiline-flexible 2'
                        label='Admission Date'
                        value={formData["admission date"]}
                        placeholder='Admission Date'
                        fullWidth
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                "admission date": e.target.value,
                            })
                        }
                    />

                    {errors && errors["admission date"] && (
                        <p className='text-red text-sm'>
                            {errors["admission date"]}
                        </p>
                    )}
                </div>
                <div>
                    <TextField
                        id='outlined-multiline-flexible 3'
                        label='Message'
                        value={formData["message"]}
                        placeholder='Message'
                        fullWidth
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />

                    {errors && errors["message"] && (
                        <p className='text-red text-sm'>{errors["message"]}</p>
                    )}
                </div>

                <button
                    type='button'
                    disabled={loader}
                    className='btn btn-primary'
                    onClick={handleSubmit}
                >
                    {loader ? "Submit..." : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default Arrival;
