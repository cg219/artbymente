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
                    const classes = item.nsfw ? [styles.GalleryItem, styles.NSFW].join(' ') : styles.GalleryItem;
                    return (
                        <div className={classes} key={item.slug}>
                            <div className={styles.Image} style={{backgroundImage: `url(${item.image.url})`}}></div>
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
