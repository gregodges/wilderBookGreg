"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./router/index"));
const app = (0, express_1.default)();
// const port: number = 5001;
// const url  = 'http://localhost:5001'
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.use('/', (req, res) => {
    res.send('hello G');
});
app.get('/api/test', (req, res) => {
    console.log('ici dans APP');
    res.send('ici dans lapp');
});
exports.default = app;
