import React, { useState } from "react";
import axios from "axios";

export const Signup = ({ onCloseSignup, onClose,onAlreadyAccount }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:5000/api/users", { 
        name,
        email,
        password,
      });
      setSuccess("Account created successfully! 🎉");
      setTimeout(() => {
        onClose(); // Close modal after success
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
      className="signup-form bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto mt-20 relative"
      style={{ background: "#fbd38d", padding: "25px" }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
      >
        ✖
      </button>

      {/* Success Message */}
      {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Signup Form */}
      <form className="flex flex-col space-y-4 mt-8" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-sm"
        >
          Create Account
        </button>
      </form>

      {/* Switch to Login Button */}
      <button onClick={onAlreadyAccount} className="mt-4 text-blue-500 hover:underline">
        Already have an account?
      </button>
    </div>
  );
};
