import { useState } from "react";
import {
  useRecoilState,
  RecoilRoot,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";
import { cartQuantity, cartState, quantityAtom } from "../../atoms";
import { Items } from "../cart/Items";
import { CartNotification } from "../cart/CartContainer";

const productInfo = {
  title: "sneaker company",
  heading: "Fall Limited Edition Sneakers",
  info: "These low-profile seneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125,
};

export function ProductInfo() {
  return (
    <>
      <div className="info-container">
        <p className="title">sneaker company</p>
        <h1 className="heading">
          Fall Limited Edition <br />
          Sneakers
        </h1>
        <p className="para">
          These low-profile seneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="price-box">
          <div className="price-off">
            <p className="price">{`$${125}.00`}</p>
            <p className="off">50%</p>
          </div>
          <p className="previous-price">$250.00</p>
        </div>

        <div className="add-to-cart-quantity-selector">
          <QuantitySelector />
          <AddToCart />
        </div>
      </div>
    </>
  );
}

function QuantitySelector() {
  const [quantity, setQuantity] = useRecoilState(quantityAtom);

  function plus(e) {
    setQuantity(quantity + 1);
  }

  function minus(e) {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }

  return (
    <>
      <div className="quantity-selector">
        <button onClick={minus} className="plus-btn">
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button onClick={plus} className="minus-btn">
          +
        </button>
      </div>
    </>
  );
}

function AddToCart() {
  const [quantity, setQuantity] = useRecoilState(quantityAtom);
  const setCart = useSetRecoilState(cartState);
  const cartQuantityNotification = useSetRecoilState(cartQuantity);
  function addItems() {
    if (quantity <= 0) return;
    setCart(<Items quantity={quantity} price={productInfo.price} />);
    setQuantity(0);
    cartQuantityNotification(quantity);
  }
  return (
    <>
      <button className="add-to-cart" onClick={addItems}>
        Add to cart
      </button>
    </>
  );
}
