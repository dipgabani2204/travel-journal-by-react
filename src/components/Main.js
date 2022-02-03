import React from "react";
import locIcon from "../images/location.png"

export default function Main(props)
{
    return(
        <div className="card">
            <div className="card--img">
                <img src={`../images/${props.item.img}`} />
            </div>
            <div className = "card--content">
                <div className="location">
                    <img src={locIcon} className="loc--img" />
                    <span className="loc--lc">{props.item.location}</span>
                    <span className="loc--map"><a href="#" >{props.item.mapLink}</a></span>
                </div>

                <div>
                    <h3 className="title">{props.item.title}</h3>
                </div>

                <div className="date">
                    <span>{`${props.item.startDate} - ${props.item.endDate}`}</span>
                </div>

                <div className="desc">
                    <p className="text">{props.item.description}</p>
                </div>

            </div>
        </div>
    )
}