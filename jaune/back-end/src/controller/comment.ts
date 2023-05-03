import { DataSource } from "typeorm";
import { Request, Response } from "express";
import { Wilder } from "../entity/Wilder";
import { Post } from "../entity/Post";
import { Comment } from "../entity/Comment";
import dataSource from "../utils";

const commentController = {

  createComment: async (req: Request, res: Response) => {
    try {
      const dbCom = dataSource.getRepository(Comment);
      const dbPost = dataSource.getRepository(Post);
      const dbWilder = dataSource.getRepository(Wilder);
      const { content } = req.body;
      const { postId } = req.body;
      const { wilderId } = req.body;
      const [wilder] = await dbWilder.findBy({ id: wilderId })
      const [post] = await dbPost.findBy({ id: postId })

      if (wilder && post){

        await dbCom.save({
          content,
          post:post,
          wilder: wilder
        })
        res.send('comment posted!')
      } else {
        console.log('something went wrong')
      }

    } catch (error) {
      console.log(error)
    }
  },
  getAllComments: async (req: Request, res: Response) => {
    try {
      const dbCom = dataSource.getRepository(Comment)
      const allComment = await dbCom.find({relations :{post :true, wilder:true}});
      res.send(allComment)
    } catch (error) {
      console.log(error)
      res.send('couldnt load the comments')
    }
  },
  deleteComment: async (req: Request, res: Response) => {
    try {
      const dbCom = dataSource.getRepository(Comment)
      const { id }: any = req.params;
      dbCom.delete({ id })
      res.send('comment deleted')
    } catch (error) {
      console.log(error)
      res.send('couldnt delete the comment')
    }
  }
}

export default commentController
