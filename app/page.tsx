// import prisma from "@/lib/prisma";

import Homepage from "@/features/homepage/components/homepage";

export default async function Home() {
  // const users = await prisma.user.findMany();

  return (
    <div className="flex w-full flex-col flex-1 items-center justify-center font-sans">
      {/* <ol className="list-decimal list-inside ">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol> */}
      <Homepage />
    </div>
  );
}
