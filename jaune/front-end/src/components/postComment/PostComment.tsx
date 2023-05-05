import React from 'react';
import './postComment.scss'
import userPic from '../../assets/user.png'

type Comment = {
  comment:{
    content : string,
    createdDate : number,
    id: number,
    updatedDate: number,
    post:{
      content : string,
      createdDate : number,
      id: number,
      updatedDate: number,
    },
    wilder :{
      id: number,
      city: string,
      name : string
    }
  }
}


const PostComment = ({comment} : Comment) => {
  const formatDate = (dateString : number) => {
    const date = new Date(dateString);
    const options : any = { timeZone: 'Europe/Paris',weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);

  }
  return (
    <div className='postComment'>
      <div className="postComment__userInfos">
        <img src={userPic} alt="" />
        <span>{comment.wilder.name}</span>
      </div>
      <div className="postComment__content">
        <span>{comment.content}</span>
        <span>{formatDate(comment.createdDate)}</span>
      </div>
    </div>
  );
};

export default PostComment;
