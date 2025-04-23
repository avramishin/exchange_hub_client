import { AbstractClient, IConnectionDetails } from "../abstract.client";
import { SpotAccountsOperations } from "./operations/spot-accounts.operations";
import { SpotInstrumentsOperations } from "./operations/spot-instruments.operations";

export class SpotClient extends AbstractClient {
  public accounts: SpotAccountsOperations;
  public instruments: SpotInstrumentsOperations;

  constructor(connection: IConnectionDetails) {
    super(connection);
    this.accounts = new SpotAccountsOperations(this._db);
    this.instruments = new SpotInstrumentsOperations(this._db);
  }
}
