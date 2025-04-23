import { Knex } from "knex";
import { SpotInstrumentPrice } from "../entities/spot-instrument-price.entity";
import { SpotInstrument } from "../entities/spot-instrument.entity";

export class SpotInstrumentsOperations {
  private __TABLE_SPOT_INSTRUMENTS = "spot_instruments";
  private __TABLE_SPOT_INSTRUMENT_PRICES = "spot_instrument_prices";

  constructor(private _db: Knex) {}

  async upsertInstrumentPrices(instrumentPrices: SpotInstrumentPrice[]) {
    const affectedRows = await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENT_PRICES
    )
      .insert(instrumentPrices)
      .onConflict("instrument_id")
      .merge();
    return affectedRows;
  }

  async removeInstrumentPrices(ids: string[]) {
    const affectedRows = await this._db<SpotInstrumentPrice>(
      this.__TABLE_SPOT_INSTRUMENT_PRICES
    )
      .whereIn("instrument_id", ids)
      .delete();
    return affectedRows;
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
}
