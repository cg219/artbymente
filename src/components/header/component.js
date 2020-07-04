import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles";

export const Header = props => {
    const nav = props.nav ? (
                <nav className={styles.Nav}>
                    { props.nav.map(nav => {
                        if (nav.internal) {
                            return <NavLink activeClassName={styles.ActiveLink} exact to={nav.url} key={nav.name}><p>{nav.name}</p></NavLink>
                        } else {
                            return <a href={nav.url} target="_blank" key={nav.name}><p>{nav.name}</p></a>
                        }
                    })}
                </nav>
            ) : null;

    return (
        <Fragment>
            <header className={props.isChild ? `${styles.Header} ${styles.IsChild}` : styles.Header}>
                <div className={styles.ProfileContainer}>
                    <div className={styles.Horizontal}>
                        <div className={styles.Profile}></div>
                        <div className={styles.Vertical}>
                            <p className={styles.Name}>Mente Gee</p>
                            <p className={styles.Title}>Traditional and Digital Artist</p>
                        </div>
                    </div>
                    <div className={styles.Social}>
                        { props.socials.map(social => {
                            if (social.internal) {
                                return <div className={`${styles.SocialIcon} ${styles[social.name]}`} key={social.name}><Link to={social.url}></Link></div>
                            } else {
                                return <div className={`${styles.SocialIcon} ${styles[social.name]}`} key={social.name}><a href={social.url} target="_blank" alt={social.name}></a></div>
                            }
                        })}
                    </div>
                </div>
            </header>
            { nav }
        </Fragment>
    )
}
