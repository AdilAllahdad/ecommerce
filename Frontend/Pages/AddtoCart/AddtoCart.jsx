// import React from "react";
// import { useCart } from "../../src/context/CartContext";
// import { useNavigate } from "react-router-dom";

// export const AddtoCart = () => {
//   const { cart, removeFromCart, decreaseQuantity, totalPrice } = useCart();
//   const navigate = useNavigate();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id} className="border p-4 mb-2 flex items-center justify-between">
//               <div className="flex items-center">
//                 <img src={item.image} alt={item.name} className="w-16 h-16" />
//                 <div className="ml-4">
//                   <h2>{item.name}</h2>
//                   <p>Price: ${item.new_price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 {/* Decrease Quantity */}
//                 <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-300 rounded">
                 
//                 </button>

//                 {/* Remove from Cart */}
//                 <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">
//                    Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Total Price Section ✅ */}
//           <div className="mt-6 text-right">
//             <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
//           </div>

//           {/* Proceed to Checkout Button ✅ */}
//           <div className="mt-4 text-right">
//             <button
//               // onClick={() => navigate("/checkout")}
//               className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-700"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

import { useAuth } from '../../src/context/AuthContext';

export const AddtoCart = () => {
    const { cart } = useAuth();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Cart</h1>
            {cart.map(item => (
                <div key={item.productId}>
                    <p>{item.name} - {item.quantity} x ${item.price}</p>
                </div>
            ))}
            <h2>Total: ${total}</h2>
            <button>Proceed to Checkout</button>
        </div>
    );
};
