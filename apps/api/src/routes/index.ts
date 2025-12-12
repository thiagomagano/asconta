import { Hono } from "hono";
import accountsRoutes from "./accounts.route";

const api = new Hono();

api.route("/accounts", accountsRoutes);

export default api;
