import "dotenv/config";
import dns from "node:dns";
import net from "node:net";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

// Neon returns IPv4 and IPv6 addresses. Some networks cannot route IPv6.
// Prefer IPv4, and give each connection attempt the full timeout instead of
// Node's 250 ms per-address limit, which is too short for high-latency links.
dns.setDefaultResultOrder("ipv4first");
net.setDefaultAutoSelectFamily(false);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
