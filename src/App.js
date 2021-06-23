import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/app.css"
import {Background} from "./components/Background";
import {PrayItem} from "./components/PrayItem";
import {PrayerTimesCalendarExternal} from "./components/PrayerTimesCalendarExternal";

class App extends React.Component{

    state = {
        location: {
            latitude: 0.0,
            longitude: 0.0,
        }
    };

    componentDidMount() {
        const location = window.navigator && window.navigator.geolocation;
        location.getCurrentPosition((position) => {
            this.setState({
                location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
        }, (error) => {
            this.setState({
                location: {
                    latitude: 0.0,
                    longitude: 0.0
                }
            });
        });
    }

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
