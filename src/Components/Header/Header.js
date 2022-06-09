import React, { useState } from "react";
import Video from "../useable/VIdeo/Video";
import "./Header.css";

function Header(props) {
    return (
        <>
            <header>
                <div
                    className="hero"
                    style={{
                        backgroundImage: props.bg,
                    }}
                >
                    {/* <!-- HERO LANDING PAGE --> */}
                    <div className="content">
                        {props.type === "index" ? (
                            <>
                                <h1>
                                    Welcome to <span className="txt-4">Space</span>Ex
                                </h1>
                            </>
                        ) : (
                            <>
                                <h1>
                                    Welcome to the <span className="txt-4">guide</span>
                                </h1>
                                <p>Hail to our deity Elon Muzk</p>
                            </>
                        )}

                        <div className="server_status">
                            <span className="status_row">
                                <i className="fas fa-signal"></i>
                                <span className="name">Connection</span>
                                <span className="value uptime">{props.data.uptime}%</span>
                            </span>
                            <span className="status_row">
                                <i className="fas fa-users"></i>
                                <span className="name">Astronauts alive</span>
                                <span className="value">
                                    {props.data.players} / {props.data.maxplayers}
                                </span>
                            </span>
                        </div>

                        <Video src={props.src} />
                    </div>
                </div>
            </header>
            {props.children}
        </>
    );
}

export default Header;
