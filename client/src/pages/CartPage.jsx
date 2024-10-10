import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Layout from "../components/Layout/Layout";

const CartPage = () => {
  const { cart } = useContext(CartContext);  // Access cart from context

  return (
    <Layout title="Cart">
      <div className="container mt-3">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="card mb-3" key={item._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:9000/api/v1/product/product-photo/${item._id}`}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
