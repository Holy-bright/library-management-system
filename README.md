# Library Management System

A full-stack library app built with React, NestJS, PostgreSQL, and Prisma.

## Schema Decisions

### Why Book references Genre instead of embedding it
[2 to 3 sentences. Think about what happens when you rename a genre.]

### Why Role is an enum
[1 to 2 sentences. Think about what values the database accepts.]

### Why availableCopies is separate from totalCopies
[1 to 2 sentences. Think about what changes when someone borrows a book.]

## Setup Notes
- Pinned to Prisma 7 because prisma@latest installs the Prisma 8 release candidate
- Node prefers IPv4 for database connections because some networks cannot route IPv6
