import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Post from '../../components/post/Post';
import './home.scss'
import axios from 'axios';
import PostForm from '../../components/Form/PostForm';

type OnePost = {
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

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [deleted, setDeleted] = useState<boolean>(false)


  const refetch = () => {
    setDeleted(true)
  }
  const fetchAllPosts = () => {
    axios.get('http://localhost:5005/api/post')
    .then((res : any) => {
      setAllPosts(res.data.reverse())
    })
    .catch((err :any)=> console.log(err))

  }
  useEffect(()=>{
    fetchAllPosts()
  },[deleted])
  return (
    <div className='home'>
      <Header/>
      <h2>what's new on your feed ...</h2>
      <PostForm/>
      {
        allPosts.map((post : OnePost) => <Post refetch={refetch} key={post.id} post={post}/>)
      }

    </div>
  );
};

export default Home;
