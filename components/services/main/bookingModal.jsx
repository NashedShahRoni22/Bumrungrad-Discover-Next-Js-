"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Services from "@/components/services/main/services";
import { IoMdClose } from "react-icons/io";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #fff",
    borderRadius: "16px",
    boxShadow: 24,
    p: 2,
    overflow: "auto",
};

const BookingModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => setOpen(id);
    const handleClose = () => setOpen(false);
    const [serviceName, setServiceName] = React.useState({});
    const getData = (data) => {
        setServiceName(data);
    };
    const { name, form, height } = serviceName;

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose} // Make sure to close the modal on click outside
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box
                    sx={{
                        ...style, // Include your existing styles here
                        maxHeight: "90vh", // Maximum height of the modal box
                        overflowY: "auto", // Scrollbar will appear if content overflows
                    }}
                    className={`${height} max-sm:w-[370px] w-[700px]`}
                >
                    <button
                        onClick={handleClose}
                        size='small'
                        className='bg-red h-10 w-10 max-sm:w-6 max-sm:h-6 shadow hover:shadow-md flex justify-center absolute top-3 right-3 items-center rounded-full text-white'
                    >
                        <IoMdClose size={20} />
                    </button>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        <p className='font-semibold'>{name}</p>
                    </Typography>

                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <div>{form}</div>
                    </Typography>
                </Box>
            </Modal>

            <Services
                handaleOpen={handleOpen}
                getData={getData}
                handleClose={handleClose}
            />
        </div>
    );
};

export default BookingModal;
