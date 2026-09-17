import { FireIcon } from "@heroicons/react/24/outline";

import UserProfile from "./user-profile";

export default function Header() {
  return (
    <header className="  w-full py-2 px-4 flex items-start justify-between">
      <FireIcon className="w-12 h-12 text-primary-text" />
      <div className="flex flex-col items-center">
        <h2 className="text-primary-text text-2xl">Camp Tote</h2>
        <p>get camping faster</p>
      </div>
      <UserProfile />
    </header>
  );
}
