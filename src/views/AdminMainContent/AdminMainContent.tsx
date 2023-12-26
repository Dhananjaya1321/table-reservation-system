import {AdminNavBar} from "../AdminNavBar/AdminNavBar";
import {Route, Routes} from "react-router-dom";
import React from "react";

export function AdminMainContent() {
    return (
        <>
            <AdminNavBar/>
            <main className="h-screen w-full bg-blue-200">
                {/*left eken 50px thiyala wada karanna*/}

                {/*<Routes>*/}
                {/*    <Route path={"/dashboard"} Component={Dashboard}/>*/}
                {/*    <Route path={"/manage/tables"} Component={ManageTables}/>*/}
                {/*    <Route path={"/manage/booking"} Component={ManageBooking}/>*/}
                {/*</Routes>*/}
            </main>
        </>
    );
}