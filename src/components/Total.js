import "./total.css";
import { useSelector } from "react-redux";
import React from "react";

function Total() {
  const cart = useSelector((state) => state.cart);//отримали стан кошика з магазину Redux

  //функція, яка повертає загальну ціну та кількість товару у кошику. 
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
}

export default Total;
