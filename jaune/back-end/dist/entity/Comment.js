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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
const Post_1 = require("./Post");
const Wilder_1 = require("./Wilder");
let Comment = class Comment {
    id;
    content;
    createdDate;
    lastUpdatedDate;
    wilder;
    post;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Comment.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Comment.prototype, "lastUpdatedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Wilder_1.Wilder, (wilder) => wilder.comments, { onDelete: 'CASCADE', eager: true }),
    __metadata("design:type", Wilder_1.Wilder)
], Comment.prototype, "wilder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Post_1.Post, (post) => post.comments, { onDelete: 'CASCADE', eager: true }),
    __metadata("design:type", Post_1.Post)
], Comment.prototype, "post", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)()
], Comment);
exports.Comment = Comment;
