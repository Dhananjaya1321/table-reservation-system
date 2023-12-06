import React from 'react';
import "./style.css";
import image from "../../assets/image/restaurant-hall-with-lots-table.jpg";

export function Home() {
    return (
        <section>
            <div id="home-img" className="relative h-full" style={{background:`url(${image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                <div id="img-cover" className="bg-gray-950 opacity-25 w-full h-full absolute top-0"/>
            </div>
        </section>
    )
}