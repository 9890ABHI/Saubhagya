import React from "react";
import { connect } from "react-redux";

const Cart = ({ cart, addToCart, removeFromCart, updateCartItem }) => {
  return (
    <>
      <div>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  updateCartItem,
})(Cart);
