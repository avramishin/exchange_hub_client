import { AbstractClient, IConnectionDetails } from "../abstract.client";
import { SpotAccountsOperations } from "./operations/spot-accounts.operations";
import { SpotInstrumentsOperations } from "./operations/spot-instruments.operations";
import { SpotOrdersOperations } from "./operations/spot-orders.operations";

export class SpotClient extends AbstractClient {
  public accounts: SpotAccountsOperations;
  public instruments: SpotInstrumentsOperations;
  public orders: SpotOrdersOperations;

  constructor(conn: IConnectionDetails) {
    super(conn);
    this.accounts = new SpotAccountsOperations(this._db);
    this.instruments = new SpotInstrumentsOperations(this._db);
    this.orders = new SpotOrdersOperations(this._db);
  }
}
