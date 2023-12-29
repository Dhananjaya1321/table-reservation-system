import {AdminNavBar} from "../AdminNavBar/AdminNavBar";
import {Outlet} from "react-router-dom";
import React from "react";


export function AdminMainContent() {
    return (
        <>
            <main className="h-[100%] w-full flex flex-row bg-gray-500">
                <section id="nav-bar-section" className="z-50 fixed top-0 w-[50px]">
                    <AdminNavBar/>
                </section>
                <section className="w-full flex justify-center items-start bg-gray-100">
                    <Outlet/>
                </section>
            </main>
        </>
    );
}