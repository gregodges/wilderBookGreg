"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../controller/post"));
const comment_1 = __importDefault(require("../controller/comment"));
const postRouter = express_1.default.Router();
postRouter.post('/', post_1.default.createPost);
postRouter.get('/', post_1.default.getPost);
// postRouter.get('/:id', postController.)
postRouter.put('/:id', post_1.default.updatePost);
postRouter.delete('/:id', post_1.default.deletePost);
postRouter.post('/comment', comment_1.default.createComment);
postRouter.get('/comment', comment_1.default.getAllComments);
postRouter.delete('/comment/:id', comment_1.default.deleteComment);
// postRouter.get('/comment' , commentController.getAllComments)
exports.default = postRouter;
