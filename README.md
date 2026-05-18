# liviapsicologa.com

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Astro, Self, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Astro** - The web framework for content-driven websites
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Prisma** - TypeScript-first ORM
- **MongoDB** - Database engine
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Database Setup

This project uses MongoDB with Prisma.

1. Make sure you have MongoDB set up.
2. Update your `apps/web/.env` file with your MongoDB connection URI.

3. Apply the schema to your database:

```bash
bun run db:push
```

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to see the fullstack application.

## Project Structure

```
liviapsicologa.com/
├── apps/
│   └── web/         # Fullstack application (Astro)
├── packages/
│   ├── api/         # API layer / business logic
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run check-types`: Check TypeScript types across all apps
- `bun run db:push`: Push schema changes to database
- `bun run db:studio`: Open database studio UI
