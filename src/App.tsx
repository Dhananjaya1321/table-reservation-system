import React from 'react';
import './App.css';
import {SignIn} from "./views/SignIn/SignIn";
import {Signup} from "./views/Signup/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeMainContent} from "./views/HomeMainContent/HomeMainContent";
import {AdminNavBar} from "./views/AdminNavBar/AdminNavBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} Component={HomeMainContent}/>
                    <Route path={"/signin"} Component={SignIn}/>
                    <Route path={"/signup"} Component={Signup}/>
                    <Route path={"/admin"} Component={AdminNavBar}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
