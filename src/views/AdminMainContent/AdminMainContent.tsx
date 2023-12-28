import {AdminNavBar} from "../AdminNavBar/AdminNavBar";
import {Outlet} from "react-router-dom";
import React from "react";


export function AdminMainContent() {
    return (
        <>
            <main className="h-screen w-full flex flex-row">
                <section id="nav-bar-section" className="z-50 fixed top-0 sm:relative w-[50px]">
                    <AdminNavBar/>
                </section>
                <section className="w-full flex justify-center items-center">
                    <Outlet/>
                </section>
            </main>
        </>
    );
}