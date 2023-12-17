import React from "react";
import {Table} from "../table/Table";

export function Tables() {
    return (
        <section id="tables-section" className="w-full flex justify-center flex-col items-center">
            <div className="w-[80%] h-[30px] flex flex-row flex-wrap gap-[25px]">
                <div className="flex flex-row gap-[5px] items-center"><div className="w-[25px] h-[25px] bg-emerald-400 rounded-[5px] shadow-xl"/><p>Available</p></div>
                <div className="flex flex-row gap-[5px] items-center"><div className="w-[25px] h-[25px] bg-red-400 rounded-[5px] shadow-xl"/><p>Not Available</p></div>
            </div>
            <section className="w-[80%] h-max flex flex-wrap flex-row gap-5 py-3 justify-center">
                <Table table_id={"1"} table_number={"1"} chair_count={5} status={"reserved"}/>
                <Table table_id={"2"} table_number={"2"} chair_count={5} status={""}/>
                <Table table_id={"3"} table_number={"3"} chair_count={5} status={""}/>
                <Table table_id={"4"} table_number={"4"} chair_count={5} status={""}/>
                <Table table_id={"5"} table_number={"5"} chair_count={5} status={"reserved"}/>
                <Table table_id={"6"} table_number={"6"} chair_count={5} status={"reserved"}/>
                <Table table_id={"7"} table_number={"7"} chair_count={5} status={"reserved"}/>
                <Table table_id={"8"} table_number={"8"} chair_count={5} status={"reserved"}/>
            </section>
        </section>
    );
}