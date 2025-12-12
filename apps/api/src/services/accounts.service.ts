import { AccountsRepository } from "@/repositories/accounts.repository";
import { Account } from "@/types/account";
import { SQL } from "bun";


export class AccountsService {
  private repository: AccountsRepository;

  constructor(db:SQL){
    this.repository = new AccountsRepository(db);
  }

  async getAllAccounts(): Promise<Account[]> {
    return await this.repository.findAll();
  }
}
