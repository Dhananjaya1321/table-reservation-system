import {TextField} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

export function SignIn() {
    return (
        <section className="w-[100%] h-[100vh] flex flex-col items-center justify-center bg-gray-100">
            <div className="w-[280px] sm:w-[400px] h-max bg-white p-[20px] rounded-[15px] shadow-2xl flex flex-col justify-center">
                <h1 className="text-3xl">Sign In</h1>
                <p className="mt-1">Welcome to our easy table booking site If you already have an account please login</p>
                <form className="flex flex-col items-center justify-center gap-[20px] mt-5">
                    <TextField
                        className="w-[100%] sm:w-[80%]"
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        className="w-[100%] sm:w-[80%]"
                        id="outlined-basic"
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                    <Button
                        className="w-[100%] sm:w-[80%] h-[52px] text-3xl"
                        variant="contained"
                        color="info"
                    >
                        Sign In
                    </Button>
                </form>
                <p className="text-center mt-3">Don't have an account? <button className="text-blue-600">SignUp</button></p>
            </div>
        </section>
    );
}