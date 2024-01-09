import React, {useEffect, useState} from "react";
import {Table} from "../Table/Table";
import {api} from "../../config/config";

export function Tables() {
    let [tables, setTables] = useState([]);

    let getAllTables = async () => {
        try {
            api.get("admin/all/table").then((rep: any) => {
                setTables(rep.data);
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
    }, []);
    return (
        <section id="tables-section" className="w-full flex justify-center flex-col items-center">
            <div className="w-[80%] h-[30px] flex flex-row flex-wrap gap-[25px]">
                <div className="flex flex-row gap-[5px] items-center"><div className="w-[25px] h-[25px] bg-emerald-400 rounded-[5px] shadow-xl"/><p>Available</p></div>
                <div className="flex flex-row gap-[5px] items-center"><div className="w-[25px] h-[25px] bg-red-400 rounded-[5px] shadow-xl"/><p>Not Available</p></div>
            </div>
            <section className="w-[80%] h-max flex flex-wrap flex-row gap-5 py-3 justify-center">
                {
                    tables.map((table:any)=>(
                        <Table table_id={table.table_id} table_number={table.table_number} chair_count={4} status={""}/>
                    ))
                }
            </section>
        </section>
    );
}
