import React from 'react';
import './post.scss'
import CommentForm from '../Form/CommentForm';

const Post = ({post} : any) => {
  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__userImg"><img src="https://picsum.photos/80" alt="" /></div>
        <div className="post__userInfos">
          <span>{post.wilder.name}</span>
          <span>{post.createdDate}</span>
        </div>
      </div>
      <div className="post__content">
        <h4>{post.title}</h4>
        {post.content}
      </div>
      {
        post.comments &&
        <div className="post__commentWrap">
        <span>{ post.comments.length < 1 ? 'No comment yet' : `${post.comments.length} Comments` }</span>
       {
        post.comments.map((com :any)=> <div className='comment' key={com.id}>{com.content}</div>)
       }
      <CommentForm postId={post.id}/>
      </div>
      }
    </div>
  );
};

export default Post;
