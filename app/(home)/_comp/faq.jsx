"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import { sendEmails } from "@/helpers/mail/sendMail";
import { admin_mails } from "@/constant";
import { natioNalities } from "@/public/data/country";
import {  userMailBody } from "@/helpers/mail/mailbody";
import Loader from "@/components/ui/loader";

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState(null);
// formdata
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        nationality: "",
        gender: "",
        date: "",
        message: "",
    });

    // filed validation
    const handleValidation = (fields) => {
        let isValid = true;
        Object.keys(fields).forEach((key) => {
            if (!fields[key]) {
                setErrors((prev) => ({
                    ...prev,
                    [key]: "This field is required",
                }));
                isValid = false;
            }
        });
        return isValid;
    };
// handle sumbit 
    const handleSubmit = async () => {
        try {
            if (!handleValidation(formData)) {
                return;
            }
            setLoading(true);
            setErrors(null);
            const response = await sendEmails(
              admin_mails,
                `Contact Us - ${formData.email}`,
                userMailBody(formData, "Contact Us"),
            )
            setLoading(false);
            if(response?.messageId){
                toast.success("We have received your request. Our representative will reach you shortly!", {
                    position: "top-center",
                    style: { borderRadius: "20px" },
                    duration: 5000,
                  });
    
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    phone: "",
                    subject: "",
                    nationality: "",
                    gender: "",
                    date: "",
                });
            }else{
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
            


        } catch (error) {
            console.error(error?.message);
        }
    };
