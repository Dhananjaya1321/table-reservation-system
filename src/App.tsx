import React from 'react';
import './App.css';
import {Home} from "./component/home";
import {SearchBar} from "./component/searchBar";

function App() {
    return (
        <div className="App">
            <main>
                <Home/>
                <SearchBar/>
            </main>
        </div>
    );
}

export default App;
