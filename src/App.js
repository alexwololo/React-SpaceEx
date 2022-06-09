import React, { useEffect, useState } from "react";

import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import IndexMain from "./Components/IndexMain/IndexMain";
import GuideMain from "./Components/GuideMain/GuideMain";
import Footer from "./Components/Footer/Footer";

// Imports to use Router which we use for navigation
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing images
import indexHero from "./assets/images/hero_earth.jpg";
import guideHero from "./assets/images/SE_trade2.jpg";

function App() {
    const [data, setData] = useState("");

    async function getData() {
        let res = await fetch(
            "https://space-engineers.com/api/?object=servers&element=detail&key=nrYXkv5jZLjwhTDXPwAh2vXl3QrrCATxyD"
        );
        let json = await res.json();
        setData(() => json);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Router>
            <Nav data={data} />
            <Switch>
                <Route path="/" exact>
                    <Header
                        data={data}
                        src="https://www.youtube.com/embed/TeVbYCIFVa8?&modestbranding=1&autoplay=1&mute=1&controls=1&fs=0&loop=1&rel=0&showinfo=0&disablekb=1"
                        bg={`linear-gradient(rgba(45, 45, 45, 0.5),rgba(45, 45, 45, 0.5)),url(${indexHero})`}
                        type="index"
                    >
                        <IndexMain />
                    </Header>
                </Route>

                <Route path="/guide">
                    <Header
                        data={data}
                        src="https://www.youtube.com/embed/dQTgX40R-IQ?&autoplay=1&mute=1"
                        bg={`linear-gradient(rgba(45, 45, 45, 0.5),rgba(45, 45, 45, 0.5)),url(${guideHero})`}
                        type="guide"
                    >
                        <GuideMain />
                    </Header>
                </Route>

                {/* On invalid path Redirect To Home page */}
                <Route path="*">
                    <Header
                        data={data}
                        src="https://www.youtube.com/embed/TeVbYCIFVa8?&modestbranding=1&autoplay=1&mute=1&controls=1&fs=0&loop=1&rel=0&showinfo=0&disablekb=1"
                        bg={`linear-gradient(rgba(45, 45, 45, 0.5),rgba(45, 45, 45, 0.5)),url(${indexHero})`}
                        type="index"
                    >
                        <IndexMain />
                    </Header>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
