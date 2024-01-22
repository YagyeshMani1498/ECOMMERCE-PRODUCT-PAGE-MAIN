import imgOne from "../../assets/images/image-product-1.jpg";
import dele from "../../assets/images/delete.png";

export function Items() {
  return (
    <>
      <div className="cart-item-box">
        <div className="cart-item-info">
          <img src={imgOne} alt="item-img" />
          <div className="item-info-price">
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 x 3 <strong> $375.00</strong>
            </p>
          </div>
          <button className="remove-item">
            <img src={dele} alt="delete-icon" />
          </button>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </>
  );
}
