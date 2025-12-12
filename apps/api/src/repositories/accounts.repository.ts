import { SQL } from "bun";
import {Account} from "@/types/account";

export class AccountsRepository {
  constructor (private db: SQL) {}

  async findAll():Promise<Account[]> {
    return await this.db<Account[]>`
      SELECT * from accounts
      WHERE is_active = true
      ORDER BY created_at desc
      `
  }

}
