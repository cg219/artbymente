import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
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
            },
            filtered: false
        }
    }

    hideFilter = () => this.setState({filtered: false})
    loadData = () => {
        api.get(`artworks/${this.props.match.params.slug}`)
            .then(({ data }) => this.setState({data: data.data, filtered: data.data.nsfw}))
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        if (this.props.match.params.slug !== this.state.data.slug) {
            this.loadData();
        }
    }

    render() {
        const prints = this.state.data.hasPrints ? <div className={styles.Buy}>Buy a print<a href={this.state.data.link} target="_blank"></a></div> : null;
        const filter = (
            <div className={styles.Filter}>
                <h1>Mature Content</h1>
                <p>This artwork is for mature audiences only.</p>
                <button onClick={this.hideFilter}>Show artwork</button>
            </div>
        )

        return (
            <div className={styles.Artwork}>
                <Helmet>
                    <title>Artbymente: Art of Mente - {this.state.data.title}</title>
                    <meta name="pinterest-rich-pin" content="false" />
                    <meta name="twitter:site" content="@kreativemente" />
                    <meta name="twitter:creator" content="@kreativemente" />
                    <meta name="image" content={this.state.data.image.url} />
                    <meta property="og:title" content={`${this.state.data.title}: Art of Mente Gee`} />
                    <meta property="og:image" content={this.state.data.image.url} />
                </Helmet>
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
                        <Share title={this.state.data.title} image={this.state.data.image.url} url={window.location.href} />
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
                <div className={styles.ImageContainer}>
                    <div className={styles.Back}><Link to="/"></Link></div>
                    { this.state.filtered ? filter : null }

                    <div className={styles.Image} style={{backgroundImage: `url(${this.state.data.image.url})`}}></div>
                </div>
            </div>
        )
    }
}
