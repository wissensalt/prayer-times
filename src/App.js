import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/app.css"
import {Background} from "./components/Background";
import {PrayItem} from "./components/PrayItem";

const App = () => {
    return (
        <div>
            <Background>
                <PrayItem/>
            </Background>
        </div>
    );
};
export default App;
