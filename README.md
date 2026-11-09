# Library Management System

A full-stack library app built with React, NestJS, PostgreSQL, and Prisma.

## Project Structure

- `api/` NestJS backend with Prisma and PostgreSQL
- `docs/` Postman collection for testing the API

## Schema Decisions

### Why Book references Genre instead of embedding it
Each genre is stored once in its own Genre table, and each book points to it through the genreId foreign key. If a librarian renames a genre, the change happens in one row and every linked book shows the new name right away. Embedding the genre name inside each book would copy it many times, so a rename would need many updates and could leave old copies behind.

### Why Role is an enum
The Role enum limits a user's role to PATRON or LIBRARIAN. The database rejects any other value, so a typo such as "libraian" can never be saved.

### Why availableCopies is separate from totalCopies
totalCopies records how many copies the library owns, and that number stays fixed. availableCopies goes down when a patron borrows a book and goes up when it is returned, so the app can show what is on the shelf right now.

### Review model (Stretch)
A Review links one User to one Book through two foreign keys, bookId and userId. A unique rule on the pair allows one review per user per book. Both relations use onDelete: Cascade, so deleting a book or a user also removes their reviews instead of blocking the delete. The rating must stay between 1 and 5. The schema cannot express that range, so the API will enforce it with DTO validation.

## Prisma vs a Document Database (Stretch)

In a document database such as MongoDB, I could store a book's genre and reviews inside the book document itself. Reading one book would then need no joins. In Prisma with PostgreSQL, each concept lives in its own table, and I must declare every relationship on both sides, for example `genre` on Book and `books` on Genre. The database then enforces those links, so a book can never point to a genre that does not exist. The biggest difference for me was the workflow. Every schema change needs a named migration, while a document database accepts new fields without one. The migration step felt slower at first, but it gives a clear history of every change that teammates can replay.

## Running Locally

1. Install dependencies: `cd api && npm install`
2. Copy `.env.example` to `.env` and fill in real values
3. Apply migrations: `npx prisma migrate dev`
4. Generate the client: `npx prisma generate`
5. Seed the database: `npx prisma db seed`
6. Start the API: `npm run start:dev`

## Setup Notes

- Pinned to Prisma 7 because prisma@latest installs the Prisma 8 release candidate.
- Prisma 7 generates the client into `api/src/generated/prisma`. That folder is rebuilt by `npx prisma generate`, so it is not committed. PrismaService imports PrismaClient from there instead of from `@prisma/client`.
- Node prefers IPv4 for database connections because some networks cannot route IPv6.
