import React, {useState} from "react";
import {PopUpForm} from "../PopUpForm/PopUpForm";

export function Table({table_id, table_number, chair_count, status}: Props) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    let handleOpenPopup = () => {
        setPopupOpen(true);
    };

    let handleClosePopup = () => {
        setPopupOpen(false);
    };

    const table = () => {
        if (status === "reserved") {
            return <div className="w-[150px] h-[150px] rounded-[100%] bg-red-400 z-10 shadow-2xl"/>;
        } else {
            return <div className="w-[150px] h-[150px] rounded-[100%] bg-emerald-400 z-10 shadow-2xl"/>;
        }
    };

    return (
        <div className="w-max h-max relative flex items-center justify-center">
            <div className="w-[250px] h-[250px] flex items-center justify-center">
                {table()}
                <div className="w-[156px] h-[50px] bg-black absolute rounded-[8px] rotate-45"/>
                <div className="w-[50px] h-[156px] bg-black absolute rounded-[8px] rotate-45"/>
            </div>
            <div
                className="absolute w-[250px] h-[250px] top-0 left-0 right-0 bottom-0 m-auto rounded-[20px] flex justify-center text-center items-center z-20">
                <h1 className="text-[32px]">{table_number}</h1>
            </div>
            <div
                id={table_id}/*hover:bg-black */
                className="text-3xl flex-col opacity-0 hover:opacity-100 hover:drop-shadow-md absolute
                w-[150px] h-[150px] rounded-[20px] flex justify-center text-center items-center z-30
                top-0 left-0 right-0 bottom-0 m-auto">
                <button onClick={handleOpenPopup} className="w-[100px] h-[40px] bg-amber-400 text-xl rounded-[5px]">VIEW</button>
            </div>
            <PopUpForm isPopupOpen={isPopupOpen} isOpen={handleOpenPopup} isClose={handleClosePopup}/>
        </div>
    );
}

type Props = {
    table_id: string;
    table_number: string;
    chair_count: number;
    status: string;
};
