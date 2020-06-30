import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./styles";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
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
