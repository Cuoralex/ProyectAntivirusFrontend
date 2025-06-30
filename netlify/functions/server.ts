import { createRequestHandler } from "@vercel/remix";
// ⚠️ Evitamos que TypeScript colapse al hacer cast interversión
import * as build from "../../build/index.js";

// Evita tipos conflictivos forzando a unknown
export const handler = createRequestHandler({
  //build: build as unknown as Parameters<typeof createRequestHandler>[0]["build"],
  build: build as any,
  mode: process.env.NODE_ENV,
});
