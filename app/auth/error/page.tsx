"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  // Map NextAuth error codes to friendly messages
  const errorMessages: Record<string, string> = {
    CredentialsSignin: "Invalid email or password.",
    OAuthAccountNotLinked: "This email is already associated with another account.",
    default: "Something went wrong. Please try again.",
  };

  const message = error ? errorMessages[error] || errorMessages.default : errorMessages.default;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Login Error</h1>
      <p className="text-red-500 text-center mb-6">{message}</p>

      <Link
        href="/auth/login"
        className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Go back to Login
      </Link>
    </main>
  );
}
