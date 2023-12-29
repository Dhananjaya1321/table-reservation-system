import React from "react";
import {Form} from "../../component/Form/Form";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function ManageBooking() {
    return (
        <section className="absolute left-[50px] right-0 flex flex-col justify-center items-center h-max gap-[25px]">
            <div className="h-full flex justify-center items-center ">
                <Form classes={"w-[90%] flex justify-center items-center flex-wrap mt-5 gap-5 drop-shadow-md bg-white rounded-2xl p-4"}>
                    <>
                        <TextField
                            className="w-[200px]"
                            disabled
                            id="outlined-disabled"
                            label="Table Number"
                            defaultValue="1"
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-number"
                            label="Number of people"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <input
                            className="w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"date"}/>
                        <input
                            className="w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"time"}/>

                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="NIC"
                            variant="outlined"
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="Contact Number"
                            variant="outlined"
                        />
                        <Button
                            className="w-[200px] h-[52px] text-3xl"
                            variant="contained"
                            color="success"
                        >
                            BOOK
                        </Button>
                    </>
                </Form>
            </div>
        </section>
    );
}