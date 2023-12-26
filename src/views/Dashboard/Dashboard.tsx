import React from "react";
export function Dashboard() {
    return (
        <section className="flex flex-row justify-center items-center h-max gap-[25px] flex-wrap">
            <div className="flex flex-col justify-end w-[250px] h-[150px] shadow-2xl bg-blue-300 rounded-xl">
                <h1 className="text-5xl text-center mb-3">0</h1>
                <h1 className="text-[16px] text-end mb-4 mr-4">Table Count</h1>
            </div>
            <div className="flex flex-col justify-end w-[250px] h-[150px] shadow-2xl bg-blue-300 rounded-xl">
                <h1 className="text-5xl text-center mb-3">0</h1>
                <h1 className="text-[16px] text-end mb-4 mr-4">Available Table</h1>
            </div>
            <div className="flex flex-col justify-end w-[250px] h-[150px] shadow-2xl bg-blue-300 rounded-xl">
                <h1 className="text-5xl text-center mb-3">0</h1>
                <h1 className="text-[16px] text-end mb-4 mr-4">Booked Table</h1>
            </div>
            <div className="flex flex-col justify-end w-[250px] h-[150px] shadow-2xl bg-blue-300 rounded-xl">
                <h1 className="text-5xl text-center mb-3">0</h1>
                <h1 className="text-[16px] text-end mb-4 mr-4">Customers Count</h1>
            </div>
            <div className="flex flex-col justify-end w-[250px] h-[150px] shadow-2xl bg-blue-300 rounded-xl">
                <h1 className="text-5xl text-center mb-3">0</h1>
                <h1 className="text-[16px] text-end mb-4 mr-4">Booking Count</h1>
            </div>
        </section>
    );
}