import React, { createContext, useContext, useState, useMemo } from "react";

// Create Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); // ✅ Track navbar cart count

  // Add to Cart Function
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
      }

      setCartCount(cartCount + 1);
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove from Cart Function ✅
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      if (updatedCart.length < prevCart.length) {
        setCartCount(cartCount - 1); // Decrease navbar count
      }
      return updatedCart;
    });
  };

  // Decrease Quantity Function ✅
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove if quantity reaches 0
    );
  };

  // Calculate total price dynamically ✅
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, decreaseQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};


// import React, { createContext, useContext, useState } from 'react';

// // Create Context
// const CartContext = createContext();

// // Cart Provider Component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add to Cart Function
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   // Remove from Cart Function
//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   // Calculate Total Cart Count (sum of all quantities)
//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // ✅ Fix: Correctly export the useCart hook
// export const useCart = () => {
//   return useContext(CartContext);
// };



