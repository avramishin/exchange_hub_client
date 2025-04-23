"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotAccountsOperations = void 0;
class SpotAccountsOperations {
    constructor(_db) {
        this._db = _db;
        this.__TABLE_SPOT_ACCOUNTS = "spot_accounts";
    }
    async updateAccountBalance(account_id, balance) {
        const affectedRows = await this._db(this.__TABLE_SPOT_ACCOUNTS)
            .update({
            balance,
        })
            .where({ account_id });
        return affectedRows;
    }
    async upsertAccounts(accounts) {
        const affectedRows = await this._db(this.__TABLE_SPOT_ACCOUNTS)
            .insert(accounts)
            .onConflict("account_id")
            .merge();
        return affectedRows;
    }
}
exports.SpotAccountsOperations = SpotAccountsOperations;
