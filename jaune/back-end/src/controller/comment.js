"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wilder_1 = require("../entity/Wilder");
const Post_1 = require("../entity/Post");
const Comment_1 = require("../entity/Comment");
const utils_1 = __importDefault(require("../utils"));
const commentController = {
    createComment: async (req, res) => {
        try {
            const dbCom = utils_1.default.getRepository(Comment_1.Comment);
            const dbPost = utils_1.default.getRepository(Post_1.Post);
            const dbWilder = utils_1.default.getRepository(Wilder_1.Wilder);
            const { content } = req.body;
            const { postId } = req.body;
            const { wilderId } = req.body;
            const [wilder] = await dbWilder.findBy({ id: wilderId });
            const [post] = await dbPost.findBy({ id: postId });
            if (wilder && post) {
                await dbCom.save({
                    content,
                    post: post,
                    wilder: wilder
                });
                res.send('comment posted!');
            }
            else {
                console.log('something went wrong');
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    getAllComments: async (req, res) => {
        try {
            const dbCom = utils_1.default.getRepository(Comment_1.Comment);
            const allComment = await dbCom.find();
            res.send(allComment);
        }
        catch (error) {
            console.log(error);
            res.send('couldnt load the comments');
        }
    },
    deleteComment: async (req, res) => {
        try {
            const dbCom = utils_1.default.getRepository(Comment_1.Comment);
            const { id } = req.params;
            dbCom.delete({ id });
            res.send('comment deleted');
        }
        catch (error) {
            console.log(error);
            res.send('couldnt delete the comment');
        }
    }
};
exports.default = commentController;
