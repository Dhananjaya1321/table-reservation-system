import React from 'react';
import './App.css';
import {SignIn} from "./views/SignIn/SignIn";
import {Signup} from "./views/Signup/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeMainContent} from "./views/HomeMainContent/HomeMainContent";
import {AdminMainContent} from "./views/AdminMainContent/AdminMainContent";
import {Dashboard} from "./views/Dashboard/Dashboard";
import {ManageTables} from "./views/ManageTables/ManageTables";
import {ManageBooking} from "./views/ManageBooking/ManageBooking";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} Component={HomeMainContent}/>
                    <Route path={"/signin"} Component={SignIn}/>
                    <Route path={"/signup"} Component={Signup}/>
                    <Route path={"/admin/*"} Component={AdminMainContent}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="manage/tables" element={<ManageTables />} />
                        <Route path="manage/booking" element={<ManageBooking />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
