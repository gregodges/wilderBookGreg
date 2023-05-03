"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wilderRouter_1 = __importDefault(require("./wilderRouter"));
const skillsRouter_1 = __importDefault(require("./skillsRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const university_1 = __importDefault(require("./university"));
const router = express_1.default.Router();
router.use('/wilder', wilderRouter_1.default);
router.use('/skills', skillsRouter_1.default);
router.use('/post', postRouter_1.default);
router.use('/university', university_1.default);
exports.default = router;
