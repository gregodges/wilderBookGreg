"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const university_1 = __importDefault(require("../controller/university"));
const universityRouter = express_1.default.Router();
universityRouter.post('/', university_1.default.createUniversity);
universityRouter.get('/', university_1.default.getUniversity);
universityRouter.post('/wilder', university_1.default.addUniToOneWilder);
exports.default = universityRouter;
