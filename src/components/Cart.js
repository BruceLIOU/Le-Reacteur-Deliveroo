import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Cart = ({ cart, setCart }) => {
  const sousTotal = cart
    .map((element) => Number(element.price) * element.quantity)
    .reduce((a, b) => a + b, 0);
  const sousTotalRound = Math.round(sousTotal * 100) / 100;
  var total = 2.5 + sousTotalRound;
  return (
    <div className="cart">
      <button className="cart-line">Valider mon panier</button>
      <div className="cart-items">
        {cart.map((order, index) => {
          return (
            <div className="item">
              <div className="item-description">
                <Decrement index={index} cart={cart} setCart={setCart} />
                <span className="order-quantity">{order.quantity}</span>
                <Increment index={index} cart={cart} setCart={setCart} />
                <span className="order-title">{order.title}</span>
              </div>
              <span className="item-price">
                {(Math.round(Number(order.price) * order.quantity * 100) / 100)
                  .toFixed(2)
                  .replace(".", ",") + " €"}
              </span>
            </div>
          );
        })}
      </div>
      <div className="sous-total">
        <span>Sous-total</span>
        <span>{sousTotalRound.toFixed(2).replace(".", ",") + " €"}</span>
      </div>
      <div className="frais-de-livraison">
        <span>Frais de livraison </span>
        <span> 2,50 €</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>{total.toFixed(2).replace(".", ",") + " €"}</span>
      </div>
    </div>
  );
};

export default Cart;
