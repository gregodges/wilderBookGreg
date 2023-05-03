"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skills_1 = __importDefault(require("../controller/skills"));
const skillsRouter = express_1.default.Router();
skillsRouter.post('/', skills_1.default.createOneSkill);
skillsRouter.get('/', skills_1.default.getAllSkills);
skillsRouter.get('/:id', skills_1.default.getOneSkill);
skillsRouter.delete('/:id', skills_1.default.deleteOneSkill);
skillsRouter.put('/:id', skills_1.default.updateOneSkill);
// app.get('Skill', wilderController.getWilderBySkills);
exports.default = skillsRouter;
