import app from "@/app";

const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
console.log(`API for asconta is running on port http://localhost:${port}`);

export default {
  fetch: app.fetch,
  port,
}
