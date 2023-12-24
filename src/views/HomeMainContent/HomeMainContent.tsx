import React from "react";
import {NavBar} from "../NavBar/NavBar";
import {Home} from "../Home/Home";
import {SearchBar} from "../SearchBar/SearchBar";
import {Tables} from "../Tables/Tables";
import {About} from "../About/About";
import {Feedback} from "../Feedback/Feedback";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";

export function HomeMainContent() {
    return (
        <>
            <NavBar/>
            <main className="relative top-[50px] bg-gray-100">
                <Home/>
                <SearchBar/>
                <Tables/>
                <About/>
                <Feedback/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}