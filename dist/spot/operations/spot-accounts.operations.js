"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotAccountsOperations = void 0;
class SpotAccountsOperations {
    constructor(_db) {
        this._db = _db;
        this.__TABLE_SPOT_ACCOUNTS = "spot_accounts";
        this.__TABLE_SPOT_ACCOUNT_TRANSACTRIONS = "spot_account_transactions";
    }
    async insertAccountTransactions(accountTransactions) {
        const affectedRows = await this._db(this.__TABLE_SPOT_ACCOUNT_TRANSACTRIONS).insert(accountTransactions);
        return affectedRows;
    }
    async removeAllAccountTransactions() {
        const affectedRows = await this._db(this.__TABLE_SPOT_ACCOUNT_TRANSACTRIONS).delete();
        return affectedRows;
    }
    async removeAllAccounts() {
        const affectedRows = await this._db(this.__TABLE_SPOT_ACCOUNTS).delete();
        return affectedRows;
    }
    async removeAccountsByIds(ids) {
        const affectedRows = await this._db(this.__TABLE_SPOT_ACCOUNTS)
            .whereIn("account_id", ids)
            .delete();
        return affectedRows;
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
    async getAccountsByUser(user_id) {
        return await this._db(this.__TABLE_SPOT_ACCOUNTS).where({
            user_id,
        });
    }
    async getAccountBalance(account_id) {
        var _a;
        return (_a = (await this._db(this.__TABLE_SPOT_ACCOUNTS)
            .select("balance")
            .where(account_id)
            .first())) === null || _a === void 0 ? void 0 : _a.balance;
    }
}
exports.SpotAccountsOperations = SpotAccountsOperations;
