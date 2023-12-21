import React from 'react';
import './App.css';
import {Home} from "./views/home";
import {SearchBar} from "./views/searchBar";
import {NavBar} from "./views/navBar/NavBar";
import {Tables} from "./views/tables/Tables";
import {SignIn} from "./views/SignIn/SignIn";
import {Signup} from "./views/Signup/Signup";

function App() {
    return (
        <div className="App">
           {/* <NavBar/>
            <main className="relative top-[50px] bg-gray-100">
                <Home/>
                <SearchBar/>
                <Tables/>
            </main>*/}
            {/*<SignIn/>*/}
            <Signup/>
        </div>
    );
}

export default App;
