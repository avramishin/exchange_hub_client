"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotOrdersOperations = void 0;
class SpotOrdersOperations {
    constructor(_db) {
        this._db = _db;
        this.__TABLE_SPOT_OPEN_ORDERS = "spot_open_orders";
    }
    async getOpenOrder(order_id) {
        return await this._db(this.__TABLE_SPOT_OPEN_ORDERS)
            .where({
            order_id,
        })
            .first();
    }
    async getAllOpenOrders() {
        return await this._db(this.__TABLE_SPOT_OPEN_ORDERS);
    }
    async getOpenOrdersByUser(user_id) {
        return await this._db(this.__TABLE_SPOT_OPEN_ORDERS).where({
            user_id,
        });
    }
    async getOpenOrdersByInstrument(instrument_id) {
        return await this._db(this.__TABLE_SPOT_OPEN_ORDERS).where({
            instrument_id,
        });
    }
    async upsertOpenOrders(openOrders) {
        const affectedRows = await this._db(this.__TABLE_SPOT_OPEN_ORDERS)
            .insert(openOrders)
            .onConflict("order_id")
            .merge();
        return affectedRows;
    }
    async removeOpenOrdersByIds(ids) {
        const affectedRows = await this._db(this.__TABLE_SPOT_OPEN_ORDERS)
            .whereIn("order_id", ids)
            .delete();
        return affectedRows;
    }
    async removeAllOpenOrders() {
        const affectedRows = await this._db(this.__TABLE_SPOT_OPEN_ORDERS).delete();
        return affectedRows;
    }
}
exports.SpotOrdersOperations = SpotOrdersOperations;
