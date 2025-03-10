import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../../src/context/CartContext";
import { useNavigate } from "react-router-dom";

export const WomenProducts = ({ BannerImg }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [womenProducts, setWomenProducts] = useState([]);

  // Fetching Women's Products from the Backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products") // Adjust backend URL if needed
      .then((res) => {
        const filteredProducts = res.data.filter(
          (product) => product.category === "womenProducts"
        );
        setWomenProducts(filteredProducts);
      })
      .catch((err) => {
        console.error("Error fetching women's products:", err);
      });
  }, []);

  const handleOrderNowClick = (productId) => {
    navigate(`/ProductDetails/${productId}`);
  };

  return (
    <>
      {/* Banner Image */}
      <img src={BannerImg} alt="Women Banner" className="w-full h-auto" />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-6 sm:gap-12 md:gap-16 lg:gap-24 p-10" style={{ margin: "90px 0" }}>
        {womenProducts.length > 0 ? (
          womenProducts.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-gray-800 my-52 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl transition duration-300 group max-w-[300px]"
            >
              {/* Product Image */}
              <div>
                <img
                  src={`http://localhost:5000${item.image}`} // Ensure backend returns correct image URL
                  alt={item.name}
                  className="max-w-[140px] block mx-auto transform group-hover:scale-105 transition duration-300 drop-shadow-md rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="p-8 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  {[...Array(4)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-500" />
                  ))}
                </div>

                {/* Product Name */}
                <h1 className="text-xl font-bold dark:text-white">{item.name}</h1>

                {/* Pricing */}
                <p className="text-gray-500 group-hover:text-white transition duration-300 font-bold text-3xl">
                  {`$${item.new_price}`}
                </p>
                <p className="text-gray-500 group-hover:text-white transition duration-300 text-sm">
                  <s>{`$${item.old_price}`}</s>
                </p>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderNowClick(item._id)}
                  className="bg-primary hover:scale-105 transition duration-300 rounded-full text-white py-1 px-4 group-hover:text-primary group-hover:bg-white mt-3"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold">No products available.</p>
        )}
      </div>
    </>
  );
};
