import React from "react";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Landing />
            <About />
        </div>
    );
};

export default App;
