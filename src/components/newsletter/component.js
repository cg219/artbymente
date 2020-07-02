import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import form from "./../../_form.scss";
import axios from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export const Newsletter = props => {
    const classes = props.isChild ? [styles.Newsletter, styles.IsChild].join(' ') : styles.Newsletter;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [success, setSuccess] = useState(false);
    const updateField = (event, update) => update(event.target.value);

    const submitForm = event => {
        const body = { address };

        event.preventDefault();

        console.log(body)

        api.post('newsletter', body)
            .then(({ data }) => {
                setName("");
                setAddress("");
                setSuccess(true);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className={classes}>
            <h1>Signup for Updates</h1>
            <p>Discounts, Events, New Art!</p>
            <form className={success ? form.Hidden : null} onSubmit={submitForm}>
                <div className={form.Wrapper}>
                    <label htmlFor="name">Name</label>
                    <div className={form.InputWrapper}>
                        <input type="text" name="name" value={name} onChange={(event) => updateField(event, setName)} />
                    </div>
                </div>
                <div className={form.Wrapper}>
                    <label htmlFor="email">Email</label>
                    <div className={form.InputWrapper}>
                        <input type="email" name="email" value={address} onChange={(event) => updateField(event, setAddress)} />
                    </div>
                </div>
                <div className={form.Wrapper}>
                    <button>Submit</button>
                </div>
            </form>
            <p className={ success ? null : form.Hidden }>Thank You!</p>
        </div>
    )
}
