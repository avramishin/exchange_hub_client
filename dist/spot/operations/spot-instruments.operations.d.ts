import { Knex } from "knex";
import { SpotInstrumentPrice } from "../entities/spot-instrument-price.entity";
import { SpotInstrument } from "../entities/spot-instrument.entity";
export declare class SpotInstrumentsOperations {
    private _db;
    private __TABLE_SPOT_INSTRUMENTS;
    private __TABLE_SPOT_INSTRUMENT_PRICES;
    constructor(_db: Knex);
    upsertInstrumentPrices(instrumentPrices: SpotInstrumentPrice[]): Promise<number[]>;
    removeInstrumentPrices(ids: string[]): Promise<number>;
    upsertInstruments(instruments: SpotInstrument[]): Promise<number[]>;
}
