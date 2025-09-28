"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import RandomBgWrapper from "@/components/RandomBgWrapper";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Preserve callbackUrl or fallback
  const callbackUrl =
    searchParams.get("callbackUrl") || "/homes"; // e.g., /checkout if redirected

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push(res?.url ?? callbackUrl);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl });
  };

  return (
    <RandomBgWrapper>
      <main className="min-h-screen flex items-center justify-center px-4 text-white">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-gray-900">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col">
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
              Sign In
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-gray-700 border p-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={20}
              height={20}
            />
            Sign in with Google
          </button>

          <p className="text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <a
              href={`/auth/register?callbackUrl=${encodeURIComponent(
                callbackUrl
              )}`}
              className="text-red-500 hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </main>
    </RandomBgWrapper>
  );
}
