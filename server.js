import * as build from "../build"; // o './build' si está en la misma carpeta
import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  build,
  mode: "production", // o "development"
});

