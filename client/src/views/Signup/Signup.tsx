import {TextField} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export function Signup() {
    return (
        <section className="w-[100%] h-[100vh] flex flex-col items-center justify-center bg-gray-100">
            <div
                className="w-[280px] sm:w-[400px] h-max bg-white p-[20px] rounded-[15px] shadow-2xl flex flex-col justify-center">
                <h1 className="text-3xl">Sign Up</h1>
                <p className="mt-1">Welcome to our easy table booking site If you don't have an account please
                    SignUp</p>
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
                    <Link to="/" className="w-[100%] sm:w-[80%] h-[52px]">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            variant="contained"
                            color="info"
                        >Sign Up</Button>
                    </Link>

                </form>
                <p className="text-center mt-3">Do you already have an account?
                    <button className="text-blue-600">
                        <Link to="/signin">SignIn</Link>
                    </button>
                </p>
            </div>
        </section>
    );
}