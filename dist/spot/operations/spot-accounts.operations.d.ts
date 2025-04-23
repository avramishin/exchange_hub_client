import { Knex } from "knex";
import { SpotAccount } from "../entities/spot-account.entity";
import { SpotAccountTransaction } from "../entities/spot-account-transaction.enity";
export declare class SpotAccountsOperations {
    private _db;
    private __TABLE_SPOT_ACCOUNTS;
    private __TABLE_SPOT_ACCOUNT_TRANSACTRIONS;
    constructor(_db: Knex);
    insertAccountTransactions(accountTransactions: SpotAccountTransaction[]): Promise<number[]>;
    removeAllAccountTransactions(): Promise<number>;
    removeAllAccounts(): Promise<number>;
    removeAccountsByIds(ids: string[]): Promise<number>;
    updateAccountBalance(account_id: string, balance: number): Promise<number>;
    upsertAccounts(accounts: SpotAccount[]): Promise<number[]>;
    getAccountsByUser(user_id: string): Promise<SpotAccount[]>;
    getAccountBalance(account_id: string): Promise<number>;
}
