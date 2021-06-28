import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Background} from "./components/Background";
import {PrayItem} from "./components/PrayItem";

class App extends React.Component{

    state = {
        location: {
            latitude: 0.0,
            longitude: 0.0,
        }
    };

    render() {
        return (
            <div>
                {/*<PrayerTimesCalendarExternal/>*/}
                <Background>
                    <PrayItem/>

                </Background>
                {/*{console.log((JSON.parse(localStorage.getItem("alathan"))))}*/}
            </div>
        );
    }
}

export default App;
