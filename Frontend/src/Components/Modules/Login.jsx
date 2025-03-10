import React, { useState } from "react";
import axios from "axios";

export const Login = ({ onClose, setUser,onCreateAccount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        email,
        password,
      });

      if (response.data.success) {
        setUser(response.data.user); // Set user in parent component
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store in localStorage
        onClose(); // Close modal after successful login
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-form p-8 rounded-lg shadow-md max-w-sm relative" style={{ background: "#fbd38d" }}>
      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-sm">
          Login
        </button>
        <p>Make an Account</p>
        <button type="button" onClick={onCreateAccount}  className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-sm">
          SignUp
        </button>
      </form>
    </div>
  );
};
