"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function UserProfile() {
  const { user, isLoading } = useUser();
  console.log("UserProfile user:", user);

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (user) {
    return (
      <div className="p-4">
        {user.picture && (
          <Image
            src={user.picture}
            alt={user.name || "User"}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mb-2"
          />
        )}
        <h2 className="text-lg font-semibold">Welcome, {user.name}!</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        <a
          href="/auth/logout"
          className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </a>
      </div>
    );
  }

  return (
    <div className="p-4">
      <a
        href="/auth/login"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login with Auth0
      </a>
    </div>
  );
}
