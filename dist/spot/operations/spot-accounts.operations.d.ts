import { Knex } from "knex";
import { SpotAccount } from "../entities/spot-account.entity";
export declare class SpotAccountsOperations {
    private _db;
    private __TABLE_SPOT_ACCOUNTS;
    constructor(_db: Knex);
    updateAccountBalance(account_id: string, balance: number): Promise<number>;
    upsertAccounts(accounts: SpotAccount[]): Promise<number[]>;
}
