"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

import UserProfileDropdown from "./user-profile-dropdown";

export default function UserProfile() {
  const { user, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (user) {
    return (
      <div className="relative">
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {user.picture ? (
            <Image
              src={user.picture}
              alt={user.name || "User"}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-300 rounded-full p-2">
              <UserIcon />
            </div>
          )}
        </button>
        {isOpen && user.email && (
          <div className="absolute right-0 mt-2 w-64">
            <UserProfileDropdown name={user.name} email={user.email} />
          </div>
        )}
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
