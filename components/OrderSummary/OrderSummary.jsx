import React from "react";
import "./order-summary.css";

export const OrderSummary = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="cardHeader"></div>
        <h3 className="title">Order Summary</h3>
        <p className="description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="planBtn">
          <div className="musicIcon"></div>
          <div className="plan">
            <p className="type">Annual Plan</p>
            <p className="price">$59.99/year</p>
          </div>
          <p className="change">Change</p>
        </div>
        <div className="payBtn">
          <p>Proceed to Payment</p>
        </div>
        <p className="cancel">Cancel Order</p>
      </div>
    </div>
  );
};
