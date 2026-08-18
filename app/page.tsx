import prisma from "@/lib/prisma";

import UserProfile from "./components/user-profile";
export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="flex w-full flex-col flex-1 items-center justify-center font-sans">
      <div className="mt-8 pt-8  w-full">
        <UserProfile />
      </div>
      <ol className="list-decimal list-inside ">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
