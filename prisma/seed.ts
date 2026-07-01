import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "@/app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.user.upsert({
    where: {
      auth0Id: "auth0|demo-user",
    },
    update: {
      name: "Demo User",
      email: "demo@example.com",
      imageUrl: null,
    },
    create: {
      auth0Id: "auth0|demo-user",
      name: "Demo User",
      email: "demo@example.com",
      imageUrl: null,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
