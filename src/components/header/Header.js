
import React from "react";

import "./header.css";

export default function Header(){
    const style = {
        width: "100vw",
        height: "250px",
        background: "url('../../../assets/images/bg-mobile-light.jpg') no-repeat",
        backgroundSize: "cover",

    }
    return (
        <header style={style}>
            <h1>TODO</h1>
        </header>
    )
}
