"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Skill_1 = require("./entity/Skill");
const Wilder_1 = require("./entity/Wilder");
const Grade_1 = require("./entity/Grade");
const Post_1 = require("./entity/Post");
const Comment_1 = require("./entity/Comment");
const University_1 = require("./entity/University");
const dataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './wildersdb.sqlite',
    synchronize: true,
    entities: [Wilder_1.Wilder, Skill_1.Skill, Grade_1.Grade, Post_1.Post, Comment_1.Comment, University_1.University],
    // logging: ["query", "error"]
});
exports.default = dataSource;
