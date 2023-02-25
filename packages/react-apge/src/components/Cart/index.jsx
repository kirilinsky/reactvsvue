import React from "react";
import { useCartDispatch, useCartStore } from "../../hooks/useCartStore";
import Tag from "../Tag";

const Cart = () => {
  const cart = useCartStore();
  const dispatch = useCartDispatch();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  console.log(cart, "cart");
  return (
    <div className="cart">
      {!cart
        ? "empty"
        : cart.map((item) => (
            <div className="cart-item">
              <div className="cart-item_header">
                {" "}
                {item.name}
                <div className="cart-item_header">
                  <Tag title={item.size} />
                  <Tag title={item.color} />
                  <Tag title={item.type} />
                </div>
              </div>
              <div className="cart-item_header">
                {item.price}$ x {item.quantity} = {item.price * item.quantity}$
                <div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="tag error"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Cart;
