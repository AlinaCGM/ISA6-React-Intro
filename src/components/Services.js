import React from "react";
import "../App.css";
import timer from "../images/timer.png";
import open from "../images/open1.png";

import dollar from "../images/dollar.png";

import analytics from "../images/analytics.png";

import "../App.css";

function Services() {
  return (
    <div className="services-container">
      <div>
        <img className="icon" src={open} alt="" />
        <h4>Grow</h4>
        <p>
          Use Square Capital to increase inventory, buy equipment or open a new
          location.
        </p>
      </div>
      <div>
        <img className="icon" src={timer} alt="" />

        <h4>Fast</h4>
        <p>
          Funds from Square Capital can be deposited in your bank account as
          soon as the next business day.
        </p>
      </div>
      <div>
        <img className="icon" src={dollar} alt="" />

        <h4>Easy</h4>
        <p>
          Make payment to Square automatically as a fixed percentage of your
          daily card sales
        </p>
      </div>
      <div>
        <img className="icon" src={analytics} alt="" />

        <h4>Flexible</h4>
        <p>
          Payment is tied directly to your card sales. You pay more when
          business is strong and less if things slow down.
        </p>
      </div>
    </div>
  );
}

export default Services;
