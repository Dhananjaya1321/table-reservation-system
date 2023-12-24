import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function Contact() {
    return (
        <section id="contact-section" className="w-full h-max flex flex-col items-center justify-center mt-10">
            <div className="gap-8 w-full flex sm:gap-0 flex-col sm:flex-row items-center justify-center">
                <div
                    className="w-[90%] rounded-3xl sm:w-[300px] md:w-[450px] lg:w-[500px] h-[400px] sm:rounded-l-[20px] sm:rounded-r-none flex justify-center items-center shadow-2xl bg-white">
                    <div className="w-[80%] flex flex-col justify-center gap-5">
                        <h1 className="text-3xl">Get in touch</h1>
                            <TextField
                                className="w-full"
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                className="w-full"
                                id="outlined-basic"
                                label="Phone"
                                variant="outlined"
                            />
                            <TextField
                                className="w-full"
                                id="outlined-basic"
                                label="Message"
                                variant="outlined"
                            />
                            <Button
                                className="w-full h-[52px] text-3xl"
                                variant="contained"
                                color="info"
                            >
                                SEND
                            </Button>

                    </div>
                </div>
                <div className="w-[90%] py-3 sm:py-0 h-max rounded-3xl sm:w-[300px] sm:h-[480px] sm:rounded-[20px] shadow-2xl bg-blue-200 flex flex-col justify-center
                 items-center">
                    <div className="w-[90%] flex flex-col justify-center gap-8">
                        <h1 className="text-3xl text-center sm:text-start">Contact Us</h1>
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[45px] h-[45px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faLocationDot}/>
                            </div>
                            <div>
                                <p className="text-xl">Location</p>
                                <p>Galle, Sri Lanka</p>
                            </div>
                        </div>
                        {/*address*/}
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[45px] h-[45px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faPhone}/>
                            </div>
                            <div>
                                <p className="text-xl">Phone</p>
                                <p>076 715 1321</p>
                            </div>
                        </div>
                        {/*phone*/}
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[45px] h-[45px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faPhone}/>
                            </div>
                            <div>
                                <p className="text-xl">Phone</p>
                                <p>076 715 1321</p>
                            </div>
                        </div>
                        {/*phone*/}
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[45px] h-[45px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faEnvelope}/>
                            </div>
                            <div>
                                <p className="text-xl">Email</p>
                                <p className="text-[15px]">blackisurudananjaya@gmail.com</p>
                            </div>
                        </div>
                        {/*email*/}
                    </div>
                </div>
            </div>
        </section>
    );
}