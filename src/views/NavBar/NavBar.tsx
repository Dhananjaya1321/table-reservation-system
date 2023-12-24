import {Component} from "react";
import logo from "../../assets/image/logo.png";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
export class NavBar extends Component {
    render() {
        return (
            <header className="fixed top-0 w-full h-[50px] z-50 flex md:justify-between bg-[#404040]">
                <div className="w-max h-full flex justify-start">
                    <img src={logo} className="w-[50px] h-[50px] self-start"/>
                </div>
                <div className="w-full h-full flex items-center justify-end">
                    <menu className="">
                        <li className="hidden sm:inline mx-5 text-white">Home</li>
                        <li className="hidden sm:inline mx-5 text-white">About</li>
                        <li className="hidden sm:inline mx-5 text-white">Tables</li>
                        <li className="hidden sm:inline mx-5 text-white">Contact</li>
                        <li className="inline mx-5 text-white">
                            <Button
                                variant="contained"
                                color="info"
                            >
                                <Link to="/signin">Sign In</Link>
                            </Button>
                        </li>
                    </menu>
                </div>
            </header>
        );
    }
}