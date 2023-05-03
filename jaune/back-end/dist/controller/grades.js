"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
const Grade_1 = require("../entity/Grade");
const gradeController = {
    create: async (req, res) => {
        try {
            await utils_1.default.getRepository(Grade_1.Grade).save({
                grade: req.body.grade,
                wilderId: req.body.wilderId,
                skillsId: req.body.skillsId,
            });
            res.send("grade created");
        }
        catch (err) {
            console.log(err);
            res.send("error while grading the wilder");
        }
    },
    addGradeToOneWilder: async (req, res) => {
        const { wilderId } = req.body;
        const { skillId } = req.body;
        const { grade } = req.body;
        try {
            await utils_1.default.getRepository(Grade_1.Grade).save({
                wilderId,
                skillId,
                grade,
            });
            res.send('great success grading');
        }
        catch (error) {
            console.log(error);
            res.send('error grading the wilder');
        }
    }
};
exports.default = gradeController;
