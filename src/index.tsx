import React, { Component, Fragment } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./components/header/component.tsx";
import { Gallery } from "./components/gallery/component.tsx";
import { Newsletter } from "./components/newsletter/component.tsx";
import { Contact } from "./components/contact/component.tsx";
import { Artwork } from "./components/artwork/component.tsx";
import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            social: [{
                name: 'Instagram',
                url: 'https://www.instagram.com/kreativemente/'
            }, {
                name: 'Facebook',
                url: 'https://www.facebook.com/artbymente/'
            }, {
                name: 'Twitter',
                url: 'https://twitter.com/kreativemente'
            }, {
                name: 'Email',
                url: '/contact',
                internal: true
            }],
            nav: [{
                name: 'Portfolio',
                url: '/',
                internal: true
            }, {
                name: 'Shop',
                url: 'https://www.inprnt.com/gallery/kreativemente/'
            }, {
                name: 'Contact',
                url: '/contact',
                internal: true
            }]
        }
    }

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path={["/", "/contact"]}>
                        <Header socials={this.state.social} nav={this.state.nav} />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/art/:slug" render={(routerProps) => <Artwork socials={this.state.social} {...routerProps} />} />
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Gallery />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path={["/", "/contact"]}>
                        <footer className="Footer">
                            <Newsletter />
                        </footer>
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}

createRoot(document.getElementById('artbymente')!).render(
    <BrowserRouter>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </BrowserRouter>,
)
