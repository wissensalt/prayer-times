import React from "react";
import {PrayItem} from "./PrayItem";
import "bootstrap/dist/css/bootstrap.min.css"

export const PrayItems = () => {
    return (
        <div className="container">
            <div className="row">
                <PrayItem/>
                <PrayItem/>
                <PrayItem/>
                <PrayItem/>
                <PrayItem/>
                <PrayItem/>
            </div>
        </div>
    )
};