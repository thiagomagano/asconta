import { Hono } from 'hono'

import { logger } from "hono/logger";
import { cors } from "hono/cors";
import routes from "@/routes";

const app = new Hono();


app.use("*", logger());
app.use("*", cors());

// API routes
app.route("/api/v1", routes);

app.get("/health", (c) => c.json({ status: "ok" }));

app.get("/", (c) => {
  return c.text("Hello Asconta app! 💸︎")
})

export default app;
