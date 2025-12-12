import { Context } from "hono";
import { AccountsService } from "@/services/accounts.service";
import { db } from "@/db";

const accountsService = new AccountsService(db);

export const AccountsController = {
  async list(c: Context) {
    const accounts = await accountsService.getAllAccounts();
    return c.json(accounts);
  }
}
