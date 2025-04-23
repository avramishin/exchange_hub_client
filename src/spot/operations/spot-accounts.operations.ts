import { Knex } from "knex";
import { SpotAccount } from "../entities/spot-account.entity";

export class SpotAccountsOperations {
  private __TABLE_SPOT_ACCOUNTS = "spot_accounts";

  constructor(private _db: Knex) {}

  async updateAccountBalance(account_id: string, balance: number) {
    const affectedRows = await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS)
      .update({
        balance,
      })
      .where({ account_id });

    return affectedRows;
  }

  async upsertAccounts(accounts: SpotAccount[]) {
    const affectedRows = await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS)
      .insert(accounts)
      .onConflict("account_id")
      .merge();
    return affectedRows;
  }
}
