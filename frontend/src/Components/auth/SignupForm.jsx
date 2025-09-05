import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone }),
      });

      const text = await res.text();
      let data;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }

      if (!res.ok) {
        const message =
          data?.message ||
          (text?.startsWith("Proxy error")
            ? "Cannot reach backend server (proxy error). Make sure API is running on port 5000."
            : text || "Signup failed");
        throw new Error(message);
      }

      const redirectPath = import.meta.env.VITE_POST_AUTH_PATH || "/";
      navigate(redirectPath, { replace: true, state: { user: data.user } });
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <h2>Sign Up for Zoomo</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && (
        <div
          style={{
            color: "#ffdede",
            background: "#ff4d4d22",
            padding: ".6rem 1rem",
            borderRadius: 8,
          }}
        >
          {error}
        </div>
      )}
      <button type="submit" disabled={submitting}>
        {submitting ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
4