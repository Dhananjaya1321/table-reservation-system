import React from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function ManageTables() {
    return (
        <section className="self-start flex flex-col justify-center items-center h-max gap-[25px]">
            <form className="mt-5 flex flex-wrap flex-row gap-[25px] p-[20px] rounded-2xl drop-shadow-md bg-white">
                <TextField
                    className="w-[100px] sm:w-[200px]"
                    disabled
                    id="outlined-disabled"
                    label="Table ID"
                    defaultValue="1"
                />
                <TextField
                    className="w-[100px] sm:w-[200px]"
                    id="outlined-basic"
                    label="Table Number"
                    variant="outlined"
                />
                <Button
                    className="w-[100px] sm:w-[200px] h-[52px] text-3xl"
                    variant="contained"
                    style={{backgroundColor:"#00bf00"}}
                >
                   ADD
                </Button>
            </form>
        </section>
    );
}