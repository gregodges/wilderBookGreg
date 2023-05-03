import React, { useEffect, useState } from 'react';
import './profile.scss'
import axios from 'axios';
import Card from '../../components/card/Card.js';
import Form  from '../../components/Form/Form.js';


type WilderType = {
  wilders : {
    wilder: {
      id: number,
      name:string,
      city : string
      skills:{
        id:number,
        name:string
      }[]
    }
  }
}[] | any

type Wilder = {
  id: number,
  name:string,
  city : string
  skills:{
    id:number,
    name:string
  }[] | any
}

const Profile = () => {
  const [wilders, setWilders] = useState<WilderType>([]);
  const [posted, setPosted] = useState<any>(false)

  const fetchWilder = () => {
    axios.get('http://localhost:5001/api/wilder')
    .then((res) => {
      setWilders(res.data.reverse())
    })
    .catch((err)=> console.log(err))
  }

  const reFetch = () => {
    setPosted(true)
  }
  useEffect(()=> {
    fetchWilder()
    setPosted(false)
  }, [posted])


  return (
    <div className='home'>
      <Form posted={reFetch}/>
      {wilders.map((wilder: Wilder) => <Card posted={reFetch} key={wilder.id} wilder={wilder} />)}
    </div>
  );
};

export default Profile;
