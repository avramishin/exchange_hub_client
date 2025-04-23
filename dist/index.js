"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.SpotClient = exports.MarginClient = void 0;
const margin_client_1 = require("./margin/margin-client");
Object.defineProperty(exports, "MarginClient", { enumerable: true, get: function () { return margin_client_1.MarginClient; } });
const spot_client_1 = require("./spot/spot-client");
Object.defineProperty(exports, "SpotClient", { enumerable: true, get: function () { return spot_client_1.SpotClient; } });
exports.version = "1.0.0";
