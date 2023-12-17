import React from "react";

export function Table({table_id, table_number, chair_count, status}: Props) {
    const message = () => {
        if (status === "reserved") {
            return <h1 className="text-white">The table is reserved</h1>;
        } else {
            return (
                <>
                    <h1 className="text-white">Table Number : {table_number}</h1>
                    <h1 className="text-white">Chair count : {chair_count}</h1>
                </>
            );
        }
    };
    const table = () => {
        if (status === "reserved") {
            return <div className="w-[150px] h-[150px] rounded-[100%] bg-red-400 z-10 shadow-2xl"/>;
        } else {
            return <div className="w-[150px] h-[150px] rounded-[100%] bg-emerald-400 z-10 shadow-2xl"/>;
        }
    };

    return (
        <div className="w-max h-max relative">
            <div className="w-[250px] h-[250px] flex items-center justify-center">
                {table()}
                <div className="w-[156px] h-[50px] bg-black absolute rounded-[8px] rotate-45"/>
                <div className="w-[50px] h-[156px] bg-black absolute rounded-[8px] rotate-45"/>
            </div>
            <div
                className="absolute w-[250px] h-[250px] top-0 rounded-[20px] flex justify-center text-center items-center z-20">
                <h1 className="text-[32px]">{table_number}</h1>
            </div>
            <div
                id={table_id}
                className="text-3xl flex-col opacity-0 hover:bg-black hover:opacity-75 hover:drop-shadow-md absolute
                w-[250px] h-[250px] top-0 rounded-[20px] flex justify-center text-center items-center z-30"
            >
                {message()}
            </div>
        </div>
    );
}

type Props = {
    table_id: string;
    table_number: string;
    chair_count: number;
    status: string;
};
