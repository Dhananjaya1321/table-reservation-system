import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function ContactDetail({icon, topic, detail}: props) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div
                className="min-w-[45px] h-[45px] bg-blue-100 rounded-[100%] flex flex-col justify-center">
                <FontAwesomeIcon className="text-blue-600 text-2xl" icon={icon}/>
            </div>
            <div>
                <p className="text-xl">{topic}</p>
                <p>{detail}</p>
            </div>
        </div>
    );
}

type props = {
    icon: IconDefinition,
    topic: string,
    detail: string
}