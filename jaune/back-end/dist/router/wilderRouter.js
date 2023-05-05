"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wilder_1 = __importDefault(require("../controller/wilder"));
const grades_1 = __importDefault(require("../controller/grades"));
const university_1 = __importDefault(require("../controller/university"));
const wilderRouter = express_1.default.Router();
wilderRouter.post('/', wilder_1.default.create);
wilderRouter.get('/', wilder_1.default.get);
wilderRouter.get('/:id', wilder_1.default.getOne);
wilderRouter.put('/:id', wilder_1.default.updateOne);
wilderRouter.delete('/:id', wilder_1.default.deletOne);
wilderRouter.post('/skill', wilder_1.default.addSkillToOneWilder);
wilderRouter.post('/skillGrade', grades_1.default.addGradeToOneWilder);
wilderRouter.get('/skillGrade/:id', wilder_1.default.getGradesForOneWilder);
wilderRouter.post('/university', university_1.default.addUniToOneWilder);
// app.post('/api/grades', gardesController.postOneGrade);
// app.get('/api/grades', gardesController.getAll);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.default = wilderRouter;
