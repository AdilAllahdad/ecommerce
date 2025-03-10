// import { useEffect, useState } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     image: null,
//   });


//   useEffect(() => {
//     axios.get("/api/products")
//       .then((res) => {
//         console.log("Products API Response:", res.data); // Debugging
//         setProducts(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts([]); // Ensure it is always an array
//       });
//   }, []);
  

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products") // Ensure correct backend route
//       .then((res) => {
//         console.log("Products API Response:", res.data); // Debugging
//         setProducts(res.data); // Store the fetched products
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts([]); // Ensure it's always an array
//       });
//   }, []);
  



//   const handleChange = (e) => {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setNewProduct({ ...newProduct, image: e.target.files[0] });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (let key in newProduct) {
//       formData.append(key, newProduct[key]);
//     }
  
//     try {
//       await axios.post("http://localhost:5000/api/products/add", formData, { 
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       alert("Product added!");
//     } catch (error) {
//       console.error("Error adding product:", error.response?.data || error);
//       alert("Failed to add product!");
//     }
//   };
  


//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isAdmin");
//     window.location.href = "/admin-login";
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      
//       {/* Product Upload Form */}
//       <form onSubmit={handleSubmit} className="mb-6">
//         <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" onChange={handleChange} required />
//         <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
//         <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
//         <input type="file" name="image" onChange={handleFileChange} required />
//         <button type="submit">Add Product</button>
//       </form>

//       {/* Product List */}
//       <ul>
//   {products.length > 0 ? (
//     products.map((p) => (
//       <li key={p._id} className="border p-2 mb-2">
//         {console.log("Product Image URL:", p.imageUrl)} {/* Debugging */}
//         <img 
//           src={`http://localhost:5000${p.imageUrl}`} 
//           alt={p.name} 
//           className="w-20 h-20 object-cover"
//           onError={(e) => { e.target.src = "/default-image.jpg"; }} // Fallback image
//         />
//         <h3 className="font-bold">{p.name}</h3>
//         <p>{p.description}</p>
//         <p className="text-green-500 font-bold">${p.price}</p>
//       </li>
//     ))
//   ) : (
//     <p>No products available.</p>
//   )}
// </ul>


//       <button onClick={handleLogout} className="bg-red-500 text-white p-2">Logout</button>
//     </div>
//   );
// };

// export default AdminDashboard;


import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // Track the product being edited
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        console.log("Products API Response:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProductForm({ ...productForm, image: e.target.files[0] });
  };

  // Add or Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    // Append all fields
    for (let key in productForm) {
      formData.append(key, productForm[key]);
    }
  
    console.log("\n🔹 Submitting Form Data:", Object.fromEntries(formData)); // Debugging
  
    try {
      let response;
      if (editProduct) {
        response = await axios.put(`http://localhost:5000/api/products/update/${editProduct._id}`, formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log("✅ Server Response:", response.data);
        alert("Product updated!");
      } else {
        response = await axios.post("http://localhost:5000/api/products/add", formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log("✅ Server Response:", response.data);
        alert("Product added!");
      }
      window.location.reload(); // Refresh the page to reflect changes
    } catch (error) {
      console.error("❌ Error saving product:", error.response?.data || error);
      alert("Failed to save product!");
    }
  };
  
  

  // Delete Product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/products/delete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Product deleted!");
      setProducts(products.filter((p) => p._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting product:", error.response?.data || error);
      alert("Failed to delete product!");
    }
  };

  // Edit Product (Prefill form with selected product)
  const handleEdit = (product) => {
    setEditProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      old_price: product.old_price, // Fix: Include old_price
    new_price: product.new_price, // Fix: Include new_price
      category: product.category,
      image: null, // Image should be replaced only if changed
    });
  };
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.href = "/admin-login";
  };



  



 


  return (
    <div className="p-4">
      <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2">Logout</button>

      </div>

      {/* Product Form (Add/Edit) */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 p-4 border rounded shadow">
        <h3 className="text-lg font-semibold">{editProduct ? "Edit Product" : "Add Product"}</h3>
        <input type="text" name="name" value={productForm.name} placeholder="Product Name" onChange={handleChange} required className="block w-full p-2 border rounded" />
        <textarea name="description" value={productForm.description} placeholder="Description" onChange={handleChange} required className="block w-full p-2 border rounded" />
        <input type="number" name="old_price" value={productForm.old_price} placeholder="old_price" onChange={handleChange} required className="block w-full p-2 border rounded" />
        <input type="number" name="new_price" value={productForm.new_price} placeholder="new_price" onChange={handleChange} required className="block w-full p-2 border rounded" />
        <input type="text" name="category" value={productForm.category} placeholder="Category" onChange={handleChange} required className="block w-full p-2 border rounded" />
        <input type="file" name="image" onChange={handleFileChange} className="block w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editProduct ? "Update Product" : "Add Product"}</button>
      </form>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p._id} className="border p-4 rounded shadow">
              {console.log("Product Image URL:", p.imageUrl)} {/* Debugging */}
              <img 
                src={`http://localhost:5000${p.image}`} 
                alt={p.name} 
                className="w-full h-40 object-contain rounded"
                onError={(e) => { e.target.src = "/default-image.jpg"; }} // Fallback image
              />
               <p className="text-gray-500 group-hover:text-white transition duration-300 text-sm">
                     {`${p.category}`}
                   </p>
              <h3 className="font-bold text-lg mt-2">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.description}</p>
              <p className="text-gray-500 group-hover:text-white transition duration-300 text-sm">
                     <s>{`$${p.old_price}`}</s>
                   </p>
                   <p className="text-gray-500 group-hover:text-white transition duration-300 text-sm">
                    {`$${p.new_price}`}
                   </p>
              {/* <p className="text-green-500 font-bold">${p.price}</p> */}
              <div className="flex space-x-2 mt-2">
                <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(p._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      {/* <button onClick={handleLogout} className="bg-red-500 text-white p-2">Logout</button> */}
    </div>
  );
};

export default AdminDashboard;

