"use client";

import React, { useEffect, useState } from "react";
import { Divider, TextField } from "@mui/material";
import useAuth from "@/helpers/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import { comapanyMailBody } from "@/helpers/mail/mailbody";
import Loader from "@/components/ui/loader";
import { formatKeys } from "@/helpers/objectKeyFormat";

const TeleMedicine = () => {
    const { auth } = useAuth();
    const [loader, setLoader] = useState();
    const navigate = useRouter();

    const [fullName, setFullName] = useState("");
    const [hnNum, setHnNum] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [passportId, setPassportId] = useState("");
    const [nationality, setNationality] = useState("");
    const [residence, setResidence] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [preferredDoctor, setPreferredDoctor] = useState("");
    const [purposeAppoinment, setPurposeAppoinment] = useState("");
    const [investigationDocument, setInvestigationDocument] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [epaymentlink, setEpaymentlink] = useState("");
    const [interpreter, setInterpreter] = useState("");
    const [specificConcern, setSpecificConcern] = useState("");

    useEffect(() => {
        if (auth) {
            setFullName(`${auth?.firstName} ${auth?.lastName}` || "");
            setBirthDate(auth?.dob || "");
            setResidence(auth?.citizenship || "");
            setContactDetails(auth?.phone || "");
        }
    }, [auth]);

    const handaleAddteleMedicine = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData();
        const fields = {
            fullName,
            hnNum,
            birthDate,
            passportId,
            nationality,
            residence,
            preferredDate,
            preferredDoctor,
            purposeAppointment: purposeAppoinment,
            investigationDocument,
            contactDetails,
            paymentType,
            epaymentlink,
            interpreter,
            specificConcern,
        };

        Object.entries(fields).forEach(([key, value]) =>
            formData.append(key, value),
        );

        setLoader(true);
        const response = await fetch(
            "https://api.discoverinternationalmedicalservice.com/api/add/tele/medicine",
            {
                method: "POST",
                body: formData,
            },
        );
        setLoader(false);

        const jsonresponse = await response.json();

        if (jsonresponse.status === 200) {
            setLoader(false);

            const doc_ment = jsonresponse?.investigationDocument
                ? jsonresponse?.investigationDocument
                : "link are not found";
            setLoader(true);
            const send_mail_on_admin = await sendEmails(
                admin_mails,
                `Tele Medicine`,
                comapanyMailBody(
                    formatKeys({ ...fields, investigationDocument: doc_ment }),
                    "Tele Medicine",
                ),
            );
            const send_client_email = await sendEmails(
                auth?.email,
                `Tele Medicine`,
                comapanyMailBody(
                    formatKeys({ ...fields, investigationDocument: doc_ment }),
                    "Tele Medicine",
                ),
            );
            setLoader(false);

            if (send_mail_on_admin?.messageId && send_client_email?.messageId) {
                toast.success(
                    "We have received your request. Our representative will reach you shortly!",
                    {
                        position: "top-center",
                        style: { borderRadius: "20px" },
                        duration: 5000,
                    },
                );
                form.reset();
                navigate.push("/");
            }
        } else {
            toast.error("Something went wrong");
            setLoader(false);
        }
    };

    return (
        <>
            <section className='md:container lg:w-1/2 md:mx-auto md:my-20 shadow rounded-xl'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-blue my-5 text-center'>
                    Tele Medicine
                </h1>
                <form
                    onSubmit={handaleAddteleMedicine}
                    className='px-5 md:px-10 lg:px-16 pb-24'
                >
                    <h2 className='font-semibold mb-2.5 text-blue'>
                        *Patient Details
                    </h2>
                    <Divider className='my-2.5' />
                    <section className='grid md:grid-cols-2 gap-2.5'>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Enter Full Name
                            </p>
                            <TextField
                                type='text'
                                value={fullName}
                                placeholder='Same As In Passport'
                                onChange={(e) => setFullName(e.target.value)}
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Hospital No.(HN)
                            </p>
                            <TextField
                                placeholder='Old Patient'
                                onChange={(e) => setHnNum(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Date of Birth
                            </p>
                            <TextField
                                type='date'
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Passport / Id No
                            </p>
                            <TextField
                                type=''
                                placeholder='Enter Passport Number'
                                onChange={(e) => setPassportId(e.target.value)}
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Nationality
                            </p>
                            <TextField
                                placeholder='Enter Your Nationality'
                                onChange={(e) => setNationality(e.target.value)}
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Country of Residence
                            </p>
                            <TextField
                                placeholder='Enter Your Residence'
                                onChange={(e) => setResidence(e.target.value)}
                                fullWidth
                                required
                                value={residence}
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Contact Details of Patient
                            </p>
                            <TextField
                                placeholder='Mobile Number / Email Address'
                                onChange={(e) =>
                                    setContactDetails(e.target.value)
                                }
                                fullWidth
                                required
                                value={contactDetails}
                            />
                        </div>
                    </section>
                    <h1 className='uppercase font-semibold text-blue mt-5 mb-2.5 md:mt-10'>
                        *appointment details
                    </h1>
                    <Divider className='my-2.5' />
                    <section className='grid md:grid-cols-2 gap-2.5'>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Preferred Appoinment Date
                            </p>
                            <TextField
                                type='date'
                                onChange={(e) =>
                                    setPreferredDate(e.target.value)
                                }
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Preferred Doctor
                            </p>
                            <TextField
                                placeholder='Doctor Name'
                                onChange={(e) =>
                                    setPreferredDoctor(e.target.value)
                                }
                                fullWidth
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Purpose of Appoinment
                            </p>
                            <TextField
                                placeholder='Chief Complaint'
                                onChange={(e) =>
                                    setPurposeAppoinment(e.target.value)
                                }
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                {" "}
                                Availlable Investigation Document
                            </p>
                            <TextField
                                type='file'
                                onChange={(e) =>
                                    setInvestigationDocument(e.target.files[0])
                                }
                                fullWidth
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Request for Interpreter
                            </p>
                            <TextField
                                placeholder='Specify The Language'
                                onChange={(e) => setInterpreter(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Payment Type
                            </p>
                            <TextField
                                placeholder='E-Payment / Credit card / Bank transfer'
                                onChange={(e) => setPaymentType(e.target.value)}
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Email for E-payment Link
                            </p>
                            <TextField
                                type='email'
                                placeholder='Enter Email'
                                onChange={(e) =>
                                    setEpaymentlink(e.target.value)
                                }
                                fullWidth
                            />
                        </div>
                        <div>
                            <p className='mb-2 font-semibold text-sm'>
                                Specific Concern
                            </p>
                            <TextField
                                placeholder='Interest'
                                onChange={(e) =>
                                    setSpecificConcern(e.target.value)
                                }
                                fullWidth
                            />
                        </div>
                    </section>
                    <button
                        disabled={loader}
                        type='submit'
                        className={`${
                            loader
                                ? "bg-white text-black border"
                                : "bg-blue text-white border-blue"
                        } btn_primary`}
                    >
                        {loader ? (
                            <Loader
                                className='animate-spin'
                                stroke={loader ? "black" : "white"}
                                fill={loader ? "black" : "white"}
                            />
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </section>
        </>
    );
};

export default TeleMedicine;
