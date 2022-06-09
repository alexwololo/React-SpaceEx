import React from "react";
import IconTile from "./components/IconTile";
import Section from "./components/Section";

// importing images
import index from "../../assets/images/SE-black.jpg";
import sectionBg_1 from "../../assets/images/SE_stars.jpg";
import sectionBg_2 from "../../assets/images/SE_factions2.jpg";
import sectionBg_3 from "../../assets/images/SE_blueprint.jpg";
import sectionBg_4 from "../../assets/images/SE_trade.jpg";
import sectionBg_5 from "../../assets/images/SE_pvp.jpg";
import sectionBg_6 from "../../assets/images/SE_miner.jpg";

import "./Main.css";

function IndexMain() {
    // saving properties that are different
    const iconTile = [
        {
            cls: "youtube",
            link: "https://www.youtube.com/c/SpaceX",
            heading: "Visit our YouTube channel",
            hoverText: "YouTube",
        },
        {
            cls: "discord",
            link: "https://discord.com/invite/GmwabFt",
            heading: "Come join us in Discord",
            hoverText: "Discord",
            cond: true,
        },
        {
            cls: "steam",
            link: "https://en.wikipedia.org/wiki/Universe",
            heading: "Explore the Universe",
            hoverText: "Steam",
        },
    ];

    // saving properties that are different
    const sections = [
        {
            inner: "Enjoy",
            outer: " an endless universe",
            heading: "Space is big, roam freely and discover endlessly.",
            bg: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),url(${sectionBg_1})`,
        },
        {
            inner: "lifestyles",
            outer: "Different ",
            heading:
                "Fly rockets, mine great roids or make spacecoffee Theres something for everybody.",
            bg: `linear-gradient(270deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),url(${sectionBg_2})`,
        },
        {
            inner: "Inventive",
            outer: " freedom",
            heading:
                "Build efficent and awe-inspiring constructions. Create a timemachine or maybe make a wormhole",
            bg: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),url(${sectionBg_3})`,
        },
        {
            inner: " somebody",
            outer: "Be ",
            heading: "Earn social points and date Elons hot Botz.",
            bg: `linear-gradient(270deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),url(${sectionBg_4})`,
        },
        {
            inner: "Beware",
            outer: " the pirates",
            heading: "Spacepirates may want to steal ur spacecoffee.",
            bg: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),url(${sectionBg_5})`,
        },
        {
            inner: " Earth?",
            outer: "Revisit  ",
            heading:
                "If u dont fill the quatas u will find urself delegated to a earth penal miner",
            bg: `linear-gradient(270deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%),url(${sectionBg_6})`,
        },
    ];

    return (
        <>
            {/* rendering childs  */}
            <section id="icons">
                <div
                    className="flex-items"
                    style={{
                        backgroundImage: `url(${index})`,
                    }}
                >
                    {iconTile.map((ele, i) => (
                        <IconTile value={ele} key={i} cond={ele.cond} />
                    ))}
                </div>
            </section>

            {/* rendering childs  */}
            <section id="main-section">
                {sections.map((ele, i) => (
                    <Section value={ele} pos={(i + 1) % 2 === 0 ? false : true} key={i} />
                ))}
            </section>
        </>
    );
}

export default IndexMain;
