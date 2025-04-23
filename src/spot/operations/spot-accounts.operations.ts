import { Knex } from "knex";
import { SpotAccount } from "../entities/spot-account.entity";
import { SpotAccountTransaction } from "../entities/spot-account-transaction.enity";

export class SpotAccountsOperations {
  private __TABLE_SPOT_ACCOUNTS = "spot_accounts";
  private __TABLE_SPOT_ACCOUNT_TRANSACTRIONS = "spot_account_transactions";

  constructor(private _db: Knex) {}

  async insertAccountTransactions(
    accountTransactions: SpotAccountTransaction[]
  ) {
    const affectedRows = await this._db<SpotAccountTransaction>(
      this.__TABLE_SPOT_ACCOUNT_TRANSACTRIONS
    ).insert(accountTransactions);
    return affectedRows;
  }

  async removeAllAccountTransactions() {
    const affectedRows = await this._db<SpotAccount>(
      this.__TABLE_SPOT_ACCOUNT_TRANSACTRIONS
    ).delete();

    return affectedRows;
  }

  async removeAllAccounts() {
    const affectedRows = await this._db<SpotAccount>(
      this.__TABLE_SPOT_ACCOUNTS
    ).delete();
    return affectedRows;
  }

  async removeAccountsByIds(ids: string[]) {
    const affectedRows = await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS)
      .whereIn("account_id", ids)
      .delete();
    return affectedRows;
  }

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

  async getAccountsByUser(user_id: string) {
    return await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS).where({
      user_id,
    });
  }

  async getAccountBalance(account_id: string) {
    return (
      await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS)
        .select("balance")
        .where(account_id)
        .first()
    )?.balance;
  }
}
