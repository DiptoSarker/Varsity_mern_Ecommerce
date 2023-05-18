import React from "react";
import HeadSet from "./HeadSet";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Remix Headset</p>
        <h3>Eid Ul Adha Sale</h3>
        <h1>Vibes</h1>

        <HeadSet />

        {/* <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        /> */}

        <div>
          {/* <Link href={`/product/${heroBanner.product}`}>
           
          </Link> */}
          <button type="button">Headset</button>
          <div className="desc">
            <h5>Description</h5>
            <p>Enjoy every moments of life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
