"use client";

import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MuiTelInput } from "mui-tel-input";
import whatsapp from "@/public/assets/Bumrungrad  Hospital_whatsapp.png";
import { useRouter } from "next/navigation";
import useAuth from "@/helpers/hooks/useAuth";
import Image from "next/image";
import toast from "react-hot-toast";
import Loader from "@/components/ui/loader";
import { admin_mails } from "@/constant";
import { sendEmails } from "@/helpers/mail/sendMail";
import { mailBodyMedicine } from "@/helpers/mail/mailbody";

const OrderMedicine = () => {
    const { auth } = useAuth();
    const [prescriptionState, setPrescriptionState] = useState(1);
    //loader
    const [loader, setLoader] = useState();

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const handleChange = (newValue) => {
        setNumber(newValue);
    };
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [medicine, setMedicin] = useState("");
    const [quantity, setQuantity] = useState("");
    const [medicArr, setMedicArr] = useState([]);
    const [prescriptionImg, setprescriptionImg] = useState("");
    const navigate = useRouter();

    useEffect(() => {
        if (auth) {
            setName(`${auth?.firstName} ${auth?.lastName}` || "");
            setEmail(auth?.email || "");
            setNumber(auth?.phone || "");
        }
    }, [auth]);

    //add Medicine
    const handleAddMedic = () => {
        const medicineQuantityData = [medicine, quantity];
        setMedicArr([...medicArr, medicineQuantityData]);
    };

    //Delete Medicine
    const deleteOrderMedicine = (i) => {
        const newMedicineQuantity = medicArr.filter((row) => row !== i);
        setMedicArr(newMedicineQuantity);
    };

    const orderMedicine = async () => {
        const formData = new FormData();

        const fields = {
            name,
            address,
            phoneNumber: number,
            email,
            prescription: prescriptionImg,
            medicines: JSON.stringify(medicArr),
        };

        Object.keys(fields).forEach((key) => formData.append(key, fields[key]));

        try {
            setLoader(true);
            const response = await fetch(
                "https://api.discoverinternationalmedicalservice.com/api/add/order/medicine",
                {
                    method: "POST",
                    body: formData,
                },
            );
            setLoader(false);

            const json_data = await response.json();

            if (json_data.status === 200) {
                const uploaded_prescription = json_data?.prescription
                    ? json_data?.prescription
                    : "Link not found";

                setLoader(true);
                const send_mail_admin = await sendEmails(
                    admin_mails,
                    "Medicine Order",
                    mailBodyMedicine(
                        {
                            ...fields,
                            prescription: uploaded_prescription,
                        },
                        "Medicine Order",
                    ),
                );

                const send_mail_client = await sendEmails(
                    auth?.email,
                    "Medicine Order",
                    mailBodyMedicine(
                        {
                            ...fields,
                            prescription: uploaded_prescription,
                        },
                        "Medicine Order",
                    ),
                );
                setLoader(false);

                if (send_mail_admin.messageId && send_mail_client.messageId) {
                    toast.success(
                        "We have received your request. Our representative will reach you shortly!",
                        {
                            position: "top-center",
                            style: { borderRadius: "20px" },
                            duration: 5000,
                        },
                    );

                    navigate.push("/");
                }
            } else {
                toast.error("Something went wrong! Please try again later.", {
                    duration: 3000,
                    position: "top-center",
                    style: {
                        padding: "16px",
                        color: "red",
                        border: "1px solid red",
                    },
                });
            }
        } catch (error) {
            setLoader(false);
            console.error(error?.message);
        }
    };
    return (
        <>
            <div className='mt-5 mb-10 py-5 px-5 md:px-10 md:container md:mx-auto lg:w-1/2 shadow-xl rounded-xl'>
                <h1 className='text-center capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
                    Order Medicine
                </h1>
                <div className='flex flex-col gap-4 mt-5'>
                    <TextField
                        placeholder='Your Name'
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <MuiTelInput
                        label='Your Phone Number'
                        value={number}
                        onChange={handleChange}
                        defaultCountry='TH'
                        className='w-[100%]'
                    />
                    <p className='text-blue text-sm'>
                        *Please Add Your Whatsapp Number
                    </p>
                    <TextField
                        placeholder='Your Email'
                        type='email'
                        value={email}
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label='Your Address'
                        fullWidth
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        multiline
                        rows={3}
                    />
                </div>
                <div className='flex gap-4 mt-4'>
                    <button
                        onClick={() => setPrescriptionState(1)}
                        className={`flex gap-1 px-4 py-2 rounded-full border border-blue ${
                            prescriptionState === 1 && "bg-blue text-white"
                        }`}
                    >
                        Upload
                        <span className='hidden md:block'>
                            Prescription
                        </span>{" "}
                    </button>
                    <button
                        onClick={() => setPrescriptionState(2)}
                        className={`flex gap-1 px-4 py-2 rounded-full border border-blue ${
                            prescriptionState === 2 && "bg-blue text-white"
                        }`}
                    >
                        Write
                        <span className='hidden md:block'>
                            Prescription
                        </span>{" "}
                    </button>
                </div>
                {prescriptionState === 1 ? (
                    <div className='mt-4'>
                        <p className='mb-1 font-semibold text-sm'>
                            Upload Your Prescription
                        </p>
                        <TextField
                            type='file'
                            onChange={(e) =>
                                setprescriptionImg(e.target.files[0])
                            }
                            fullWidth
                        />
                    </div>
                ) : (
                    <div>
                        <div className='flex flex-col gap-y-4 md:flex-row md:gap-3 md:items-center mt-5'>
                            <div>
                                <TextField
                                    label='Medicine Name'
                                    fullWidth
                                    onChange={(e) => setMedicin(e.target.value)}
                                />
                            </div>
                            <div>
                                <TextField
                                    type='number'
                                    label='Enter Quantity'
                                    fullWidth
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <Button
                                    style={{ padding: "14px 0px" }}
                                    onClick={handleAddMedic}
                                    disabled={
                                        medicine === "" || quantity === ""
                                    }
                                    variant='contained'
                                >
                                    Add
                                </Button>
                            </div>
                        </div>
                        <TableContainer component={Paper} className='mt-5'>
                            <Table
                                sx={{ minWidth: 290 }}
                                aria-label='simple table'
                            >
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Medicine</TableCell>
                                        <TableCell>Quantiy</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                    {medicArr.map((row, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    { border: 0 },
                                            }}
                                        >
                                            <TableCell>{row[0]}</TableCell>
                                            <TableCell>{row[1]}</TableCell>
                                            <TableCell>
                                                <button
                                                    onClick={() =>
                                                        deleteOrderMedicine(row)
                                                    }
                                                    className='px-4 py-2 bg-red rounded-xl text-white'
                                                >
                                                    Delete
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
                <div className='mt-6'>
                    <p className='text-blue font-semibold'>
                        Or, If you want to send medicine image{" "}
                    </p>
                    <a
                        href='http://wa.me/+8801847284860'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded-xl flex gap-4 my-2 items-center p-2 hover:shadow-lg duration-300 ease-linear'
                    >
                        <Image
                            height={40}
                            width={40}
                            src={whatsapp}
                            alt='Bumrungrad International Hospital'
                            className='h-[40px]'
                        />
                        <span className='text-blue font-semibold'>
                            Send image in Whatsapp
                        </span>
                    </a>
                </div>
                <div className='mt-4 pb-20'>
                    <button
                        className={`btn_primary ${
                            loader ||
                            !address ||
                            (!prescriptionImg && !medicArr.length)
                                ? "bg-white text-black border"
                                : "bg-blue text-white"
                        }`}
                        onClick={orderMedicine}
                        disabled={
                            loader ||
                            !address ||
                            (!prescriptionImg && !medicArr.length)
                        }
                    >
                        {loader ? (
                            <Loader
                                className='animate-spin'
                                stroke={loader ? "black" : "white"}
                                fill={loader ? "black" : "white"}
                            />
                        ) : (
                            "Order Now"
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default OrderMedicine;
