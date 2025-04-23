import { Knex } from "knex";
import { SpotOpenOrder } from "../entities/spot-open-order.entity";

export class SpotOrdersOperations {
  private __TABLE_SPOT_OPEN_ORDERS = "spot_open_orders";

  constructor(private _db: Knex) {}

  async getOpenOrder(order_id: string) {
    return await this._db<SpotOpenOrder>(this.__TABLE_SPOT_OPEN_ORDERS)
      .where({
        order_id,
      })
      .first();
  }

  async getAllOpenOrders() {
    return await this._db<SpotOpenOrder>(this.__TABLE_SPOT_OPEN_ORDERS);
  }

  async getOpenOrdersByUser(user_id: string) {
    return await this._db<SpotOpenOrder>(this.__TABLE_SPOT_OPEN_ORDERS).where({
      user_id,
    });
  }

  async getOpenOrdersByInstrument(instrument_id: string) {
    return await this._db<SpotOpenOrder>(this.__TABLE_SPOT_OPEN_ORDERS).where({
      instrument_id,
    });
  }

  async upsertOpenOrders(openOrders: SpotOpenOrder[]) {
    const affectedRows = await this._db<SpotOpenOrder>(
      this.__TABLE_SPOT_OPEN_ORDERS
    )
      .insert(openOrders)
      .onConflict("order_id")
      .merge();
    return affectedRows;
  }

  async removeOpenOrdersByIds(ids: string[]) {
    const affectedRows = await this._db<SpotOpenOrder>(
      this.__TABLE_SPOT_OPEN_ORDERS
    )
      .whereIn("order_id", ids)
      .delete();
    return affectedRows;
  }

  async removeAllOpenOrders() {
    const affectedRows = await this._db<SpotOpenOrder>(
      this.__TABLE_SPOT_OPEN_ORDERS
    ).delete();
    return affectedRows;
  }
}
