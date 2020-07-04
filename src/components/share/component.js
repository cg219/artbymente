import React, { Fragment } from "react";
import styles from "./styles";

export const Share = props => {
    const onShare = platform => {
        const title = props.title;
        const image = props.image;
        const url = props.url;
        let message;

        switch (platform) {
            case "twitter":
                message = `https://twitter.com/intent/tweet?text=${title}&url=${url}&hashtags=artbymente&via=kreativemente`;
                break;

            case "facebook":
                message = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;

            case "pinterest":
                message = `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`;
                break;
        }

        window.open(message, "_blank");
    }

    return (
        <div className={styles.Share}>
            <div className={styles.Facebook} onClick={() => onShare("facebook")}>Share It</div>
            <div className={styles.Twitter} onClick={() => onShare("twitter")}>Tweet It</div>
            <div className={styles.Pinterest} onClick={() => onShare("pinterest")}>Pin It</div>
        </div>
    )
}
