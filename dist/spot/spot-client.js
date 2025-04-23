"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotClient = void 0;
const abstract_client_1 = require("../abstract-client");
class SpotClient extends abstract_client_1.AbstractClient {
    constructor(connection) {
        super(connection);
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
    async upsertAccounts(account) {
        const result = await this._db(this.__TABLE_SPOT_ACCOUNTS)
            .insert(account)
            .onConflict("account_id")
            .merge();
        return result;
    }
}
exports.SpotClient = SpotClient;
