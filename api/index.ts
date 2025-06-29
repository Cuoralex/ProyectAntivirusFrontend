import { createRequestHandler } from "@vercel/remix";
import * as build from "../build/server/index.js";
import type { ServerBuild } from "@remix-run/server-runtime";

export default createRequestHandler(() => build as unknown as ServerBuild);
