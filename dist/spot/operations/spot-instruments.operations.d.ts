import { Knex } from "knex";
import { SpotInstrumentPrice } from "../entities/spot-instrument-price.entity";
import { SpotInstrument } from "../entities/spot-instrument.entity";
export declare class SpotInstrumentsOperations {
    private _db;
    private __TABLE_SPOT_INSTRUMENTS;
    private __TABLE_SPOT_INSTRUMENT_PRICES;
    constructor(_db: Knex);
    getInstrumentPrice(instrument_id: string): Promise<Pick<SpotInstrumentPrice, "ask" | "bid">>;
    upsertInstrumentPrices(instrumentPrices: SpotInstrumentPrice[]): Promise<number[]>;
    removeInstrumentPricesByIds(ids: string[]): Promise<number>;
    removeAllInstrumentPrices(): Promise<number>;
    getAllInstruments(): Promise<SpotInstrument[]>;
    getInstrument(instrument_id: string): Promise<SpotInstrument>;
    upsertInstruments(instruments: SpotInstrument[]): Promise<number[]>;
    removeInstrumentsByIds(ids: SpotInstrument[]): Promise<number>;
    removeAllInstruments(): Promise<number>;
}
