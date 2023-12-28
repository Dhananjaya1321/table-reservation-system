import React from "react";
export function Form({children,classes}:props) {
    return (
        <form className={classes}>
            {children}
        </form>
    );
}

type props={
    children:any,
    classes:string
}