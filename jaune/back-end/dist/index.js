"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const app_1 = __importDefault(require("./app"));
const start = async () => {
    await utils_1.default.initialize();
    app_1.default.listen(5001, () => {
        console.log(`server is running on ${5001}`);
    });
};
void start();
