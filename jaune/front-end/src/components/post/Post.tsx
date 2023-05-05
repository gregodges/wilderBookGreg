import React, { useEffect, useState } from 'react';
import './post.scss'
import CommentForm from '../Form/CommentForm';
import axios from 'axios';
import PostComment from '../postComment/PostComment';
 type Post = {
  id: number,
  title: string,
  content: string,
  createdDate: number,
  updatedDate: number,
  wilder:{
    id: number,
    name: string,
    city: string,
    universities : {
      id:number,
      name:string
    }[]
  },
  comments :{
    id: number,
    content: string,
    createdDate: number,
    updatedDate:number,
    wilder: {
      id: number,
      name: string,
      city: string,
    },
    post: {
      id:number,
      title: string,
      content: string,
      createdDate: number,
      updatedDate:number,
    }
  }[]
}

 type Props = {
  post: Post,
  refetch :any
}

type Com = {

    id: number,
    content: string,
    createdDate: number,
    updatedDate:number,
    wilder: {
      id: number,
      name: string,
      city: string,
    },
    post: {
      id:number,
      title: string,
      content: string,
      createdDate: number,
      updatedDate:number,
    }
  }

const Post = ({post , refetch} : Props ) => {


  const deletePost = () => {
    axios.delete(`http://localhost:5005/api/post/${post.id}`)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
    refetch()
  }
  const formatDate = (dateString : number) => {
    const date = new Date(dateString);
    const options : any = { timeZone: 'Europe/Paris',weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  }
  return (
    <div className='post'>
        <div onClick={deletePost} className="cross"></div>
      <div className="post__header">
        <div className="post__userImg"><img src="https://picsum.photos/80" alt="" /></div>
        <div className="post__userInfos">
          <span>{post.wilder.name}</span>
          <span>{formatDate(post.createdDate)}</span>
        </div>
      </div>
      <div className="post__content">
        <h4>{post.title}</h4>
        {post.content}
      </div>
      {
        post.comments &&
        <div className="post__commentWrap">
          <span className='post__commentNumber'>{ post.comments.length < 1 ? 'No comment yet' : `${post.comments.length} Comments` }</span>
          <div className="post__commentSection">

       {
         post.comments.map((com : Com )=> <PostComment comment={com}/>)
        }
      <CommentForm postId={post.id}/>
        </div>
      </div>
      }
    </div>
  );
};

export default Post;
