"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotInstrumentsOperations = void 0;
class SpotInstrumentsOperations {
    constructor(_db) {
        this._db = _db;
        this.__TABLE_SPOT_INSTRUMENTS = "spot_instruments";
        this.__TABLE_SPOT_INSTRUMENT_PRICES = "spot_instrument_prices";
    }
    async upsertInstrumentPrices(instrumentPrices) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENT_PRICES)
            .insert(instrumentPrices)
            .onConflict("instrument_id")
            .merge();
        return affectedRows;
    }
    async removeInstrumentPrices(ids) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENT_PRICES)
            .whereIn("instrument_id", ids)
            .delete();
        return affectedRows;
    }
    async upsertInstruments(instruments) {
        const affectedRows = await this._db(this.__TABLE_SPOT_INSTRUMENTS)
            .insert(instruments)
            .onConflict("instrument_id")
            .merge();
        return affectedRows;
    }
}
exports.SpotInstrumentsOperations = SpotInstrumentsOperations;
