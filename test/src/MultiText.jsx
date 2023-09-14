import React, { useState } from "react";

export const MutliText = () => {
    const [multi, changeText] = useState("hello ");
    const changeFunction = (e) => {
        let msg = e.target.value;
        changeText("hello "+ msg);
    }

    return (
        <div>
            <header>This is Header {multi}</header>
            <main>This is main {multi}</main>
            <footer>This is footer {multi}</footer>
            <input type="text" onChange={changeFunction} />
        </div>
    )
};