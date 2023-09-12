import './Cart.css';
import React, { useState } from 'react';
function Cart({ cartItems }) {
    function checkout() {
        setCheckoutMessage("Thank you for your purchase!");
       
      }
      const [checkoutMessage, setCheckoutMessage] = useState(null);
  return (
    <div className="cart">
        <p className="checkout-message">{checkoutMessage}</p>
      {cartItems.map((item, index) => (
        <p key={index}>{item.name} - {item.price}</p>
      ))}
      {cartItems.length > 0 && (
        <button onClick={checkout}>Checkout</button>
      )}
    </div>
  );
}

export default Cart;
