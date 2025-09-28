"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", { // ✅ updated path
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to register");

      // Auto-login after registration
      const login = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (login?.error) setError(login.error);
      else router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition mb-4"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-gray-700 border p-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <img src="/images/google-icon.svg" alt="Google" className="w-5 h-5" />
          Sign up with Google
        </button>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/auth/login" className="text-red-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </main>
  );
}
