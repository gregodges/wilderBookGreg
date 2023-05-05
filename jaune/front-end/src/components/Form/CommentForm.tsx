import React, {ChangeEvent} from 'react';
import axios from 'axios'
import './commentForm.scss'

const CommentForm = ({postId} : number | any ) => {


  const handleSubmit = (event : ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formDataObj :any = {};
    formData.forEach((value, key) => {
    formDataObj[key] = value;
    });
   const formToSend = {...formDataObj, "wilderId" : "5", "postId" : `${postId}`};

   axios.post('http://localhost:5005/api/post/comment', formToSend)
   .then((res) => console.log(res))
   .catch((err)=> console.log(err))
  }
  return (
    <div className='commentForm'>
      <form onSubmit={handleSubmit}>
      <input name='content' id='content' placeholder='Add your comment' type="text" />
      <button>Add</button>
      </form>
    </div>
  );
};

export default CommentForm;
