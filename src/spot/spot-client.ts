import { AbstractClient, IConnectionDetails } from "../abstract-client";
import { SpotAccount } from "./entities/spot-account.entity";

export class SpotClient extends AbstractClient {
  private __TABLE_SPOT_ACCOUNTS = "spot_accounts";

  constructor(connection: IConnectionDetails) {
    super(connection);
  }

  async updateAccountBalance(account_id: string, balance: number) {
    const affectedRows = await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS)
      .update({
        balance,
      })
      .where({ account_id });

    return affectedRows;
  }

  async upsertAccounts(account: [SpotAccount]) {
    const result = await this._db<SpotAccount>(this.__TABLE_SPOT_ACCOUNTS)
      .insert(account)
      .onConflict("account_id")
      .merge();
    return result;
  }
}
