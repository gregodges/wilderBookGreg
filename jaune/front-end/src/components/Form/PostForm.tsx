import React, {ChangeEvent, useState} from 'react';
import './postForm.scss'
import axios from 'axios';

const PostForm = () => {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleSubmit = (event : ChangeEvent<HTMLFormElement>) => {

    const formData = new FormData(event.target);
    const formDataObj :any = {};
    formData.forEach((value, key) => {
    formDataObj[key] = value;
    });
   const formToSend = {...formDataObj, "wilderId" : "10"};

   axios.post('http://localhost:5005/api/post', formToSend)
   .then((res) => console.log(res))
   .catch((err)=> console.log(err))
  }
  const deployForm = () =>{
    setIsFormOpen(true)
  }
  return (
    <div onClick={deployForm} className={isFormOpen ? 'postForm--open' : 'postForm'}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder={!isFormOpen ?'Tell us what is in your mind' : 'Title'} />
        <textarea placeholder="Tell us what's up" name="content" col="30" rows='15' id=""></textarea>
        <button>Post</button>
      </form>
    </div>
  );
};

export default PostForm;
