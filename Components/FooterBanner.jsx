import React from "react";
import Link from "next/link";
import logo from "../public/assets/headSet.webp";
import Image from "next/image";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% Off</p>
          <h3>Great</h3>
          <h3>Sound</h3>
          <p>This Eid..!!</p>
        </div>
        <div className="right">
          <p>Remix Headset</p>
          <h3>EID UL ADHA SALE</h3>
          <p>Enjoy Every Moments of life</p>

          <button type="button">Hurry!!</button>
        </div>

        <Image src={logo} className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
