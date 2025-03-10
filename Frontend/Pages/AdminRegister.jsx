import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminRegister = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isRegisterAllowed, setIsRegisterAllowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if an admin exists
    axios.get("http://localhost:5000/api/admin/check-admin").then((res) => {
      setIsRegisterAllowed(!res.data.adminExists);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isRegisterAllowed) {
      alert("Admin registration is closed.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/admin/register", formData);
      alert("Admin registered successfully. Redirecting to login.");
      navigate("/admin-login");
    } catch (error) {
      alert(error.response.data.message || "Registration failed.");
    }
  };

  return isRegisterAllowed ? (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Admin Registration</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  ) : (
    <p className="text-red-500">Admin registration is closed.</p>
  );
};

export default AdminRegister;
