import React from 'react';
import './App.css';
import {Home} from "./views/home";
import {SearchBar} from "./views/searchBar";
import {NavBar} from "./views/navBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <main className="relative top-[50px]">
                <Home/>
                <SearchBar/>
            </main>
        </div>
    );
}

export default App;
