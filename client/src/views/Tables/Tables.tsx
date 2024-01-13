import React, {useEffect, useState} from "react";
import {Table} from "../Table/Table";
import {api} from "../../config/config";
import Button from "@mui/material/Button";
import "./style.css";

export function Tables() {
    let [tables, setTables] = useState([]);
    let [currentDate, setCurrentDate] = useState('');
    let [currentTime, setCurrentTime] = useState('');

    // Event handler for search
    const handleSearchEvent = (event:any) => {

    };

    // Event handler for date input change
    const handleDateChange = (event:any) => {
        setCurrentDate(event.target.value);
    };

    // Event handler for time input change
    const handleTimeChange = (event:any) => {
        setCurrentTime(event.target.value);
    };

    let getAllTables = async () => {
        try {
            api.get("admin/all/table").then((rep: any) => {
                setTables(rep.data);
                console.log(tables,rep.data)

            }).catch((error: any) => {
                console.error(error);
            })
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getAllTables();
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();

        const currentDateObject = new Date();
        const formattedDate = currentDateObject.toISOString().split('T')[0]; // YYYY-MM-DD
        const formattedTime = currentDateObject.toLocaleTimeString('en-US', {hour12: false}); // HH:mm

        setCurrentDate(formattedDate);
        setCurrentTime(formattedTime);
    }, []);
    return (
        <>
            <section id="search-bar" className="h-max w-full flex justify-center flex-row items-center flex-wrap">
                <h1 className="mt-5 text-3xl mx-10 sm:mx-20 text-center">Receive Your Table Easily</h1>
                <p className="text-center mx-10 sm:mx-20">To book the table, you need to move your cursor over the table
                    or click. Select your desired date, time and check available tables before selecting your table</p>
                <div
                    className="flex-wrap w-max sm:h-28 my-5 drop-shadow-2xl rounded-lg flex justify-center items-center gap-y-4">
                    <input className="w-40 md:w-56 h-10 rounded px-1 border border-solid border-slate-700"
                           type={"date"}
                           value={currentDate}
                           onChange={handleDateChange}
                    />
                    <input className="w-40 md:w-56 h-10 rounded px-1 border border-solid border-slate-700"
                           type={"time"}
                           value={currentTime}
                           onChange={handleTimeChange}
                    />
                    <Button className="w-40 md:w-56 h-10 rounded px-1"
                            variant="contained"
                            onChange={handleSearchEvent}
                    >Search</Button>
                </div>
            </section>
            <section id="tables-section" className="w-full flex justify-center flex-col items-center">
                <div className="w-[80%] h-[30px] flex flex-row flex-wrap gap-[25px]">
                    <div className="flex flex-row gap-[5px] items-center">
                        <div className="w-[25px] h-[25px] bg-emerald-400 rounded-[5px] shadow-xl"/>
                        <p>Available</p></div>
                    <div className="flex flex-row gap-[5px] items-center">
                        <div className="w-[25px] h-[25px] bg-red-400 rounded-[5px] shadow-xl"/>
                        <p>Not Available</p></div>
                </div>
                <section className="w-[80%] h-max flex flex-wrap flex-row gap-5 py-3 justify-center">
                    {
                        tables.map((table: any) => (
                            <Table table_id={table.table_id} table_number={table.table_number} chair_count={4}
                                   status={""}/>
                        ))
                    }
                </section>
            </section>
        </>

    );
}
