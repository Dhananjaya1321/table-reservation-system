import React from "react";
import fevIcon from "../../fevicon.png";
export function Footer() {
    return (
        <footer className="mt-[50px] w-full h-max flex flex-col bg-gray-600">
            <div className="text-white flex gap-5 flex-col sm:flex-row flex-wrap justify-center sm:justify-around items-center sm:items-start my-10">
                <img className="hidden sm:block" src={fevIcon}/>
                <div className="w-full sm:w-max flex flex-col justify-center items-center">
                    <menu className="w-[70%]">
                        <li className="mb-3 text-2xl">LEGAL</li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms & conditions</a></li>
                    </menu>
                </div>
                <div className="w-full sm:w-max flex flex-col justify-center items-center">
                    <menu className="w-[70%]">
                        <li className="mb-3 text-2xl">FOLLOW US</li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </menu>
                </div>
                <div className="w-full sm:w-max flex flex-col justify-center items-center">
                    <menu className="w-[70%]">
                        <li className="mb-3 text-2xl">LINKS</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Tables</a></li>
                        <li><a href="#">Contact</a></li>
                    </menu>
                </div>
            </div>
            <div className="w-[80%] h-[1px] bg-white flex self-center"></div>
            <div className="text-white flex flex-row my-5 items-center justify-center">
                <p>© 2023 Isuru Dhananjaya</p>
            </div>
        </footer>
    );
}