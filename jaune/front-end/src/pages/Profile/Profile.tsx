import React, { useEffect, useState } from 'react';
import './profile.scss'
import axios from 'axios';
import Card from '../../components/card/Card.js';
import Form  from '../../components/Form/Form.js';
import Header from '../../components/header/Header';


type WilderType = {
  wilders : {
    wilder: {
      id: number,
      name:string,
      city : string
      grades:{
        wilderId: number,
        skillId: number,
        grade: number,
        skill:{
          id:number,
          name:string
        }
      }[]
    }
  }
}[] | any

type Wilder = {
  id: number,
  name:string,
  city : string
  grades:{
    wilderId: number,
    skillId: number,
    grade: number,
    skill:{
      id:number,
      name:string
    }[]
  }[] | any
}

const Profile = () => {
  const [wilders, setWilders] = useState<WilderType>([]);
  const [posted, setPosted] = useState<boolean>(false)

  const fetchWilder = () => {
    axios.get('http://localhost:5005/api/wilder')
    .then((res) => {
      setWilders(res.data.reverse())
    })
    .catch((err)=> console.log(err))
  }

  const reFetch = () => {
    setPosted(!posted)
  }
  useEffect(()=> {
    fetchWilder()
    setPosted(false)
  }, [posted])


  return (
    <div className='profile'>
      <Header/>
      <div className="gridWrap">
      <Form posted={reFetch}/>

      {wilders.map((wilder: Wilder) => <Card posted={reFetch} key={wilder.id} wilder={wilder} />)}
      </div>
    </div>
  );
};

export default Profile;
