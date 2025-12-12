import { Hono } from "hono";
import { AccountsController } from "@/controllers/accounts.controller";

const accounts = new Hono();

accounts.get("/", AccountsController.list);

export default accounts;
