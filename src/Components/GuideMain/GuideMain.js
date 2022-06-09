import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Locations from "./components/Locations/Locations";
import Videos from "./components/Videos/Videos";
import galaxybg from "../../assets/images/location/galaxy.jpg";

import "./Main.css";
import ORES_INGOTS from "./components/Ores_Ingots/Ores_Ingots";

function Welcome() {
    return (
        <section className="textSection">
            <h2>Welcome to the guide</h2>
            <hr />
            <p>
                Utilize this section to increase brainpower to never before seen levels. You'll earn
                social pointz and spacecredits if u read all this.
            </p>
            <p>
                Navigate between the different topics to find what you are looking for. If there is
                information missing that would be beneficial to add then make sure to tell us in{" "}
                <strong>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        title="Discord"
                        className="discord_link"
                        href="https://discord.com/invite/GmwabFt"
                    >
                        discord <i className="discord fab fa-discord fa-1x"></i>
                    </a>
                </strong>
            </p>
        </section>
    );
}

function GuideMain() {
    let { path, url } = useRouteMatch();

    return (
        <main>
            <div id="flex-container">
                <ul>
                    <li>
                        <Link to={`${url}/locations`}>Locations</Link>
                    </li>

                    <li>
                        <Link to={`${url}/ores&ingots`}>Ores & Ingots</Link>
                    </li>
                    <li>
                        <Link to={`${url}/videos`}>Videos</Link>
                    </li>
                </ul>
            </div>

            <section
                className="guide"
                style={{
                    backgroundImage: `url(${galaxybg})`,
                }}
            >
                <Switch>
                    <Route path={`${path}/`} exact>
                        <Welcome />
                    </Route>
                    <Route path={`${path}/ores&ingots`} exact>
                        <ORES_INGOTS />
                    </Route>
                    <Route path={`${path}/locations`} exact>
                        <Locations />
                    </Route>

                    <Route path={`${path}/videos`} exact>
                        <Videos />
                    </Route>
                    {/* On invalid guide path Redirect To Guide Welcome page */}
                    <Route path={`${path}/*`}>
                        <Welcome />
                    </Route>
                </Switch>
            </section>
        </main>
    );
}

export default GuideMain;
