import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function Contact() {
    return (
        <section id="contact-section" className="w-full h-max flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
                <div
                    className="w-[500px] h-[400px] rounded-l-[20px] flex justify-center items-center shadow-2xl bg-white">
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
                <div className="w-[300px] h-[500px] rounded-[20px] shadow-2xl bg-blue-200 flex flex-col justify-center
                 items-center">
                    <div className="w-[80%] flex flex-col justify-center gap-5">
                        <h1 className="text-3xl">Contact Us</h1>
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[50px] h-[50px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faLocationDot}/>
                            </div>
                            <p>Lorem nisi non pariatur placeat, saepe sed sequi sit voluptatum?</p>
                        </div>
                        {/*address*/}
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[50px] h-[50px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faPhone}/>
                            </div>
                            <p>Lorem nisi non pariatur placeat, saepe sed sequi sit voluptatum?</p>
                        </div>
                        {/*phone*/}
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[50px] h-[50px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faPhone}/>
                            </div>
                            <p>Lorem nisi non pariatur placeat, saepe sed sequi sit voluptatum?</p>
                        </div>
                        {/*phone*/}
                        <div className="flex flex-row gap-2 items-center">
                            <div
                                className="min-w-[50px] h-[50px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={faEnvelope}/>
                            </div>
                            <p>Lorem nisi non pariatur placeat, saepe sed sequi sit voluptatum?</p>
                        </div>
                        {/*email*/}
                    </div>
                </div>
            </div>
        </section>
    );
}