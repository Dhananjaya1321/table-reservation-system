import {Component} from "react";
import logo from "../../assets/image/logo.png";
export class NavBar extends Component {
    render() {
        return (
            <header className="fixed top-0 w-full h-[50px] z-50 flex justify-between bg-[#404040]">
                <div className="w-full h-full flex justify-start">
                    <img src={logo} className="w-[50px] h-[50px] self-start"/>
                </div>
                <div className="w-full h-full flex items-center justify-end">
                    <menu className="">
                        <li className="inline mx-5 text-white">Home</li>
                        <li className="inline mx-5 text-white">About</li>
                        <li className="inline mx-5 text-white">Tables</li>
                        <li className="inline mx-5 text-white">Contact</li>
                    </menu>
                </div>
            </header>
        );
    }
}