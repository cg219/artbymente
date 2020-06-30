import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles";

const api = axios.create({ baseURL: process.env.API_URL });

export class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        api.get("artworks")
            .then(({ data }) => {
                this.setState({items: data.data})
            })
    }

    render() {
        return (
            <div className={styles.Gallery}>
                { this.state.items.map(item => {
                    return (
                        <div className={styles.GalleryItem} key={item.slug}>
                            <figure className={styles.Image}>
                                <img src={item.image.url} alt={item.image.filename} />
                            </figure>
                            <div className={styles.Info}>
                                <p>{item.title}</p>
                                <span>{item.mediums}</span>
                            </div>
                            <Link to={`/art/${item.slug}`}></Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}
