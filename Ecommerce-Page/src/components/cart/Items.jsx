import imgOne from "../../assets/images/image-product-1.jpg";
import dele from "../../assets/images/delete.png";
import { useSetRecoilState } from "recoil";
import { cartOpenClose, cartQuantity, cartState } from "../../atoms";

export function Items({ quantity, price }) {
  const emptyCart = useSetRecoilState(cartState);
  const cartClose = useSetRecoilState(cartOpenClose);
  const cartQuantityNotification = useSetRecoilState(cartQuantity);
  return (
    <>
      <div className="cart-item-box">
        <div className="cart-item-info">
          <img src={imgOne} alt="item-img" />
          <div className="item-info-price">
            <p>Fall Limited Edition Sneakers</p>
            <p>
              ${price}.00 x {quantity} <strong> ${price * quantity}.00</strong>
            </p>
          </div>
          <button
            className="remove-item"
            onClick={() => {
              emptyCart("cart is empty");
              cartClose(false);
              cartQuantityNotification(0);
            }}
          >
            <img src={dele} alt="delete-icon" />
          </button>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </>
  );
}
