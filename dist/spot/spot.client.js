"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotClient = void 0;
const abstract_client_1 = require("../abstract.client");
const spot_accounts_operations_1 = require("./operations/spot-accounts.operations");
const spot_instruments_operations_1 = require("./operations/spot-instruments.operations");
const spot_orders_operations_1 = require("./operations/spot-orders.operations");
class SpotClient extends abstract_client_1.AbstractClient {
    constructor(conn) {
        super(conn);
        this.accounts = new spot_accounts_operations_1.SpotAccountsOperations(this._db);
        this.instruments = new spot_instruments_operations_1.SpotInstrumentsOperations(this._db);
        this.orders = new spot_orders_operations_1.SpotOrdersOperations(this._db);
    }
}
exports.SpotClient = SpotClient;
