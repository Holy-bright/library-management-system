import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clear old data first, children before parents
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();

  await prisma.genre.create({
    data: {
      name: "Fantasy",
      slug: "fantasy",
      books: {
        create: [
          { title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780547928227", totalCopies: 3, availableCopies: 3 },
          { title: "A Wizard of Earthsea", author: "Ursula K. Le Guin", isbn: "9780547773742", totalCopies: 2, availableCopies: 2 },
          { title: "Children of Blood and Bone", author: "Tomi Adeyemi", isbn: "9780000000001", totalCopies: 3, availableCopies: 3 },
          { title: "The Fifth Season", author: "N.K. Jemisin", isbn: "9780000000002", totalCopies: 2, availableCopies: 2 },
        ],
      },
    },
  });

  await prisma.genre.create({
    data: {
      name: "African Literature",
      slug: "african-literature",
      books: {
        create: [
          { title: "Things Fall Apart", author: "Chinua Achebe", isbn: "9780000000003", totalCopies: 4, availableCopies: 4 },
          { title: "Weep Not, Child", author: "Ngugi wa Thiong'o", isbn: "9780000000004", totalCopies: 3, availableCopies: 3 },
          { title: "A Grain of Wheat", author: "Ngugi wa Thiong'o", isbn: "9780000000005", totalCopies: 2, availableCopies: 2 },
          { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", isbn: "9780000000006", totalCopies: 3, availableCopies: 3 },
        ],
      },
    },
  });

  await prisma.genre.create({
    data: {
      name: "Science Fiction",
      slug: "science-fiction",
      books: {
        create: [
          { title: "Dune", author: "Frank Herbert", isbn: "9780000000007", totalCopies: 3, availableCopies: 3 },
          { title: "Kindred", author: "Octavia E. Butler", isbn: "9780000000008", totalCopies: 2, availableCopies: 2 },
          { title: "Binti", author: "Nnedi Okorafor", isbn: "9780000000009", totalCopies: 2, availableCopies: 2 },
          { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", isbn: "9780000000010", totalCopies: 1, availableCopies: 1 },
        ],
      },
    },
  });

  await prisma.genre.create({
    data: {
      name: "Computer Science",
      slug: "computer-science",
      books: {
        create: [
          { title: "Clean Code", author: "Robert C. Martin", isbn: "9780000000011", totalCopies: 2, availableCopies: 2 },
          { title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas", isbn: "9780000000012", totalCopies: 2, availableCopies: 2 },
          { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", isbn: "9780000000013", totalCopies: 3, availableCopies: 3 },
          { title: "Introduction to Algorithms", author: "Thomas H. Cormen et al.", isbn: "9780000000014", totalCopies: 1, availableCopies: 1 },
        ],
      },
    },
  });

  const bookCount = await prisma.book.count();
  const genreCount = await prisma.genre.count();
  console.log(`Seeded ${genreCount} genres and ${bookCount} books`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
