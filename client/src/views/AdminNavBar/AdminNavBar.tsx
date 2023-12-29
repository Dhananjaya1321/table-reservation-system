import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import $ from 'jquery';

export function AdminNavBar() {
    const [isSlideNavBar, setSlideNavBar] = useState(false);

    const slideNavBar = () => {
        if (isSlideNavBar) {
            $("#admin-nav-bar").animate({
                left: '-250px'
            }, 1000);
            $("#nav-bar-section").css("width","50px");
            setSlideNavBar(false);
        } else {
            $("#admin-nav-bar").animate({
                left: '0'
            }, 1000);
            $("#nav-bar-section").css("width","300px");
            setSlideNavBar(true);
        }
    }
    return (
        <>
            <button onClick={slideNavBar} className="top-2 left-2 fixed flex items-center justify-center z-50">
                <FontAwesomeIcon className="w-[30px] h-[30px]" icon={faBars}/>
            </button>
            <nav id="admin-nav-bar" className="relative left-[-250px] top-0 w-[300px]  h-screen bg-gray-600 z-40">
                <div className="relative top-[50px] flex flex-col gap-1 h-max">
                    <Link to="/admin/dashboard">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            style={{backgroundColor: "#738091"}}
                            variant="contained"
                        >Dashboard</Button>
                    </Link>

                    <Link to="/admin/manage/tables">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            style={{backgroundColor: "#738091"}}
                            variant="contained"
                        >Manage Tables</Button>
                    </Link>

                    <Link to="/admin/manage/booking">
                        <Button
                            className="w-[100%] h-[52px] text-3xl"
                            style={{backgroundColor: "#738091"}}
                            variant="contained"
                        >Manage Booking</Button>
                    </Link>

                    <Link to="/">
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