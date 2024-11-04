import React from "react";
import styles from "./styles.module.css";

export const OrderSummary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}></div>
        <h3 className={styles.title}>Order Summary</h3>
        <p className={styles.description}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className={styles.planBtn}>
          <div className={styles.musicIcon}></div>
          <div className={styles.plan}>
            <p className={styles.type}>Annual Plan</p>
            <p className={styles.price}>$59.99/year</p>
          </div>
          <p className={styles.change}>Change</p>
        </div>
        <div className={styles.payBtn}>
          <p>Proceed to Payment</p>
        </div>
        <p className={styles.cancel}>Cancel Order</p>
      </div>
    </div>
  );
};
