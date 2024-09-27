"use client";

import useAuth from "@/helpers/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { TextField as InputField } from "@mui/material";

export default function User() {
    const { auth, access_token } = useAuth();
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });

    const [initialData, setInitialData] = useState({});
    const [isChanged, setIsChanged] = useState(false);

    // Function to update formData state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Set initial form data when auth data is loaded
    useEffect(() => {
        if (auth) {
            const initialFormData = {
                firstName: auth?.firstName || "",
                lastName: auth?.lastName || "",
                citizenship: auth?.citizenship || "",
                country: auth?.country || "",
                dob: auth?.dob || "",
                phone: auth?.phone || "",
            };
            setFormData(initialFormData);
            setInitialData(initialFormData);
        }
    }, [auth]);

    // Check if formData has changed compared to initialData
    useEffect(() => {
        const isDataChanged =
            JSON.stringify(initialData) !== JSON.stringify(formData);
        setIsChanged(isDataChanged);
    }, [formData, initialData]);

    const handleSubmit = async () => {
        try {
            setUpdateLoading(true);
            const response = await fetch(
                `https://api.discoverinternationalmedicalservice.com/api/personal/profile/${auth?.id}`,
                {
                    method: "POST",
                    headers: {
                        // Authorization: `Bearer ${access_token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                },
            );
            setUpdateLoading(false);

            if (response.ok) {
                const data = await response.json();
                console.log(
                    "🚀 ~ file: page.jsx:User.handleSubmit ~ data:",
                    data,
                );
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            setUpdateLoading(false);
            setError(error);
        } finally {
            setUpdateLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.discoverinternationalmedicalservice.com/api/personal/appointment/${auth?.id}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            "Content-Type": "application/json",
                        },
                    },
                );
                setLoading(false);

                if (response.ok) {
                    const data = await response.json();
                    setAppointments(data?.data);
                } else {
                    throw new Error("Failed to fetch data");
                }
            } catch (error) {
                setLoading(false);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (access_token && auth) fetchData();
    }, [access_token, auth?.id, auth]);

    return (
        <>
            <section className='mx-5 md:container md:mx-auto py-10  md:flex md:gap-8 lg:gap-16'>
                {loading ? (
                    <ProfileDetailsSkeleton />
                ) : (
                    <div className='shadow-lg p-3 lg:p-8 rounded-lg shadow-blue-300 relative md:w-1/2 h-fit bg-white'>
                        <h5 className='font-bold text-2xl text-blue-600 mb-4'>
                            Profile Details
                        </h5>
                        <hr className='my-3' />

                        {/* Name Fields */}
                        <div className='mb-4 flex gap-2 mt-6'>
                            <div>
                                <label htmlFor='firstName'>
                                    <span className='text-[#6B7280]'>
                                        First Name
                                    </span>
                                </label>
                                <InputField
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor='lastName'>
                                    <span className='text-[#6B7280]'>
                                        Last Name
                                    </span>
                                </label>
                                <InputField
                                    fullWidth
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Citizenship Field */}
                        <div className='mb-4'>
                            <label htmlFor='citizenship'>
                                <span className='text-[#6B7280]'>
                                    Citizenship
                                </span>
                            </label>
                            <InputField
                                fullWidth
                                placeholder='Citizenship'
                                name='citizenship'
                                value={formData.citizenship}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Country Field */}
                        <div className='mb-4'>
                            <label htmlFor='country'>
                                <span className='text-[#6B7280]'>Country</span>
                            </label>
                            <InputField
                                fullWidth
                                name='country'
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Date of Birth Field */}
                        <div className='mb-4'>
                            <label htmlFor='dob'>
                                <span className='text-[#6B7280]'>
                                    Date of Birth
                                </span>
                            </label>
                            <InputField
                                fullWidth
                                name='dob'
                                type='date'
                                value={formData.dob}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }} // This will prevent the label from overlapping with the date picker
                            />
                        </div>

                        {/* Email Field */}
                        <div className='mb-4'>
                            <label htmlFor='email'>
                                <span className='text-[#6B7280]'>Email</span>
                            </label>
                            <InputField
                                fullWidth
                                disabled
                                name='email'
                                type='email'
                                value={auth?.email}
                                // onChange={handleChange}
                            />
                        </div>

                        {/* Phone Field */}
                        <div className='mb-4'>
                            <InputField
                                fullWidth
                                name='phone'
                                type='tel'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className={`w-full py-2 rounded-md font-semibold transition duration-300 ${
                                isChanged
                                    ? "bg-[#3B82F6] text-white hover:bg-[#3B82F6]/80"
                                    : "bg-[#E5E7EB] text-[#6B7280] cursor-not-allowed"
                            }`}
                            disabled={!isChanged}
                        >
                            Save Changes
                        </button>
                    </div>
                )}

                <div className='mt-5 md:w-1/2'>
                    <h5 className='font-semibold text-lg text-blue'>
                        Total appointment taken: {appointments?.length}
                    </h5>
                    {loading ? (
                        [1, 2, 3].map((i) => <AppointmentSkeleton key={i} />)
                    ) : (
                        <div>
                            {appointments?.map((a, i) => (
                                <div key={i}>
                                    <div className='shadow-lg hover:shadow duration-300 ease-linear rounded-xl p-5 mt-2'>
                                        <div className='md:flex justify-between'>
                                            <div>
                                                {a?.doctor && (
                                                    <p className='font-semibold text-blue'>
                                                        {a?.doctor}{" "}
                                                    </p>
                                                )}
                                                {a?.specialty && (
                                                    <p> {a?.specialty} </p>
                                                )}
                                            </div>
                                            <div className='flex items-center gap-2.5'>
                                                {a?.status === "0" && (
                                                    <p className='mt-3 md:mt-0 w-fit px-2 py-1 bg-blue text-white rounded'>
                                                        Pending
                                                    </p>
                                                )}
                                                {a?.status === "1" && (
                                                    <p className='mt-3 md:mt-0 w-fit px-2 py-1 border text-white rounded'>
                                                        Processing
                                                    </p>
                                                )}
                                                {a?.status === "2" && (
                                                    <p className='mt-3 md:mt-0 w-fit px-2 py-1 bg-green text-white rounded'>
                                                        Done
                                                    </p>
                                                )}
                                                <div className='h-4 w-4 bg-blue rounded-full animate-pulse'></div>
                                            </div>
                                        </div>
                                        <hr className='my-2.5' />
                                        <div className='grid md:grid-cols-2'>
                                            <div>
                                                <p>
                                                    {a?.selectedDate &&
                                                        a?.selectedDate}
                                                </p>
                                                <p>{a?.shift && a?.shift}</p>
                                                {a?.firstSiftTime && (
                                                    <p> {a?.firstSiftTime}</p>
                                                )}
                                            </div>
                                            <div>
                                                <p>
                                                    {a?.selectedDate2 &&
                                                        a?.selectedDate2}
                                                </p>
                                                <p>{a?.shift2 && a?.shift2}</p>
                                                {a?.SecondSiftTime && (
                                                    <p> {a?.SecondSiftTime}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

const ProfileDetailsSkeleton = () => (
    <div className='shadow-lg p-8 rounded-lg shadow-[#DFE2F4] relative md:w-1/2 h-fit bg-white animate-pulse'>
        <div className='h-6 bg-[#DFE2F4] rounded-md w-1/3 mb-4'></div>
        <hr className='my-3' />
        <div className='mb-4 flex gap-2 mt-6'>
            <div className='w-1/2 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
            <div className='w-1/2 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
        </div>
        <div className='mb-4 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
        <div className='mb-4 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
        <div className='mb-4 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
        <div className='mb-4 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
        <div className='mb-4 h-10 bg-[#DFE2F4]/90 rounded-md'></div>
        <div className='w-full h-12 bg-[#DFE2F4]/90 rounded-md'></div>
    </div>
);

const AppointmentSkeleton = () => (
    <div className='shadow-lg hover:shadow duration-300 ease-linear rounded-xl p-5 mt-2 animate-pulse'>
        <div className='md:flex justify-between'>
            <div className='w-1/2 h-6 bg-[#DFE2F4]/90 rounded-md'></div>
            <div className='flex items-center gap-2.5'>
                <div className='w-20 h-6 bg-[#DFE2F4]/90 rounded-md'></div>
                <div className='h-4 w-4 bg-[#DFE2F4]/90 rounded-full'></div>
            </div>
        </div>
        <hr className='my-2.5' />
        <div className='grid md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
                <div className='w-1/2 h-5 bg-[#DFE2F4]/90 rounded-md'></div>
                <div className='w-1/4 h-5 bg-[#DFE2F4]/90 rounded-md'></div>
                <div className='w-1/3 h-5 bg-[#DFE2F4]/90 rounded-md'></div>
            </div>
            <div className='space-y-2'>
                <div className='w-1/2 h-5 bg-[#DFE2F4]/90 rounded-md'></div>
                <div className='w-1/4 h-5 bg-[#DFE2F4]/90 rounded-md'></div>
                <div className='w-1/3 h-5 bg-[#DFE2F4]/90 rounded-md'></div>
            </div>
        </div>
    </div>
);
