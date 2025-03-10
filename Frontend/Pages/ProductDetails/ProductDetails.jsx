import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch product details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setTotalPrice(res.data.new_price); // Initialize total price
      })
      .catch((err) => console.error("Error fetching product details:", err));
  }, [productId]);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to decrease quantity (minimum 1)
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Update total price when quantity changes
  useEffect(() => {
    if (product) {
      setTotalPrice(product.new_price * quantity);
    }
  }, [quantity, product]);

  if (!product) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="w-28 h-80 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

      <p className="text-lg text-gray-600 mt-2">
        <s className="text-red-500">${product.old_price}</s> &nbsp;
        <span className="font-bold text-black">${product.new_price}</span>
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center mt-4">
        <button
          onClick={decreaseQuantity}
          className="bg-gray-300 px-4 py-2 rounded-l-md text-lg"
        >
          -
        </button>
        <span className="px-6 py-2 text-lg font-bold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="bg-gray-300 px-4 py-2 rounded-r-md text-lg"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <p className="text-xl font-bold mt-4">Total: ${totalPrice}</p>

      {/* Add to Cart Button */}
      <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:scale-105 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
