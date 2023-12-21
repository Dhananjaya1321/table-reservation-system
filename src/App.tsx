import React from 'react';
import './App.css';
import {SignIn} from "./views/SignIn/SignIn";
import {Signup} from "./views/Signup/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeMainContent} from "./views/HomeMainContent/HomeMainContent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} Component={HomeMainContent}/>
                    <Route path={"/signin"} Component={SignIn}/>
                    <Route path={"/signup"} Component={Signup}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
