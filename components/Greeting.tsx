"use client";

import React from "react";

interface GreetingProps {
  user?: { name?: string | null };
}

export default function Greeting({ user }: GreetingProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-900">
        {user?.name ? `Welcome back, ${user.name}!` : "Welcome!"}
      </h1>
      <p className="text-gray-500 text-sm mt-1">Ready to find your next adventure?</p>
    </div>
  );
}
