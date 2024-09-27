'use client'

import { admin_mails } from "@/constant";
import useAuth from "@/helpers/hooks/useAuth";
import { comapanyMailBody, mailBody } from "@/helpers/mail/mailbody";
import { sendEmails } from "@/helpers/mail/sendMail";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Loader from "../ui/loader";
import toast from "react-hot-toast";

const Arrival = () => {
    const { auth } = useAuth();
    const [loader, setLoader] = useState(false);
    const [errors, SetErrors] = useState(null);
    const [formData, setFormData] = useState({
        "case summary": "",
        "admission date": "",
        "message": "",
        "passport": "",
    });

       
    const handleSubmit = async () => {
        try {
           

            setLoader(true);
            SetErrors(null);
            const response_admin = await sendEmails(
                admin_mails,
                `Admission on arrival - ${auth?.email}`,
                comapanyMailBody({ name: `${auth?.firstName} ${auth?.lastName}`, email: auth?.email ,...formData},"Admission on arrival"),
            );
            setLoader(false);

            // send email on user
            setLoader(true);
            const response_sender = await sendEmails(
                auth?.email,
                `Admission on arrival`,
                comapanyMailBody({name: `${auth?.firstName} ${auth?.lastName}`, email: auth?.email ,...formData},"Admission on arrival"),
            );

            setLoader(false);

            if (response_sender?.messageId && response_admin?.messageId) {
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
                    "passport": "",
                    "case summary": "",
                    "admission date": "",
                    message: "",
                });
    
                window.location.reload();
            } else {
                toast.error("Submission failed");
            }

           
        } catch (error) {
        }
    };
    return (
        <div>
            <div className='flex flex-col gap-4'>
                {/* <div>
                    <TextField
                        id='outlined-multiline-flexible'
                        label='Passport Copy'
                        value={formData["passport copy"]}
                        placeholder='Passport Copy'
                        fullWidth
                        required
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                "passport copy": e.target.value,
                            })
                        }
                    />
                   
                </div> */}
                <div>
                    <TextField
                        id='outlined-multiline-flexible 1'
                        label='Case Summary'
                        required
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

                </div>
                <div>
                    <label htmlFor="datte">
                         Date
                    </label>
                    <TextField
                        id='outlined-multiline-flexible 2'
                        // label='Admission Date'
                        value={formData["admission date"]}
                        placeholder='Admission Date'
                        fullWidth
                        required
                        type="date"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                "admission date": e.target.value,
                            })
                        }
                    />

                </div>
                <div>
                    {/* <label htmlFor="message">
                        Message
                    </label> */}
                    <TextField
                        id='outlined-multiline-flexible 3'
                        label='Message'
                        value={formData["message"]}
                        placeholder='Message'
                        fullWidth
                        multiline
                        rows={4}
                        required
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />

                    
                </div>
                <div>
                    <label htmlFor="document">
                        Passport
                    </label>
                    <TextField
                        id='outlined-multiline-flexible 3'
                        // label='Document'
                        value={formData["passport"]}
                        placeholder='Document'
                        fullWidth
                        type="file"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                passport: e.target.value,
                            })
                        }
                    />

                    
                </div>

                <button
                    type='button'
                    disabled={loader  || !formData["case summary"] || !formData["admission date"]}
                    className={`btn_primary ${loader || !formData["message"] || !formData["passport copy"] || !formData["case summary"] || !formData["admission date"] ? "bg-white text-black border" : "bg-blue text-white"}`}
                    onClick={handleSubmit}
                >
                    {loader ? <Loader className='animate-spin' fill='black' stroke='black' /> : "Submit"}
                </button>
            </div>
        </div>
    );
};

export default Arrival;
