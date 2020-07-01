import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import form from "./../../_form.scss";

export const Contact = props => {
    return (
        <div className={styles.Contact}>
            <p>For any art inquiries, requests for originals or commission questions, please drop me anote or email me at <a href="mailto:contact@artbymente.com">contact@arybymente.com</a>. All fields are required</p>
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
                    <label htmlFor="message">Email</label>
                    <div className={form.InputWrapper}>
                        <textarea name="message" rows="10"></textarea>
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
