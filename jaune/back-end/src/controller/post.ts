import { Post } from '../entity/Post';
import { Wilder } from '../entity/Wilder';
import  dataSource  from '../utils';
import { Request, Response } from 'express';

const postController = {

  deleteAllPost : async (req:Request, res:Response) => {
    const repository = dataSource.getRepository(Post);
    await repository.clear();
  },
createPost : async (req:Request, res:Response) => {
  try {
    const wilderId = req.body.wilderId;
    const title = req.body.title;
    const content = req.body.content;
    const wilder : Wilder | null = await dataSource.getRepository(Wilder).findOne({where :{id: wilderId}})
    console.log(wilderId);
    console.log(wilder)

    if(!wilder){
    return res.send("no wilder")
    }
    await dataSource.getRepository(Post).save({
      title,
      content,
      wilder,
    });
    res.send("post created");
  } catch(err) {
    console.log(err);
    res.send("error while creating the post");
  }
  // try{
  //   const dbPost = dataSource.getRepository(Post)
  // const {title} : any  = req.body;
  // const {content}= req.body;
  //   const wilder : any = await dataSource.getRepository(Wilder).findBy({
  //     id :  req.body.wilder,
  //   });
  //    const newPost = await dbPost.save({
  //       title ,
  //       content,
  //       wilder
  //     })
  //     console.log(newPost)
  //     res.send(newPost)
  // } catch (error){
  //   res.send('big fail my man')
  //   console.log(error)
  // }
},

toto : async (req:Request, res:Response) =>{

try {
  const dbPost = dataSource.getRepository(Post);
  const allPost = await dbPost.find({relations : {comments: true, wilder:true}})
  res.send(allPost)
} catch (error){
  res.send("error retrieving the posts")
}
},

updatePost : async (req:Request, res:Response) => {
  try{
    const dbPost = dataSource.getRepository(Post)
    const {id} :any = req.params;
    const {content} = req.body;
    const {title} = req.body;
   const postId =  await dbPost.findBy({id})
   console.log(postId);

    if (postId.length <= 0) {
      return res.send('Did not find the post')
    } else {
      await dbPost.update(id,{
        title: title,
        content : content
      })
      res.send('post updated')
    }
  }catch(error){
    res.send('error updating the post')
  }
},

deletePost : async (req:Request, res: Response) =>{
  try{
    const {id} : any = req.params;
    const dbPost = dataSource.getRepository(Post);
    await dbPost.delete(id);
    res.send('post deleted')

  }
    catch(error){
      res.send('couldnt delete the post')
    }
  }
}

export default postController
