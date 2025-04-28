import { useState } from "react";
import api from "../services/api";
import { GoogleLogin } from "@react-oauth/google";

const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const res = await api.post("/auth/google-login", {
      token: credentialResponse.credential,
    });
    localStorage.setItem("token", res.data.token);
    alert("Google Login successful!");
  } catch {
    alert("Google Login failed");
  }
};

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      // Optionally redirect to dashboard or homepage
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => alert("Google Login failed")}
      />
      {message && <p className="mt-2 text-center text-sm">{message}</p>}
    </div>
  );
}
