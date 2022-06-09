import React from "react";
import "./IconTile.css";

// destructure but could also do props.pos - see udemy
function IconTile({ value, cond }) {
    return (
        <a className={`icon-tile ${value.cls}`} href={value.link} target="blank">
            <i className={"fab fa-" + value.cls}></i>
            <h3>{value.heading}</h3>
            {cond && <h4>I AM Discord</h4>}
        </a>
    );
}

export default IconTile;
