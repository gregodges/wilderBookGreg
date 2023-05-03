"use strict";
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
const Wilder_1 = require("../entity/Wilder");
const Skill_1 = require("../entity/Skill");
const Grade_1 = require("../entity/Grade");
const wilderController = {
    create: async (req, res) => {
        try {
            await utils_1.default.getRepository(Wilder_1.Wilder).save(req.body);
            res.send('wilder created');
        }
        catch (error) {
            console.log(error);
            res.send('error creating wilder');
        }
    },
    get: async (req, res) => {
        try {
            const allWilders = await utils_1.default
                .getRepository(Wilder_1.Wilder).find({ relations: { grades: { skill: true }, universities: true } });
            res.send(allWilders);
        }
        catch (err) {
            console.log(err);
            res.send("Error while reading the wilders");
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const oneWilder = await utils_1.default.getRepository(Wilder_1.Wilder).findBy({
                id,
            });
            res.send(oneWilder);
        }
        catch (error) {
            console.log(error);
            res.send('error retrieving the wilder');
        }
    },
    deletOne: async (req, res) => {
        const { id } = req.params;
        const db = utils_1.default.getRepository(Wilder_1.Wilder);
        try {
            const wilderToDelete = await db.findBy({
                id,
            });
            await db.remove(wilderToDelete);
            res.send(`user ${id} has been deleted`);
        }
        catch (error) {
            console.log(error);
            res.send(`could not delete user ${id}`);
        }
    },
    updateOne: async (req, res) => {
        const { id } = req.params;
        const { name, city } = req.body;
        const db = utils_1.default.getRepository(Wilder_1.Wilder);
        try {
            const wilderToUpdate = await db.findOneBy({ id });
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!wilderToUpdate) {
                res.status(404).send(`Wilder with ID ${id} not found`);
                return;
            }
            await db.update(wilderToUpdate, { name, city });
            res.send(`Wilder ${id} has been updated`);
        }
        catch (error) {
            console.log(error);
            res.send(`Could not update wilder ${id}`);
        }
    },
    addSkillToOneWilder: async (req, res) => {
        const dbWilder = utils_1.default.getRepository(Wilder_1.Wilder);
        const dbSkills = utils_1.default.getRepository(Skill_1.Skill);
        const { id } = req.body;
        const { skill } = req.body;
        console.log(req.body);
        try {
            const wilderToAddSkill = await dbWilder.findOneBy({ id });
            const skillToAdd = await dbSkills.findOneBy({ id: skill });
            if (skillToAdd) {
                if (wilderToAddSkill.skills) {
                    wilderToAddSkill.skills.push(skillToAdd);
                }
                else {
                    wilderToAddSkill.skills = [skillToAdd];
                }
                await dbWilder.save(wilderToAddSkill);
                res.send('skill added');
            }
            else {
                res.status(404).send('could not find skill');
            }
        }
        catch (error) {
            console.log(error);
            res.send('could not add skill');
        }
    },
    getGradesForOneWilder: async (req, res) => {
        const dbGrade = utils_1.default.getRepository(Grade_1.Grade);
        const { wilderId } = req.params;
        try {
            const wilder = await dbGrade.findOneBy({ wilderId });
            res.send(wilder);
        }
        catch (error) {
            res.send('error');
        }
    }
};
exports.default = wilderController;
