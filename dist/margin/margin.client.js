"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginClient = void 0;
const abstract_client_1 = require("../abstract.client");
class MarginClient extends abstract_client_1.AbstractClient {
    constructor(connection) {
        super(connection);
    }
}
exports.MarginClient = MarginClient;
