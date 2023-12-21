import React from "react";
import Button from '@mui/material/Button';
import "./style.css";

export function SearchBar() {
    return (
        <section id="search-bar" className="h-max w-full flex justify-center flex-row items-center flex-wrap">
            <h1 className="mt-5 text-3xl mx-10 sm:mx-20 text-center">Receive Your Table Easily</h1>
            <p className="text-center mx-10 sm:mx-20">To book the table, you need to move your cursor over the table or click. Select your desired date, time and check available tables before selecting your table</p>
            <div className="flex-wrap w-max sm:h-28 my-5 drop-shadow-2xl rounded-lg flex justify-center items-center gap-y-4">
                <input className="w-40 md:w-56 h-10 rounded px-1 border border-solid border-slate-700" type={"date"}/>
                <input className="w-40 md:w-56 h-10 rounded px-1 border border-solid border-slate-700" type={"time"}/>
                <Button className="w-40 md:w-56 h-10 rounded px-1" variant="contained">Search</Button>
            </div>
        </section>
    )
}