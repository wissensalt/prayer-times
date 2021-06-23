import axios from "axios";
import {ALATHAN} from "./Constants";

export const PrayerTimesCalendarExternal = (latitude, longitude, month, year) => {
    if (localStorage.getItem(ALATHAN) !== null) {
        return;
    }

    axios.get("https://api.aladhan.com/v1/calendarByCity" +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        "&method=11" +
        `&month=${month}` +
        `&year=${year}` +
        "&latitudeAdjustmentMethod=3")
        .then(res => {
            if (res === null || res.data === null || res.data.code !== 200) {
                alert("Failed to get data from api.aladhan.com");
            }

            localStorage.setItem(ALATHAN, JSON.stringify(res.data));
        })
};