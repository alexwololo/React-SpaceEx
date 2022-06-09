import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import VanillaTilt from "vanilla-tilt";

function Nav({ data }) {
    useEffect(() => {
        // setting menu
        let menu = document.querySelector(".menu-icon");
        let ul = document.querySelector("#nav-link ul");

        menu.addEventListener("click", () => {
            ul.classList.toggle("active");
        });

        VanillaTilt.init(document.querySelector(".logo"), {
            max: 25,
            speed: 400,
            scale: 1.3,
        });
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">
                    <span className="txt-4">SPACE</span>EX
                </a>
            </div>
            {data.is_online === "1" ? (
                <button className="status-btn online-btn" id="mbl_status">
                    Online
                </button>
            ) : (
                <button className="status-btn offline-btn" id="mbl_status">
                    Offline
                </button>
            )}
            <div id="nav-link">
                <span className="menu-icon fas fa-bars"></span>
                <ul>
                    <li>
                        {data.is_online === "1" ? (
                            <button className="status-btn online-btn" id="pc_status">
                                Online
                            </button>
                        ) : (
                            <button className="status-btn offline-btn" id="pc_status">
                                Offline
                            </button>
                        )}
                    </li>
                    <li>
                        <a href="https://www.spacex.com/" rel="noreferrer" target="_blank">
                            SPACEEX
                        </a>
                    </li>
                    <li>
                        <Link to="/guide">GUIDE</Link>
                    </li>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
