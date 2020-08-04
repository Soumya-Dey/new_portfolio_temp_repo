import React from "react";

import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Landing />
            <About />
            <Skills />
        </div>
    );
};

export default App;
