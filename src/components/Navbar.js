import React from "react";
import worldIcon from "../images/Path.png"

export default function Navbar()
{
    return(
        <div className="nav">
            <div className = "nav--div-img">
                <img src = {worldIcon} />
            </div>
            <div className = "nav--div-span">
                <span>my travel journal.</span>
            </div>
        </div>
    )
}