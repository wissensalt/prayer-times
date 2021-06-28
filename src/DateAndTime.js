import { useState, useEffect } from "react";
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {ALATHAN} from "./components/Constants";

export const DateAndTime = ({locale}) => {
    const [today, setDate] = useState(new Date());
    useEffect(() => {
            const timer = setInterval(() => {
                setDate(new Date());
            }, 1000);
            return () => {
                clearInterval(timer);
            }
        }, []
    );

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Night'}`;

    const time = today.toLocaleTimeString(
        locale,
        { hour: '2-digit', hour24: true, minute: '2-digit', second: '2-digit' }
    );

    const alathanData = JSON.parse(localStorage.getItem(ALATHAN));
    let hijriDate = null;
    if (alathanData !== null || true) {
        const currentHijriDate = alathanData.data[today.getDate()].date.hijri;
        hijriDate = `/ ${currentHijriDate.weekday.en}, ${currentHijriDate.day} ${currentHijriDate.month.en} 
                    ${currentHijriDate.year}`;
    }

    return (
        <div className="container p-5">
            <div className="row">
                <h3 className="display-6">
                    {wish}
                </h3>
                <h1 className="display-5">
                    {date} {hijriDate}
                </h1>
                <h5>
                    {time}
                </h5>
            </div>

        </div>
    )
};