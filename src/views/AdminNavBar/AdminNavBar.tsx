import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export function AdminNavBar() {
    return (
        <>
            <button className="top-2 left-2 absolute flex items-center justify-center z-50">
                <FontAwesomeIcon className="w-[30px] h-[30px]" icon={faBars}/>
            </button>
            <nav className="fixed left-0 top-0 w-[300px] h-screen bg-gray-600">
                <div className="relative top-[50px] flex flex-col gap-1 h-full">
                    <Link to="/dashbord">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            style={{backgroundColor: "#738091"}}
                            variant="contained"
                        >Dashboard</Button>
                    </Link>

                    <Link to="/manage/tables">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            style={{backgroundColor: "#738091"}}
                            variant="contained"
                        >Manage Tables</Button>
                    </Link>

                    <Link to="/manage/booking">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            style={{backgroundColor: "#738091"}}
                            variant="contained"
                        >Manage Booking</Button>
                    </Link>

                    <Link to="/logout">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            variant="contained"
                            style={{backgroundColor: "#dd0909"}}
                        >Logout</Button>
                    </Link>

                </div>
            </nav>
        </>
    );
}