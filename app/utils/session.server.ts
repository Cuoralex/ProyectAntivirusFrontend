<<<<<<< HEAD
import { createCookie } from "@remix-run/node";

export const authToken = createCookie("auth-token", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 2,
=======
// utils/session.server.ts
import { createCookie } from "@remix-run/node";

export const authToken = createCookie("authToken", {
  httpOnly: true,
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  encode: (value: string) => value,
  decode: (value: string) => value,
>>>>>>> devBaldurt
});
