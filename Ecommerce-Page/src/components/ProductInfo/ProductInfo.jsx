import { useState } from "react";
import { useRecoilState, RecoilRoot, useRecoilValue } from "recoil";
import { quantityAtom } from "../../atoms";

export function ProductInfo() {
  const value = useRecoilValue(quantityAtom);
  console.log(value);
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
            <p className="price">$125.00</p>
            <p className="off">50%</p>
          </div>
          <p className="previous-price">$250.00</p>
        </div>

        <div className="add-to-cart-quantity-selector">
          <QuantitySelector />
          <button className="add-to-cart">{value}Add to cart</button>
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
