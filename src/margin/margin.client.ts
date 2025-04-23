import { AbstractClient, IConnectionDetails } from "../abstract.client";

export class MarginClient extends AbstractClient {
  constructor(connection: IConnectionDetails) {
    super(connection);
  }
}
