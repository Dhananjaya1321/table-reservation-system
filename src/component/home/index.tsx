import React from 'react';
import image from "../../assets/image/restaurant-hall-with-lots-table.jpg";

export function Home() {
    return (
        <section className="relative">
            <div id="home-img" className="relative h-full"
                 style={{background: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
            <div className="bg-gray-950 opacity-0 w-2/4 h-full absolute top-0 sm:opacity-25"/>
            <div id="home-right-side-cover" className="flex f-col w-full h-full absolute top-0 right-0 sm:w-2/4">
                <div className="bg-gray-950 absolute opacity-50 w-full h-full relative"/>
                <h1 id="home-topic"
                    className="mx-10 text-center flex f-col top-0 absolute bottom-0 margin-auto text-5xl text-white sm:mr-5 sm:text-left sm:text-5xl md:text-6xl
                     lg:text-7xl 2xl:text-8xl"><span
                    className="text-8xl sm:text-left sm:self-start lg:text-8xl 2xl:text-10xl">FE</span> RESTAURANT<br/> RECEIVE
                    YOUR TABLE EASILY
                    <a href="#" className="sm:text-left sm:self-start"><button className="shadow-2xl hover:text-sky-500 hover:bg-sky-50  text-2xl bg-sky-500 px-4 py-1 rounded mt-4 sm:text-left sm:self-start">BOOK NOW
                    </button></a>
                </h1>
            </div>
        </section>
    )
}