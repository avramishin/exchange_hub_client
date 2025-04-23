import { Knex } from "knex";
import { SpotInstrumentPrice } from "../entities/spot-instrument-price.entity";
import { SpotInstrument } from "../entities/spot-instrument.entity";

export class SpotInstrumentsOperations {
  private __TABLE_SPOT_INSTRUMENTS = "spot_instruments";
  private __TABLE_SPOT_INSTRUMENT_PRICES = "spot_instrument_prices";

  constructor(private _db: Knex) {}

  async getInstrumentPrice(instrument_id: string) {
    return await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENT_PRICES
    )
      .select("ask", "bid")
      .where({ instrument_id })
      .first();
  }

  async upsertInstrumentPrices(instrumentPrices: SpotInstrumentPrice[]) {
    const affectedRows = await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENT_PRICES
    )
      .insert(instrumentPrices)
      .onConflict("instrument_id")
      .merge();
    return affectedRows;
  }

  async removeInstrumentPricesByIds(ids: string[]) {
    const affectedRows = await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENT_PRICES
    )
      .whereIn("instrument_id", ids)
      .delete();
    return affectedRows;
  }

  async removeAllInstrumentPrices() {
    const affectedRows = await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENT_PRICES
    ).delete();
    return affectedRows;
  }

  async getAllInstruments() {
    return await this._db<SpotInstrument>(this.__TABLE_SPOT_INSTRUMENTS);
  }

  async getInstrument(instrument_id: string) {
    return await this._db<SpotInstrument>(this.__TABLE_SPOT_INSTRUMENTS)
      .where({ instrument_id })
      .first();
  }

  async upsertInstruments(instruments: SpotInstrument[]) {
    const affectedRows = await this._db<SpotInstrument>(
      this.__TABLE_SPOT_INSTRUMENTS
    )
      .insert(instruments)
      .onConflict("instrument_id")
      .merge();
    return affectedRows;
  }

  async removeInstrumentsByIds(ids: SpotInstrument[]) {
    const affectedRows = await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENTS
    )
      .whereIn("instrument_id", ids)
      .delete();
    return affectedRows;
  }

  async removeAllInstruments() {
    const affectedRows = await this._db<SpotInstrument>(
      this.__TABLE_SPOT_INSTRUMENTS
    ).delete();
    return affectedRows;
  }
}
