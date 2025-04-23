"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClient = void 0;
const knex_1 = __importDefault(require("knex"));
class AbstractClient {
    constructor(conn) {
        this._db = (0, knex_1.default)({
            client: "cockroachdb",
            asyncStackTraces: true,
            compileSqlOnError: true,
            connection: conn,
        });
    }
}
exports.AbstractClient = AbstractClient;
