"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      setError("Email atau password salah.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-shell">
      <div className="admin-card" style={{ maxWidth: 420, margin: "60px auto 0" }}>
        <h2>Login Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="admin-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="admin-error">{error}</p>}
          <button className="btn" type="submit" disabled={loading} style={{ width: "100%", justifyContent: "center" }}>
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </form>
        <p style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 16 }}>
          Akun admin dibuat manual lewat Firebase Console &gt; Authentication.
        </p>
      </div>
    </div>
  );
}
