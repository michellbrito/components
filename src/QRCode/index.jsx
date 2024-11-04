import React from "react";
import styles from "./styles.module.css";

export const QRCode = ({ codeBg, codeAlt, title, description }) => {
  return (
    <article className={styles.card}>
      <figure className={styles.bg}>
        <img className={styles.code} src={codeBg} alt={codeAlt} />
      </figure>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};
