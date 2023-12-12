import React from 'react';
import './App.css';
import {Home} from "./views/home";
import {SearchBar} from "./views/searchBar";
import {NavBar} from "./views/navBar/NavBar";
import {Table} from "./views/table/Table";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <main className="relative top-[50px]">
                <Home/>
                <SearchBar/>
                <Table table_id={"1"} table_number={"1"} chair_count={5} status={"reserved"}/>
                <Table table_id={"1"} table_number={"1"} chair_count={5} status={""}/>
                <Table table_id={"1"} table_number={"1"} chair_count={5} status={""}/>
            </main>
        </div>
    );
}

export default App;
