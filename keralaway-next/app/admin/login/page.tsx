"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-night px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-paper p-10 border border-ink/10"
      >
        <h1 className="editorial-headline text-3xl text-ink mb-8">
          Admin <em className="editorial-italic text-brass">Sign In</em>
        </h1>
        <label className="small-caps text-ink/60 block mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          required
          className="w-full border border-ink/20 bg-white px-4 py-3 text-ink mb-4 focus:outline-none focus:border-brass"
        />
        {error && <p className="text-spice text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full small-caps bg-brass text-night px-6 py-3 hover:bg-night hover:text-paper transition-colors disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
