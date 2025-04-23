import knex, { Knex } from "knex";

export interface IConnectionDetails {
  host: string;
  port: number;
  user: string;
  database: string;
  password: string;
  decimalNumbers?: boolean;
  ssl?: {
    rejectUnauthorized: boolean;
  };
  pool?: {
    min: number;
    max: number;
  };
}

export abstract class AbstractClient {
  protected _db: Knex;

  constructor(connection: IConnectionDetails) {
    this._db = knex({
      client: "pg",
      asyncStackTraces: true,
      compileSqlOnError: true,
      connection,
    });
  }
}
