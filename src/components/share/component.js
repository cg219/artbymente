import React, { Fragment } from "react";
import styles from "./styles";

export const Share = props => {
    return (
        <div className={styles.Share}>
            <div className={styles.Facebook}>Share It</div>
            <div className={styles.Twitter}>Tweet It</div>
            <div className={styles.Pinterest}>Pin It</div>
        </div>
    )
}
