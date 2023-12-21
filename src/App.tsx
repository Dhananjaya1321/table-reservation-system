import React from 'react';
import './App.css';
import {Home} from "./views/Home/Home";
import {SearchBar} from "./views/SearchBar/SearchBar";
import {NavBar} from "./views/NavBar/NavBar";
import {Tables} from "./views/Tables/Tables";
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
