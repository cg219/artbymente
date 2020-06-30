import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "./components/header/component";
import { Gallery } from "./components/gallery/component";
import "./styles";

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
                    <Route exact path="/">
                        <Gallery />
                    </Route>
                </Switch>
                <h1>Welcome to Art By Mente</h1>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('artbymente')
);
