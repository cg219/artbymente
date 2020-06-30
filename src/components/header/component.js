import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

export const Header = props => {
    return (
        <Fragment>
            <header className={styles.Header}>
                <div className={styles.ProfileContainer}>
                    <div className={styles.Profile}></div>
                    <p className={styles.Name}>Mente Gee</p>
                    <p className={styles.Title}>Traditional and Digital Artist</p>
                    <div className={styles.Social}>
                        { props.socials.map(social => {
                            if (social.internal) {
                                return <div className={styles.SocialIcon} key={social.name}><Link to={social.url}>{social.name}</Link></div>
                            } else {
                                return <div className={styles.SocialIcon} key={social.name}><a href={social.url} target="_blank" alt={social.name}>{social.name}</a></div>
                            }
                        })}
                    </div>
                </div>
            </header>
            <nav className={styles.Nav}>
                { props.nav.map(nav => {
                    if (nav.internal) {
                        return <Link to={nav.url} key={nav.name}><p>{nav.name}</p></Link>
                    } else {
                        return <a href={nav.url} target="_blank" key={nav.name}><p>{nav.name}</p></a>
                    }
                })}
            </nav>
        </Fragment>
    )
}
