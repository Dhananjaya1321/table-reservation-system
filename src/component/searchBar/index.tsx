import React from "react";
import Button from '@mui/material/Button';
import "./style.css";

export function SearchBar() {
    return (
        <section id="search-bar" className="h-max w-full flex">
            <div className="flex-wrap w-max sm:h-28 my-5 drop-shadow-2xl rounded-lg flex gap-y-4">
                <input className="w-40 md:w-56 h-10 rounded px-1 border border-solid border-slate-700" type={"date"}/>
                <input className="w-40 md:w-56 h-10 rounded px-1 border border-solid border-slate-700" type={"time"}/>
                <Button className="w-40 md:w-56 h-10 rounded px-1" variant="contained">Medium</Button>
            </div>
        </section>
    )
}