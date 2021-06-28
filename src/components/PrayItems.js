import React, {useState, useEffect} from "react";
import {PrayItem} from "./PrayItem";
import "bootstrap/dist/css/bootstrap.min.css"
import {PrayerTimesCalendarExternal} from "./PrayerTimesCalendarExternal";
import {ALATHAN} from "./Constants";

export const PrayItems = () => {

    const [prayerData, setPrayerData] = useState(null);

    const saveLocalStorage = (r) => {
        localStorage.setItem(ALATHAN, JSON.stringify(r));
    };

    useEffect(() => {
        const initPrayerData = () => {
            if (localStorage.getItem(ALATHAN) === null || localStorage.getItem(ALATHAN) === undefined) {
                const currentDate = new Date();
                const currentMonth = currentDate.toLocaleDateString("us",{ month: 'numeric'});
                const currentYear = currentDate.toLocaleDateString("us", { year: 'numeric'});
                PrayerTimesCalendarExternal(currentMonth, currentYear).then( r =>{
                    setPrayerData(r);
                    saveLocalStorage(r);
                });
            } else {
                setPrayerData(JSON.parse(localStorage.getItem(ALATHAN)));
            }
        };

        initPrayerData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getCurrentTimings = (prayerData) => {
        const {data} = prayerData;
        const timings = data[new Date().getDate()].timings;
        return [
            {
                key: "Fajr",
                value: timings.Fajr
            },
            {
                key: "Sunrise",
                value: timings.Sunrise
            },
            {
                key: "Dhuhr",
                value: timings.Dhuhr
            },
            {
                key: "Asr",
                value: timings.Asr
            },
            {
                key: "Sunset",
                value: timings.Sunset
            },
            {
                key: "Maghrib",
                value: timings.Maghrib
            },
            {
                key: "Isha",
                value: timings.Isha
            },
            {
                key: "Midnight",
                value: timings.Midnight
            },
            {
                key: "Imsak",
                value: timings.Imsak
            },
        ];
    };

    return (
        <div className="container">
            <div className="row">
                {
                    prayerData !== null &&
                    getCurrentTimings(prayerData).map(
                        prayItem => {
                            return <PrayItem key={prayItem.key} data={prayItem}/>
                        }
                    )
                }
            </div>
        </div>
    )
};