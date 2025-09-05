import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
            : text || "Login failed");
        throw new Error(message);
      }

      const redirectPath = import.meta.env.VITE_POST_AUTH_PATH || "/";
      navigate(redirectPath, { replace: true, state: { user: data.user } });
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <h2>Login to Zoomo</h2>
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
        {submitting ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
