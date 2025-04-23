import { AbstractClient, IConnectionDetails } from "../abstract.client";
import { SpotAccountsOperations } from "./operations/spot-accounts.operations";
import { SpotInstrumentsOperations } from "./operations/spot-instruments.operations";
export declare class SpotClient extends AbstractClient {
    accounts: SpotAccountsOperations;
    instruments: SpotInstrumentsOperations;
    constructor(connection: IConnectionDetails);
}
