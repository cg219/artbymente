import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "./../header/component";
import { Newsletter } from "./../newsletter/component";
import { Share } from "./../share/component";
import styles from "./styles";
import axios from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export class Artwork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                title: '',
                views: '',
                description: '',
                related: [],
                image: {
                    url: '',
                    filename: ''
                }
            }
        }
    }

    componentDidMount() {
        api.get(`artworks/${this.props.match.params.slug}`)
            .then(({ data }) => this.setState({data: data.data}))
    }

    render() {
        const prints = this.state.data.hasPrints ? <div className={styles.Buy}>Buy a print<a href={this.state.data.link} target="_blank"></a></div> : null;
        const filter = (
            <div className={styles.Filter}>
                <h1>Mature Content</h1>
                <p>This artwork is for mature audiences only.</p>
                <button>Show artwork</button>
            </div>
        )

        return (
            <div className={styles.Artwork}>
                <div className={styles.Container}>
                    <div className={styles.InfoPanel}>
                        <div className={styles.Back}><Link to="/"></Link></div>
                        <Header className={styles.Header} socials={this.props.socials} isChild="true" />
                        <h1 className={styles.Title}>{this.state.data.title}</h1>
                        <aside>
                            <span className={styles.Views}>{this.state.data.views} Views</span>
                        </aside>
                        <p className={styles.Description}>{this.state.data.description}</p>
                        { prints }
                        <Share />
                        <h1 className={styles.Subtitle}>You may also like...</h1>
                        <div className={styles.Related}>
                            { this.state.data.related.map(image => {
                                return (
                                    <div className={image.nsfw ? `${styles.RelatedItem} ${styles.NSFW}` : styles.RelatedItem} key={image.slug}>
                                        <div className={styles.RelatedImage} style={{ backgroundImage: `url(${image.image.url})`}} />
                                        <Link to={`/art/${image.slug}`}></Link>
                                    </div>
                                )
                            })}
                        </div>
                        <Newsletter isChild="true" />
                    </div>
                </div>
                <div className={styles.Image}>
                    <div className={styles.Back}><Link to="/"></Link></div>
                    { this.state.data.nsfw ? filter : null }
                    <img src={this.state.data.image.url} alt={this.state.data.image.filename}/>
                </div>
            </div>
        )
    }
}
