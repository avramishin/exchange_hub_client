import { Knex } from "knex";
import { SpotOpenOrder } from "../entities/spot-open-order.entity";
export declare class SpotOrdersOperations {
    private _db;
    private __TABLE_SPOT_OPEN_ORDERS;
    constructor(_db: Knex);
    getOpenOrder(order_id: string): Promise<SpotOpenOrder>;
    getAllOpenOrders(): Promise<SpotOpenOrder[]>;
    getOpenOrdersByUserId(user_id: string): Promise<SpotOpenOrder[]>;
    getOpenOrdersByInstrumentId(instrument_id: string): Promise<SpotOpenOrder[]>;
    upsertOpenOrders(openOrders: SpotOpenOrder[]): Promise<number[]>;
    removeOpenOrdersByIds(ids: string[]): Promise<number>;
    removeAllOpenOrders(): Promise<number>;
}
