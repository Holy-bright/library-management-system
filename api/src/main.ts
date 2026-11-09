import { ValidationPipe } from "@nestjs/common";
import "dotenv/config";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
