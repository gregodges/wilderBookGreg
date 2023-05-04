import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Post from '../../components/post/Post';
import './home.scss'
import axios from 'axios';
import PostForm from '../../components/Form/PostForm';

const Home = () => {
  const [allPosts, setAllPosts] = useState([])

  const fetchAllPosts = () => {
    axios.get('http://localhost:5005/api/post')
    .then((res : any) => {
      setAllPosts(res.data.reverse())
      console.log(res.data);


    })
    .catch((err :any)=> console.log(err))

  }
  useEffect(()=>{
    fetchAllPosts()


  },[])
  return (
    <div className='home'>
      <h2>what's new on your feed ...</h2>
      <PostForm/>
      {
        allPosts.map((post : any) => <Post key={post.id} post={post}/>)
      }

    </div>
  );
};

export default Home;