// accordion function 
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faq = [
        {
            question: "How do I make an appointment at Bumrungrad International Hospital?",
            answer: "As a Medical Tourism Facilitator, we can help you book an appointment at Bumrungrad International Hospital. Simply contact us, and we’ll handle all the scheduling for you, ensuring that you receive the care you need at a convenient time. Alternatively, appointments can be booked directly through the hospital's website or by contacting their International Patient Services.",
        },
        {
            question: "Where is Bumrungrad Hospital located and what is nearby?",
            answer: "Bumrungrad International Hospital is located at 33 Sukhumvit 3 (Soi Nana Nua), Wattana, Bangkok, Thailand. It’s situated in a central area of Bangkok, close to luxury hotels, restaurants, shopping malls, and other services that are convenient for international patients and their families.",
        },
        {
            question: "What is the cost of my treatment at Bumrungrad International Hospital?",
            answer: "The cost of your treatment will depend on the medical services you require. As facilitators, we work closely with Bumrungrad to provide a detailed cost estimate based on your medical needs. Contact us, and we’ll arrange a personalized treatment plan with a transparent cost estimate.",
        },
        {
            question: "What is the International Referral Office and what kind of services do they provide?",
            answer: "The International Referral Office at Bumrungrad Hospital supports international patients by coordinating appointments, treatments, and travel logistics. They assist with medical inquiries, communication between doctors, and provide follow-up support. As your facilitator, we collaborate with this office to ensure a smooth experience throughout your treatment journey.",
        },
        {
            question: "Will there be someone at Bumrungrad International Hospital who speaks my language?",
            answer: "Yes, Bumrungrad has over 200 professional interpreters covering a wide range of languages. You will be assisted in your preferred language throughout your healthcare journey to ensure clear communication at every step.",
        },
        {
            question: "What are the accommodation options near Bumrungrad International Hospital?",
            answer: "There are several accommodation options near the hospital, including hotels and serviced apartments. As your Medical Tourism Facilitator, we can help arrange accommodation to suit your needs, ensuring you and your family are comfortable during your stay.",
        },
        {
            question: "How do I pay for my treatment at Bumrungrad International Hospital if I do not have International Health Insurance?",
            answer: "If you don’t have international health insurance, payment options include cash, major credit cards, and bank transfers. Bumrungrad also offers financial counseling, and we can assist you in exploring the best payment methods to suit your situation.",
        },
        {
            question: "Does Bumrungrad International Hospital provide transportation services for international patients?",
            answer: "Yes, the hospital provides airport pickup services and local transportation for international patients. As your facilitator, we can coordinate these services for you, ensuring a smooth transition from the airport to your accommodation and the hospital.",
        },
        {
            question: "How do I obtain a visa for medical treatment at Bumrungrad International Hospital?",
            answer: "We work directly with Bumrungrad to provide a visa support letter for patients traveling for medical treatment. Our team will guide you through the visa application process and help ensure all necessary documents are prepared.",
        },
        {
            question: "How do I get in contact with a Bumrungrad Support Specialist?",
            answer: "You can either reach out directly to Bumrungrad’s Support Specialists via their website or phone, or you can contact us, and we will coordinate all communications on your behalf to ensure you receive prompt assistance.",
        },
    ];
     
    

    return (
        <div className='mx-5 my-16 md:my-32 md:container md:mx-auto flex flex-col md:flex-row gap-8 md:gap-16'>
            <form
               
                className='md:w-1/2 flex flex-col gap-5 shadow p-8 max-sm:p-3 rounded max-h-fit'
            >
                <p className='text-xl md:text-2xl font-semibold text-blue'>
                    Get a second medical opinion at Bumrungrad International
                    Hospital
                </p>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-1'>
                        <TextField
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            fullWidth
                            label='Enter Name(as on passport)'
                            required
                        />
                        {errors?.name && (
                            <p className='text-red text-sm'>{errors?.name}</p>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label='Enter Email'
                            required
                            type='email'
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        {errors?.email && (
                            <p className='text-red text-sm'>{errors?.email}</p>
                        )}
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>
                                Select Gender
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                label='Select Gender'
                                value={formData.gender}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        gender: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value={'male'}>Male</MenuItem>
                                <MenuItem value={'female'}>Female</MenuItem>
                                <MenuItem value={'other'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        {errors?.gender && (
                            <p className='text-red text-sm'>{errors?.gender}</p>
                        )}
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>
                                Select Nationality
                            </InputLabel>
                            <Select
                                value={formData.nationality}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nationality: e.target.value,
                                    })
                                }
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'

                                label='Select Nationality'
                            >
                              {
                                natioNalities.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                              }
                              
                            </Select>
                        </FormControl>
                        {errors?.nationality && (
                            <p className='text-red text-sm'>
                                {errors?.nationality}
                            </p>
                        )}
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label='Phone Number'
                            type='number'
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                            required
                        />
                        {errors?.phone && (
                            <p className='text-red text-sm'>{errors?.phone}</p>
                        )}
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            required
                            type='date'
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    date: e.target.value,
                                })
                            }
                        />

                        {errors?.date && (
                            <p className='text-red text-sm'>{errors?.date}</p>
                        )}
                    </div>
                </div>
                <div>
                    <TextField
                        fullWidth
                        label='Enter Subject'
                        required
                        value={formData.subject}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                subject: e.target.value,
                            })
                        }
                    />
                    {errors?.subject && (
                        <p className='text-red text-sm'>{errors?.subject}</p>
                    )}
                </div>
                <div>
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        label='Enter Message'
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />
                    {errors?.message && (
                        <p className='text-red text-sm'>{errors?.message}</p>
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className='bg-blue flex items-center justify-center hover:bg-white px-4 py-2 hover:text-blue text-white border border-blue font-semibold rounded duration-300 ease-linear'
                    type='button'
                >
                    {loading ? <Loader fill='white' stroke='white' className='animate-spin' /> : "Submit"}
                </button>
            </form>
            <div className='md:w-1/2'>
                <p className='text-xl md:text-2xl font-semibold text-blue'>
                    Help & FAQs
                </p>
                <div className='mt-5'>
                    {faq.map((f, i) => (
                        <Accordion
                            key={i}
                            expanded={expanded === i}
                            onChange={handleChange(i)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{f.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{f.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}



