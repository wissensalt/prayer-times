import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const PrayItem = ({data}) => {

    return (
        <div className="container col-4 p-4">
            <div className="rounded bg-gradient p-3 text-black-50">
                <h1 className="display-6">
                    <strong>{data.key}</strong>
                </h1>
                <h2>
                    {data.value}
                </h2>
            </div>
        </div>
    )
};