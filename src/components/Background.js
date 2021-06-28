import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {PrayItems} from "./PrayItems";
import {DateAndTime} from "../DateAndTime";

export const Background = () => {
    const backgroundColors = [
        "linear-gradient(to bottom, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1))",
        "linear-gradient(to bottom, #FFFDE4, #005AA7)",
        "linear-gradient(to bottom, #283c86, #45a247)",
        "linear-gradient(to bottom, #c0392b, #8e44ad)",
        "linear-gradient(to bottom, #159957, #155799)",
        "linear-gradient(to bottom, #56ccf2, #2f80ed)",
        "linear-gradient(to bottom, #eb5757, #000000)",
        "linear-gradient(to bottom, #e44d26, #f16529)",
        "linear-gradient(to bottom, #4ac29a, #bdfff3)",
        "linear-gradient(to bottom, #b2fefa, #0ed2f7)",
        "linear-gradient(to bottom, #20002c, #cbb4d4)",
        "linear-gradient(to bottom, #c33764, #1d2671)",
        "linear-gradient(to bottom, #34e89e, #0f3443)",
        "linear-gradient(to bottom, #6190e8, #a7bfe8)",
        "linear-gradient(to bottom, #44a08d, #093637)",
        "linear-gradient(to bottom, #4568dc, #b06ab3)",
        "linear-gradient(to bottom, #43c6ac, #191654)",
        "linear-gradient(to bottom, #093028, #237a57)",
        "linear-gradient(to bottom, #3494e6, #ec6ead)"
    ];


    const [cover, setCover] = useState({
        display: "flex",
        alignItems: "center",
        paddingBottom: "100%",
        background: "linear-gradient(to bottom, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1))",
        backgroundPosition: "fixed"
    });

    useEffect(() => {
            const timer = setInterval(() => {
                setCover({
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "100%",
                    background: backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
                });
            }, 3 * 1000);
            return () => {
                clearInterval(timer);
            }
        }
    );

    return (
        <div style={cover}>
            <div className="row">
                <DateAndTime/>
                <PrayItems/>
            </div>
        </div>
    );
};