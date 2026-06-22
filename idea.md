# Idea for new web app

I want to create a web app that allows the user to provide details about their upcoming camping trip and then receive a generated list of what they should pack for the trip.

# Primary learning objectives

I am creating this web app for my own personal benefit. I want to keep my web development skills current as I was recently laid off from a software engineering job. I want to have a recent project to showcase during future job interviews. I want to show that I can use AI in my development workflow. I also want to show that I can add an AI feature to a web app.

# User interaction

When the user first visits the web app, they will be presented with a simple chat component. Within this chat component they will be asked a series of questions by an LLM. These questions will be predefined, but the LLM can ask calrifying questions if it feels they are needed. Upon responding to the questions the user will wait while the LLM generates a checklist of items to buy/pack for their trip. The list will be divided into categories (e.g. groceries, camping equipment, toiletries, etc.)

# Discussion notes

- MVP input fields: trip length, destination, weather, and number of people.
- The app will use a chat-style flow with predefined questions, plus optional LLM clarifying questions.
- The generated packing list will be read-only in the MVP.
- The app should include Auth0-based authentication so users must create an account before using it.
- The app is primarily for personal learning, keeping web development skills current, and showcasing AI integration in interviews.

# Tech stack notes

- Frontend: latest Next.js, Tailwind CSS, and TypeScript.
- Tooling: Prettier for formatting and ESLint for linting.
- Auth: Auth0.
- The app should include a backend/database because saved trip history and other user data are desired.
- Recommended architecture for hiring value: keep the backend inside Next.js unless a separate service is needed later.

# AI notes

- Start with a provider-agnostic AI layer so the model can be swapped later.
- For minimal cost during development, use Google Gemini via AI Studio if a free quota is available.
- Keep the AI integration behind a small abstraction so the app can later switch to a more recognizable provider if needed for hiring signal.

# Deployment notes

- Deploy the Next.js app on Vercel.
- This keeps deployment simple and matches the stack well.
- Use environment variables for Auth0, AI provider, and database configuration.

# UI notes

- Build the UI with fully custom Tailwind components.
- Avoid bringing in a larger component library for the MVP.
- Keep the interface simple and focused on the chat flow and generated packing list.

# State management notes

- Use TanStack Query for server state.
- Use React state only for local UI state.
- This gives a realistic pattern for caching, loading, and mutations without adding unnecessary complexity.

# Testing notes

- Keep testing minimal for the MVP.
- Focus on unit and integration coverage where it adds confidence.
- Avoid building a large test suite before the core product exists.

# Data persistence notes

- Save trip history in the MVP.
- Users should be able to revisit prior generated packing lists.
- This makes the app more useful and gives the project a stronger full-stack feel.
- Saved trips should be private to the authenticated user.

# AI workflow notes

- Use a highly structured AI flow.
- Keep the questions predefined and the output format fixed so packing lists are consistent and easy to render.
- Allow limited clarifying questions only when necessary.
- Saved packing lists should be immutable after generation.

# Output notes

- Include PDF export for packing lists in the MVP.
- Keep the primary experience in-app, but allow the user to take the list with them.
- No email or notification workflow in the MVP.

# Observability notes

- Skip analytics and error monitoring for the MVP.
- Keep the initial build simple and focused on core product behavior.

# Backend notes

- The backend should live inside the Next.js app rather than as a separate service.
- Use Next.js route handlers and/or server actions for server-side logic.
- Keep shared server utilities in a `lib/` area and database code in a dedicated data-access layer.
- This keeps the project simpler while still demonstrating full-stack skills, auth, and server-side logic.

# Database notes

- Use a managed Postgres database.
- This fits the app’s relational data well: users, trips, packing lists, categories, and list items.
- It is a strong choice for hiring value because it shows a real production-style backend.
- Prefer keeping the same database shape in development and production.
- Use Prisma to access Postgres and manage the schema/migrations.
