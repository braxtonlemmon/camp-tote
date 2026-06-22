# Build plan

1. Set up the Next.js app with TypeScript, Tailwind CSS, ESLint, and Prettier.
2. Add the core app shell and custom Tailwind UI for the landing page and protected layout.
3. Add Auth0 authentication and protect the app behind sign-in.
4. Set up Postgres with Prisma, then define the initial schema for users, trips, packing lists, categories, and items.
5. Build the backend inside Next.js using route handlers/server actions plus a small `lib/` data layer.
6. Add TanStack Query for server state and wire it to trip/list creation and history loading.
7. Implement the structured chat flow for trip intake with the fixed questions and limited clarifying questions.
8. Add the AI abstraction layer and connect the first provider for packing list generation.
9. Persist generated packing lists as immutable trip history owned by the authenticated user.
10. Add the packing list detail view and PDF export.
11. Polish the UX, handle loading/error states, and tighten the custom Tailwind components.
12. Add minimal unit/integration tests around the key backend and AI flow.
13. Prepare deployment on Vercel with environment variables for Auth0, Postgres, Prisma, and AI provider settings.
