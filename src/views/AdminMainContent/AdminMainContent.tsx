import {AdminNavBar} from "../AdminNavBar/AdminNavBar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Dashboard} from "../Dashboard/Dashboard";
import {ManageTables} from "../ManageTables/ManageTables";

export function AdminMainContent() {
    return (
        <>
            <main className="h-screen w-full flex flex-row">
                <section id="nav-bar-section" className="w-[50px]">
                    <AdminNavBar/>
                </section>
                <section className="w-full flex justify-center items-center">
                    {/*<Dashboard/>*/}
                    <ManageTables/>
                </section>



                {/*<Routes>*/}
                {/*    <Route path={"/dashboard"} Component={Dashboard}/>*/}
                {/*    <Route path={"/manage/tables"} Component={ManageTables}/>*/}
                {/*    <Route path={"/manage/booking"} Component={ManageBooking}/>*/}
                {/*</Routes>*/}
            </main>
        </>
    );
}