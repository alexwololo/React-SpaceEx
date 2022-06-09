import React from "react";
import bg3 from "../../../../assets/images/location/background3.png";
import bg4 from "../../../../assets/images/location/background4.png";
import bg6 from "../../../../assets/images/location/background6.png";
import bg7 from "../../../../assets/images/location/background7.png";
import bg8 from "../../../../assets/images/location/background8.png";
import planetEarth from "../../../../assets/images/location/planet_earth.png";
import planetThora from "../../../../assets/images/location/planet_thora.png";
import planetTriton from "../../../../assets/images/location/planet_triton.png";
import moonEarth from "../../../../assets/images/location/moon_earth_moon.png";
import moonEurope from "../../../../assets/images/location/moon_europe.png";

import "./Locations.css";

const Location = ({ data }) => {
    return (
        <div
            className={`location ${data.animation}`}
            style={{
                backgroundImage: `url(${data.bg})`,
            }}
        >
            {data.img && <img src={data.img} alt="" />}
            <div className="text">
                <h4>{data.name}</h4>
                <p>{data.desc}</p>
                {data.type === "planet" ? (
                    <>
                        <span>{data.gravity}</span>
                        <span>{data.altitude}</span>
                    </>
                ) : data.type === "station" ? (
                    <span>{data.gps}</span>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

function Locations() {
    const planets = [
        {
            bg: bg3,
            img: planetEarth,
            name: "Earth",
            type: "planet",
            animation: "rotateCircleZoom",
            desc: "The classical planet Earth is a rocky terrestrial. Its surface contains mountains, valleys, canyons, and plains. There are three biomes tundra, desert, and grassland.",
            gravity: "Gravity: 1.0 g = 9.8m/s2",
            altitude: "Max Altitude with gravity: 42.860 m",
        },

        {
            bg: bg4,
            img: planetThora,
            name: "Thora",
            type: "planet",
            animation: "rotateCircleZoom",
            desc: "Thorium is needed to make Thorium Fuel Cells, Quantum Computers, and Zone Chips. It is available in small amounts on the planet Thora",
            gravity: "Gravity: 1.4",
            altitude: "Max Altitude with gravity: ? m",
        },

        {
            bg: bg8,
            img: planetTriton,
            name: "Triton",
            type: "planet",
            animation: "rotateCircleZoom",
            desc: "A cold son of a gun",
            gravity: "Gravity: 1.0 g = 9.8m/s2",
            altitude: "Max Altitude with gravity: 36.000",
        },
    ];

    const moons = [
        {
            bg: bg6,
            img: moonEarth,
            name: "The Moon",
            type: "planet",
            animation: "rotateCircleZoom",
            desc: "The Moon is the chesecake in the sky.",
            gravity: "Gravity: 1.0 g = 9.8m/s2",
            altitude: "Max Altitude with gravity: 36.000",
        },
        {
            bg: bg7,
            img: moonEurope,
            name: "Europe",
            type: "planet",
            animation: "rotateCircleZoom",
            desc: "The smallest moon, consisting entirely of ice.",
            gravity: "Gravity: 1.0 g = 9.8m/s2",
            altitude: "Max Altitude with gravity: 36.000",
        },
    ];

    return (
        <section className="multiSection">
            <section>
                <h2>Location</h2>
                <hr />
                <p>
                    Yea space is empty - these are the only documented places we have found sofar...
                    or is it?
                </p>
            </section>

            <section className="locations">
                <h3>Planets</h3>
                {planets.map((planet) => (
                    <Location data={planet} key={planet.name} />
                ))}
            </section>
            <section className="locations">
                <h3>Moons</h3>
                {moons.map((moon) => (
                    <Location data={moon} key={moon.name} />
                ))}
            </section>
        </section>
    );
}

export default Locations;
