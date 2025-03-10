import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess(res.data.message); // ✅ Now `res` is defined
      setError("");
      setTimeout(() => navigate("/admin-login"), 2000); // Redirect after 2s
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Register Admin</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="name" placeholder="Name" className="border p-2" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="border p-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="border p-2" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2">Register Admin</button>
      </form>
    </div>
  );
};

export default AdminRegister;
