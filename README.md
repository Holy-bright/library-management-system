# Library Management System

A full-stack library app built with React, NestJS, PostgreSQL, and Prisma.

## Project Structure

- `api/` NestJS backend with Prisma and PostgreSQL
- `client/` React frontend built with Vite, React Router, and Tailwind CSS
- `docs/` Postman collection for testing the API

## Assignment File Index

Each graded file, with a link and what it contains.

### Week 1: Design and Migrate Your Library Schema

| File | Contents |
|---|---|
| [api/prisma/schema.prisma](api/prisma/schema.prisma) | Role enum (PATRON, LIBRARIAN), User, Genre, Book with genreId and @relation, Review model (stretch) |
| [api/prisma/seed.ts](api/prisma/seed.ts) | Seeds 4 genres, 16 books, and one librarian account |
| [api/src/prisma/prisma.service.ts](api/src/prisma/prisma.service.ts) | Extends PrismaClient, implements OnModuleInit, calls this.$connect() |
| [api/.env.example](api/.env.example) | DATABASE_URL, JWT_SECRET, and LIBRARIAN_PASSWORD placeholders only |
| [api/prisma/migrations](api/prisma/migrations) | Migration history: init and add_review |

### Week 2: Complete Book API, Auth and Authorization

| File | Contents |
|---|---|
| [api/src/genres/genres.controller.ts](api/src/genres/genres.controller.ts) | Full CRUD routes for Genre. POST, PATCH, and DELETE are librarian only |
| [api/src/genres/genres.service.ts](api/src/genres/genres.service.ts) | create, findAll, findOne, update, remove with 404 and 409 handling |
| [api/src/genres/genres.module.ts](api/src/genres/genres.module.ts) | Genres module |
| [api/src/books/dto/create-book.dto.ts](api/src/books/dto/create-book.dto.ts) | class-validator rules on title, author, isbn, totalCopies, genreId |
| [api/src/books/books.controller.ts](api/src/books/books.controller.ts) | GET /books reads genreId, search, page, limit from @Query(). POST, PATCH, DELETE guarded |
| [api/src/books/books.service.ts](api/src/books/books.service.ts) | findAll builds a Prisma where clause and applies skip and take |
| [api/src/auth/auth.controller.ts](api/src/auth/auth.controller.ts) | POST /auth/register and POST /auth/login |
| [api/src/auth/auth.service.ts](api/src/auth/auth.service.ts) | bcrypt hashing on register, JWT issued on login |
| [api/src/auth/auth.module.ts](api/src/auth/auth.module.ts) | JwtModule and PassportModule setup |
| [api/src/auth/jwt.strategy.ts](api/src/auth/jwt.strategy.ts) | Verifies tokens with JWT_SECRET |
| [api/src/auth/jwt-auth.guard.ts](api/src/auth/jwt-auth.guard.ts) | Extends AuthGuard('jwt') |
| [api/src/auth/roles.decorator.ts](api/src/auth/roles.decorator.ts) | @Roles() decorator |
| [api/src/auth/roles.guard.ts](api/src/auth/roles.guard.ts) | Checks req.user.role against the required roles |
| [api/src/main.ts](api/src/main.ts) | Global ValidationPipe with whitelist: true and app.enableCors() |
| [docs/postman_collection.json](docs/postman_collection.json) | 23 requests covering every endpoint |

### Week 3: Build the Library Catalog and Search

| File | Contents |
|---|---|
| [client/src/main.jsx](client/src/main.jsx) | Wraps App in BrowserRouter |
| [client/src/App.jsx](client/src/App.jsx) | Routes for / and /books/:id, plus a not-found route |
| [client/src/pages/HomePage.jsx](client/src/pages/HomePage.jsx) | Holds the shared search, genre, and sort state. Renders SearchBar, GenreFilter, SortControl, and BookGrid |
| [client/src/components/BookGrid.jsx](client/src/components/BookGrid.jsx) | Calls GET /books with genreId and search params. Handles loading (skeleton cards), error (with retry), and empty states |
| [client/src/components/BookCard.jsx](client/src/components/BookCard.jsx) | Renders one book. Mapped in BookGrid with key={book.id} |
| [client/src/components/SearchBar.jsx](client/src/components/SearchBar.jsx) | Debounces input with setTimeout and a clearTimeout cleanup before calling onSearch |
| [client/src/components/GenreFilter.jsx](client/src/components/GenreFilter.jsx) | Genre dropdown loaded from GET /genres |
| [client/src/components/SortControl.jsx](client/src/components/SortControl.jsx) | Stretch: sort by title or author |
| [client/src/pages/BookDetail.jsx](client/src/pages/BookDetail.jsx) | Reads id from useParams() and calls GET /books/:id |
| [client/src/api.js](client/src/api.js) | Shared axios instance using VITE_API_URL |
| [client/.env](client/.env) | VITE_API_URL=http://localhost:3000 |

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

## Frontend Notes

- GET /books returns a page object, `{ data, meta }`, because the API paginates. BookGrid therefore reads `res.data.data`, not `res.data`.
- BookGrid requests `limit=50`, the API's maximum, so the whole catalog fits on one page.
- Each fetch uses an AbortController. When the search or genre changes quickly, the older request is cancelled, so a slow old response can never replace newer results.
- `client/.env` is committed on purpose. It holds only the public API address. Any `VITE_` value is built into the JavaScript sent to the browser, so secrets never go in this file.

## Running Locally

Backend, in one terminal:

1. `cd api && npm install`
2. Copy `.env.example` to `.env` and fill in real values
3. `npx prisma migrate dev`
4. `npx prisma generate`
5. `npx prisma db seed`
6. `npm run start:dev` (runs on http://localhost:3000)

Frontend, in a second terminal:

1. `cd client && npm install`
2. `npm run dev` (runs on http://localhost:5173)

## Setup Notes

- Pinned to Prisma 7 because prisma@latest installs the Prisma 8 release candidate.
- Prisma 7 generates the client into `api/src/generated/prisma`. That folder is rebuilt by `npx prisma generate`, so it is not committed. PrismaService imports PrismaClient from there instead of from `@prisma/client`.
- The database is hosted far from the development machine. `main.ts` prefers IPv4 and turns off Node's network family autoselection, because its 250 ms per-address limit caused connection timeouts on a high-latency link.
