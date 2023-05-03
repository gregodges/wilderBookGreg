import React from 'react';
import './post.scss'

const Post = ({post} : any) => {
  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__userImg"><img src="https://picsum.photos/80" alt="" /></div>
        <div className="post__userInfos">
          <span>name</span>
          <span>createdDate</span>
        </div>
      </div>
      <div className="post__content">
        <h4>title</h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda dolores ratione culpa fugiat provident accusamus consectetur animi. In culpa molestiae nihil alias modi rem ducimus natus numquam iste labore!
      </div>
      <div className="post__commentWrap">
        <span> 3 Comments</span>
        <div className="post__comment">
            this is a comment
        </div>
        <div className="post__comment">
            this is a comment
        </div><div className="post__comment">
            this is a comment
        </div>
      </div>
    </div>
  );
};

export default Post;
