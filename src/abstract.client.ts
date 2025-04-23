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

  constructor(conn: IConnectionDetails) {
    this._db = knex({
      client: "cockroachdb",
      asyncStackTraces: true,
      compileSqlOnError: true,
      connection: conn,
    });
  }
}
