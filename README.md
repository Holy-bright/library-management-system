# Library Management System

A full-stack library app built with React, NestJS, PostgreSQL, and Prisma.

## Schema Decisions

### Why Book references Genre instead of embedding it
Each genre is stored once in its own Genre table, and each book points to it through the genreId foreign key. If a librarian renames a genre, the change happens in one row and every linked book shows the new name right away. Embedding the genre name inside each book would copy it many times, so a rename would need many updates and could leave old copies behind.

### Why Role is an enum
The Role enum limits a user's role to PATRON or LIBRARIAN. The database rejects any other value, so a typo such as "libraian" can never be saved.

### Why availableCopies is separate from totalCopies
totalCopies records how many copies the library owns, and that number stays fixed. availableCopies goes down when a patron borrows a book and goes up when it is returned, so the app can show what is on the shelf right now.

## Setup Notes
- Pinned to Prisma 7 because prisma@latest installs the Prisma 8 release candidate
- Node prefers IPv4 for database connections because some networks cannot route IPv6
