import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import form from "./../../_form.scss";

export const Newsletter = props => {
    const classes = props.isChild ? [styles.Newsletter, styles.IsChild].join(' ') : styles.Newsletter;

    return (
        <div className={classes}>
            <h1>Signup for Updates</h1>
            <p>Discounts, Events, New Art!</p>
            <form action="">
                <div className={form.Wrapper}>
                    <label htmlFor="name">Name</label>
                    <div className={form.InputWrapper}>
                        <input type="text" name="name" />
                    </div>
                </div>
                <div className={form.Wrapper}>
                    <label htmlFor="email">Email</label>
                    <div className={form.InputWrapper}>
                        <input type="email" name="email" />
                    </div>
                </div>
                <div className={form.Wrapper}>
                    <button>Submit</button>
                </div>
            </form>
            <p className={form.Hidden}>Thank You!</p>
        </div>
    )
}
