import React, { Children } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // const cart = props.cart;
  //const cart = props.cart;
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected Items:{quantity}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping : ${totalShipping}</p>
      <p>Tax : $ {tax.toFixed(2)} </p>
      <h6>Grand total : ${grandTotal.toFixed(2)} </h6>

      <button onClick={handleClearCart} className="delete-btn">
        <span> Clear Cart</span>{" "}
        <FontAwesomeIcon className="delete-icon" icon={faTrash} />{" "}
      </button>
      {children}
    </div>
  );
};

export default Cart;
