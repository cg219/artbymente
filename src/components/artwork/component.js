import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "./../header/component";
import { Newsletter } from "./../newsletter/component";
import { Share } from "./../share/component";
import styles from "./styles";

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

    render() {
        const prints = this.state.data.hasPrints ? <div className={styles.Buy}><a href={this.state.data.link} target="_blank"></a></div> : null;
        const filter = (
            <div className={styles.Filter}>
                <h1>Mature Content</h1>
                <p>This artwork is for mature audiences only.</p>
                <button>Show artwork</button>
            </div>
        )

        return (
            <Fragment>
                <div className={styles.Container}>
                    <div className={styles.InfoPanel}>
                        <div className={styles.Back}><Link to="/"></Link></div>
                        <Header socials={this.props.socials} />
                        <h1 className={styles.Title}>{this.state.data.title}</h1>
                        <aside>
                            <span className={styles.Views}>{this.state.data.views} Views</span>
                        </aside>
                        <p className={styles.Description}>{this.state.data.description}</p>
                        { prints }
                        <h1 className={styles.Subtitle}>You may also like...</h1>
                        <Share />
                        <div className={styles.Related}>
                            { this.state.data.related.map(image => {
                                return (
                                    <div className={image.nsfw ? `${styles.RelatedItem} ${styles.NSFW}` : styles.RelatedItem}>
                                        <img src={image.image.url} alt={image.image.filename} />
                                        <Link to={`/art/${image.slug}`}></Link>
                                    </div>
                                )
                            })}
                        </div>
                        <Newsletter />
                    </div>
                </div>
                <div className={styles.Image}>
                    <div className={styles.Back}><Link to="/"></Link></div>
                    { this.state.data.nsfw ? filter : null }
                    <img src={this.state.data.image.url} alt={this.state.data.image.filename}/>
                </div>
            </Fragment>
        )
    }
}
