import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">DipShop</Link>
      </p>

      <div className="Dipto-right-things right-things">
        <Link href="/login">
          {" "}
          <p className="logo loginn">Login </p>
        </Link>{" "}
        <button type="button" className="cart-icon">
          <AiOutlineShopping />
          <span className="cart-item-qty">0</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
