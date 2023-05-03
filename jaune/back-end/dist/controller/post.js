"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../entity/Post");
const Wilder_1 = require("../entity/Wilder");
const utils_1 = __importDefault(require("../utils"));
const postController = {
    createPost: async (req, res) => {
        try {
            const dbPost = utils_1.default.getRepository(Post_1.Post);
            const { title } = req.body;
            const { content } = req.body;
            const wilder = await utils_1.default.getRepository(Wilder_1.Wilder).findOne({
                where: { id: req.body.wilder },
            });
            await dbPost.save({
                title,
                content,
                wilder: wilder
            });
            res.send('posted');
        }
        catch (error) {
            res.send('big fail my man');
            console.log(error);
        }
    },
    toto: async (req, res) => {
        console.log('ici');
        try {
            const dbPost = utils_1.default.getRepository(Post_1.Post);
            const allPost = await dbPost.find({ relations: { comments: true, wilders: true } });
            console.log(allPost);
            res.send('ici');
        }
        catch (error) {
            res.send("error retrieving the posts");
        }
    },
    updatePost: async (req, res) => {
        try {
            const dbPost = utils_1.default.getRepository(Post_1.Post);
            const { id } = req.params;
            const { content } = req.body;
            const { title } = req.body;
            const postId = await dbPost.findBy({ id });
            console.log(postId);
            if (postId.length <= 0) {
                return res.send('Did not find the post');
            }
            else {
                await dbPost.update(id, {
                    title: title,
                    content: content
                });
                res.send('post updated');
            }
        }
        catch (error) {
            res.send('error updating the post');
        }
    },
    deletePost: async (req, res) => {
        try {
            const { id } = req.params;
            const dbPost = utils_1.default.getRepository(Post_1.Post);
            await dbPost.delete(id);
            res.send('post deleted');
        }
        catch (error) {
            res.send('couldnt delete the post');
        }
    }
};
exports.default = postController;
