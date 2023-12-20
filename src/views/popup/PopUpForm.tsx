import React from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from "@fortawesome/free-solid-svg-icons";


export function PopUpForm({isPopupOpen, isOpen, isClose}: Props) {
    return (
        <section style={{display: isPopupOpen ? 'flex' : 'none'}}
                 className="fixed left-0 top-0 z-50 w-full sm:h-screen items-center justify-center">
            <div className="bg-white rounded-xl relative w-[464px] h-max p-[20px] sm:top-5 sm:mb-5 sm:border-2
                 flex flex-col items-center sm:items-start">
                <button onClick={isClose} className="w-[25px] h-[25px] absolute top-[5px] right-[5px]">
                    <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000", fontSize: "22px"}}/>
                </button>
                <h1 className="text-3xl">Book your table</h1>
                <p className="text-center sm:text-start">Your reservation is for 2 hours from your desired
                    reservation time. Rs.200 will be added for an
                    additional hour</p>
                <form className="mt-5 flex flex-wrap flex-row gap-[20px] items-center justify-center">
                    <TextField
                        className="w-[100px] sm:w-[200px]"
                        disabled
                        id="outlined-disabled"
                        label="Table Number"
                        defaultValue="1"
                    />
                    <TextField
                        className="w-[100px] sm:w-[200px]"
                        id="outlined-number"
                        label="Number of people"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <input
                        className="w-[100px] sm:w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                        type={"date"}/>
                    <input
                        className="w-[100px] sm:w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                        type={"time"}/>

                    <TextField
                        className="w-[100px] sm:w-[200px]"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        className="w-[100px] sm:w-[200px]"
                        id="outlined-basic"
                        label="NIC"
                        variant="outlined"
                    />
                    <TextField
                        className="w-[100px] sm:w-[200px]"
                        id="outlined-basic"
                        label="Contact Number"
                        variant="outlined"
                    />
                    <Button
                        className="w-[100px] sm:w-[200px] h-[52px] text-3xl"
                        variant="contained"
                        color="success"
                    >
                        BOOK NOW
                    </Button>
                </form>
            </div>
        </section>
    );
}

type Props = {
    isPopupOpen: boolean;
    isOpen: any;
    isClose: any;
};
