import { AbstractClient, IConnectionDetails } from "../abstract-client";
import { SpotAccount } from "./entities/spot-account.entity";
export declare class SpotClient extends AbstractClient {
    private __TABLE_SPOT_ACCOUNTS;
    constructor(connection: IConnectionDetails);
    updateAccountBalance(account_id: string, balance: number): Promise<number>;
    upsertAccounts(account: [SpotAccount]): Promise<number[]>;
}
