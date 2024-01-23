import { useState } from "react";
import cartImg from "../../assets/images/icon-cart.svg";

import { Items } from "./Items";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartOpenClose, cartQuantity, cartState } from "../../atoms";

export function CartContainer() {
  const [open, setOpen] = useRecoilState(cartOpenClose);
  const cart = useRecoilValue(cartState);

  return (
    <>
      <div className={`cart-container ${open ? "cart-container-open" : ""}`}>
        <div className="cart-text">Cart</div>
        <hr />
        <div className="items">{cart}</div>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <CartNotification />
        <img
          src={cartImg}
          alt="cart"
          className="img-cart"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
    </>
  );
}

export function CartNotification() {
  const quantity = useRecoilValue(cartQuantity);
  return (
    <div
      className={`quantity-notification ${
        quantity === 0 ? "quantity-display" : null
      }`}
    >
      {quantity}
    </div>
  );
}
