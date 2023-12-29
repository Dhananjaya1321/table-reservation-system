import React from "react";

export function DashboardItem({topic, count}: props) {
    return (
        <div className="flex flex-col justify-end w-[150px] h-[150px] shadow-2xl bg-blue-300 rounded-xl">
            <h1 className="text-5xl text-center mb-3">{count}</h1>
            <h1 className="text-[16px] text-end mb-4 mr-4">{topic}</h1>
        </div>
    );
}

type props = {
    topic: string,
    count: number
}