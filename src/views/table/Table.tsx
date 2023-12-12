import React from "react";
import table from "../../assets/image/table.png";

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

    return (
        <div className="w-max h-max relative">
            <img src={table} className="w-[250px]" alt="Table"/>
            <div
                className="absolute w-[250px] h-[250px] top-0 rounded-[20px] flex justify-center text-center items-center">
                <h1 className="text-[56px]">{table_number}</h1>
            </div>
            <div
                id={table_id}
                className="flex flex-col opacity-0 hover:opacity-75 hover:bg-black hover:opacity-75 absolute w-[250px] h-[250px] top-0 rounded-[20px] flex justify-center text-center items-center"
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
