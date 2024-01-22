import { useState } from "react";
import cart from "../../assets/images/icon-cart.svg";

import { Items } from "./Items";

export function CartContainer() {
  const [open, setOpen] = useState(false);

  const [cartState, SetCartSTate] = useState(<Items />);

  return (
    <>
      <div className={`cart-container ${open ? "cart-container-open" : ""}`}>
        <div className="cart-text">Cart</div>
        <hr />
        <div className="items">{cartState}</div>
      </div>
      <img
        src={cart}
        alt="cart"
        className="img-cart"
        onClick={() => {
          setOpen(!open);
        }}
      />
    </>
  );
}
