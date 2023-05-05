import React, { useEffect, useState, ChangeEvent  } from 'react';
import './CommentForm'
import axios from 'axios';
import Radio from './Radio';

type Props = {
  closeUniForm : (()=> void),
  id: number
}
const UniForm = ({closeUniForm, id}: Props) => {
const [allUni, setAllUni] = useState([]);
const [wilder, setWilder] = useState<number>(id)
const [selectedUni, setSelectedUni] = useState<number>()


const fetchAllUni = () =>{
  axios.get('http://localhost:5005/api/university')
  .then((res)=> setAllUni(res.data))
  .catch((err)=> console.log(err))
}
const handleCheck =(event: ChangeEvent<HTMLInputElement>)=> {
  if(event.target instanceof HTMLElement){
    setSelectedUni(Number(event.target.id))
  }
  }

  const addUni =(event: ChangeEvent<HTMLFormElement>) => {
  event.preventDefault()

    if(event.target instanceof HTMLElement){
      console.log({wilderId : wilder, uniId : selectedUni })
      axios.post('http://localhost:5005/api/wilder/university', {wilderId : wilder, uniId : selectedUni })
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))
      closeUniForm()
    }

  }
useEffect(()=> {
  fetchAllUni()
},[])
  return (
    <div className='uniForm'>

      <span>Choose your Skill(s)</span>
      <form onSubmit={addUni}>

      <div className="checkboxWrapper">
          { allUni &&
            allUni.map((uni) => <Radio  handleCheck={handleCheck} key={uni.id} props={uni}/>)}
      </div>
      <button >Add</button>
      </form>
    </div>

  );
};

export default UniForm;
