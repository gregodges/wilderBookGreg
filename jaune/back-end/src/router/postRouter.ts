import express from 'express'
import postController from '../controller/post';
import commentController from '../controller/comment';

const postRouter = express.Router();

postRouter.post('/', postController.createPost)
postRouter.get('/', postController.toto)
postRouter.delete('/all', postController.deleteAllPost)
// postRouter.get('/:id', postController.)
postRouter.put('/:id', postController.updatePost)
postRouter.delete('/:id', postController.deletePost)

postRouter.post('/comment' , commentController.createComment)
postRouter.get('/comment' , commentController.getAllComments)
postRouter.delete('/comment/:id' , commentController.deleteComment)
// postRouter.get('/comment' , commentController.getAllComments)

export default postRouter
