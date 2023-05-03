"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const University_1 = require("../entity/University");
const Wilder_1 = require("../entity/Wilder");
const utils_1 = __importDefault(require("../utils"));
const universityController = {
    createUniversity: async (req, res) => {
        try {
            const { name } = req.body;
            const dbUni = utils_1.default.getRepository(University_1.University);
            await dbUni.save({ name });
            res.send('Uni created');
        }
        catch (error) {
            res.send('error creating university');
            console.log(error);
        }
    },
    getUniversity: async (req, res) => {
        try {
            const dbUni = utils_1.default.getRepository(University_1.University);
            const allUni = await dbUni.find();
            res.send(allUni);
        }
        catch (error) {
            res.send('error retrieving universities');
        }
    },
    addUniToOneWilder: async (req, res) => {
        try {
            const dbWilder = utils_1.default.getRepository(Wilder_1.Wilder);
            const [wilder] = await dbWilder.findBy({ id: req.body.wilder });
            const uniToAdd = await utils_1.default.getRepository(University_1.University).findBy({ id: req.body.uniId });
            const currentUniversities = wilder.universities ? wilder.universities : [];
            const allUni = await utils_1.default.getRepository(University_1.University).find();
            console.log('current', currentUniversities);
            console.log(allUni);
            wilder.universities = currentUniversities.concat(uniToAdd);
            console.log(wilder.universities);
            await dbWilder.save(wilder);
            res.send('ok');
        }
        catch (error) {
            console.log(error);
            res.send('error');
        }
    }
};
exports.default = universityController;
