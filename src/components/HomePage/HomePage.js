import React from "react";
import "./HomePage.css";
import Slide from "../Carousel/Slide";
import { Link } from "react-router-dom";
import Market from "../Market/Market";
import Contact from "../Contact/Contact";
// import Market from "../Market/Market";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <div className="homepage-left">
          <div>
            <h1>Crypto Stock</h1>
            <p>
              A cryptocurrency (or “crypto”) is a digital currency that can be
              used to buy goods and services, but uses an online ledger with
              strong cryptography to secure online transactions. Much of the
              interest in these unregulated currencies is to trade for profit,
              with speculators at times driving prices skyward.
            </p>
          </div>

          <div>
            <Link to="/cryptoMarket" className="market-cap-btn">
              Today's Market Cap
            </Link>
          </div>
        </div>

        <div className="homepage-right">
          <Slide />
        </div>
      </div>
      <Market />
      <Contact/>
    </>
  );
};

export default HomePage;
