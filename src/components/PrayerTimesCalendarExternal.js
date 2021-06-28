import axios from "axios";

export const PrayerTimesCalendarExternal = async (month, year) => {
    return await axios.get(
        "https://api.aladhan.com/v1/calendarByCity" +
        `?city=Jakarta` +
        `&country=Indonesia` +
        "&method=11" +
        `&month=${month}` +
        `&year=${year}` +
        "&latitudeAdjustmentMethod=3"
    ).then(res => {
        if (res === null || res.data === null || res.data.code !== 200) {
            alert("Failed to get res from api.aladhan.com");
        }

        return res.data;
    });
};