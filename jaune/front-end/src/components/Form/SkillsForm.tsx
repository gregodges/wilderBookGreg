import React, { useEffect, useState, ChangeEvent } from 'react';
import Radio from './Radio.js';
import axios from 'axios';
import './skillsForm.scss'
type Props = {
  id: number,
  closeSkillForm : (Function: boolean | void) => void,
}
type SkillTypes = {
id: string,
name: string
}
const SkillsForm = ({id, closeSkillForm}: Props) => {
  const [skills, setSkills] =useState<SkillTypes[]>()
  const [wilder, setWilder] = useState<number>(id)
  const [selectedSkill, setSelectedSkill] = useState<number>()
  const fetchSkills = () => {
    axios.get('http://localhost:5001/api/skills')
    .then((res) => setSkills(res.data))
    .catch((err) => console.log(err))
  }
  const handleCheck =(event: ChangeEvent<HTMLInputElement>)=> {
    if(event.target instanceof HTMLElement){
      setSelectedSkill(Number(event.target.id))
    }
    }

  const addSkills =(event: ChangeEvent<HTMLFormElement>) => {
    if(event.target instanceof HTMLElement){

      event.preventDefault()
      console.log({ id: wilder, skill: selectedSkill })
      axios.post('http://localhost:5001/api/wilder/skill', {id : wilder, skill: selectedSkill })
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))
      closeSkillForm()
    }

  }
  useEffect(()=> {
    fetchSkills()
  },[])
  return (
    <div className='skillsForm'>
      <span>Choose your Skill(s)</span>
      <form onSubmit={addSkills}>

      <div className="checkboxWrapper">

          { skills &&
            skills.map((skill) => <Radio  handleCheck={handleCheck} key={skill.id} skill={skill}/>)}
      </div>
      <button  >Add</button>
      </form>
    </div>
  );
};

export default SkillsForm;
