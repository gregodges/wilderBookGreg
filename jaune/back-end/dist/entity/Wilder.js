"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wilder = void 0;
const typeorm_1 = require("typeorm");
const Grade_1 = require("./Grade");
const Post_1 = require("./Post");
const Comment_1 = require("./Comment");
const University_1 = require("./University");
let Wilder = class Wilder {
    id;
    name;
    city;
    grades;
    posts;
    comments;
    universities;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Wilder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wilder.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wilder.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Grade_1.Grade, (grade) => grade.wilder),
    __metadata("design:type", Array)
], Wilder.prototype, "grades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Post_1.Post, (post) => post.wilder),
    __metadata("design:type", Array)
], Wilder.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_1.Comment, (comment) => comment.wilder),
    __metadata("design:type", Array)
], Wilder.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => University_1.University, { eager: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Wilder.prototype, "universities", void 0);
Wilder = __decorate([
    (0, typeorm_1.Entity)()
], Wilder);
exports.Wilder = Wilder;
