"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
const Skill_1 = require("../entity/Skill");
const skillsController = {
    getAllSkills: async (req, res) => {
        const db = utils_1.default.getRepository(Skill_1.Skill);
        try {
            const allSkills = await db.find();
            res.send(allSkills);
        }
        catch (err) {
            res.send('could not load all Skills');
        }
    },
    getOneSkill: async (req, res) => {
        const db = utils_1.default.getRepository(Skill_1.Skill);
        const { id } = req.params;
        try {
            const oneSkill = await db.findBy({ id });
            res.send(oneSkill);
        }
        catch (error) {
            res.status(401).send('could not find the skill');
        }
    },
    createOneSkill: async (req, res) => {
        const db = utils_1.default.getRepository(Skill_1.Skill);
        const name = req.body;
        try {
            await db.save(name);
            res.send('new skill has been added');
        }
        catch (err) {
            console.log(err);
            res.send('could not create new skill');
        }
    },
    deleteOneSkill: async (req, res) => {
        const db = utils_1.default.getRepository(Skill_1.Skill);
        const { id } = req.params;
        try {
            const skillToDelete = await db.findBy({
                id,
            });
            await db.remove(skillToDelete);
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            res.send(`skill ${id} has been deleted`);
        }
        catch (error) {
            console.log(error);
            res.send('could not delete skill');
        }
    },
    updateOneSkill: async (req, res) => {
        const db = utils_1.default.getRepository(Skill_1.Skill);
        const { id } = req.params;
        const { newData } = req.body;
        try {
            const skillToUpdate = await db.findBy({ id });
            await db.update(skillToUpdate, { name: newData });
            console.log(newData);
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            res.send(`skill ${id} has been updated`);
        }
        catch (error) {
            res.send('could not update the skill');
            console.log(error);
        }
    },
};
exports.default = skillsController;
