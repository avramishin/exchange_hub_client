"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotInstrumentsOperations = void 0;
class SpotInstrumentsOperations {
    constructor(_db) {
        this._db = _db;
        this.__TABLE_SPOT_INSTRUMENTS = "spot_instruments";
        this.__TABLE_SPOT_INSTRUMENT_PRICES = "spot_instrument_prices";
    }
    async getInstrumentPrice(instrument_id) {
        return await this._db(this.__TABLE_SPOT_INSTRUMENT_PRICES)
            .select("ask", "bid")
            .where({ instrument_id })
            .first();
    }
    async upsertInstrumentPrices(instrumentPrices) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENT_PRICES)
            .insert(instrumentPrices)
            .onConflict("instrument_id")
            .merge();
        return affectedRows;
    }
    async removeInstrumentPricesByIds(ids) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENT_PRICES)
            .whereIn("instrument_id", ids)
            .delete();
        return affectedRows;
    }
    async removeAllInstrumentPrices() {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENT_PRICES).delete();
        return affectedRows;
    }
    async getAllInstruments() {
        return await this._db(this.__TABLE_SPOT_INSTRUMENTS);
    }
    async getInstrument(instrument_id) {
        return await this._db(this.__TABLE_SPOT_INSTRUMENTS)
            .where({ instrument_id })
            .first();
    }
    async upsertInstruments(instruments) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENTS)
            .insert(instruments)
            .onConflict("instrument_id")
            .merge();
        return affectedRows;
    }
    async removeInstrumentsByIds(ids) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENTS)
            .whereIn("instrument_id", ids)
            .delete();
        return affectedRows;
    }
    async removeAllInstruments() {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENTS).delete();
        return affectedRows;
    }
}
exports.SpotInstrumentsOperations = SpotInstrumentsOperations;
