import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import form from "./../../_form.scss";
import axios from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export const Contact = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const updateField = (event, update) => update(event.target.value);

    const submitForm = event => {
        event.preventDefault();

        const body = { name, email, message }

        api.post('email', body)
            .then(({ data }) => {
                setName("");
                setEmail("");
                setMessage("");
                setSuccess(true);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className={styles.Contact}>
            <p>For any art inquiries, requests for originals or commission questions, please drop me a note below. All fields are required</p>
            <form onSubmit={submitForm}>
                <div className={form.Wrapper}>
                    <label htmlFor="name">Name</label>
                    <div className={form.InputWrapper}>
                        <input required type="text" name="name" value={name} onChange={event => updateField(event, setName)} />
                    </div>
                </div>
                <div className={form.Wrapper}>
                    <label htmlFor="email">Email</label>
                    <div className={form.InputWrapper}>
                        <input required type="email" name="email" value={email} onChange={event => updateField(event, setEmail)} />
                    </div>
                </div>
                <div className={form.Wrapper}>
                    <label htmlFor="message">Message</label>
                    <div className={form.InputWrapper}>
                        <textarea required name="message" rows="10" value={message} onChange={event => updateField(event, setMessage)}></textarea>
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
