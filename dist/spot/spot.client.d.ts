import { AbstractClient, IConnectionDetails } from "../abstract.client";
import { SpotAccountsOperations } from "./operations/spot-accounts.operations";
import { SpotInstrumentsOperations } from "./operations/spot-instruments.operations";
import { SpotOrdersOperations } from "./operations/spot-orders.operations";
export declare class SpotClient extends AbstractClient {
    accounts: SpotAccountsOperations;
    instruments: SpotInstrumentsOperations;
    orders: SpotOrdersOperations;
    constructor(conn: IConnectionDetails);
}
