import React from "react";
import {NavBar} from "../NavBar/NavBar";
import {Home} from "../Home/Home";
import {SearchBar} from "../SearchBar/SearchBar";
import {Tables} from "../Tables/Tables";

export function HomeMainContent() {
    return (
        <>
            <NavBar/>
            <main className="relative top-[50px] bg-gray-100">
                <Home/>
                <SearchBar/>
                <Tables/>
            </main>
        </>
    );
}