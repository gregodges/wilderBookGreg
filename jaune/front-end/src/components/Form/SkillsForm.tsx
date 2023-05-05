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
  const [gradeValue, setGradeValue] = useState<number | string>(5)



  const fetchSkills = () => {
    axios.get('http://localhost:5005/api/skills')
    .then((res) => setSkills(res.data))
    .catch((err) => console.log(err))
  }
  const handleCheck =(event: ChangeEvent<HTMLInputElement>)=> {
    if(event.target instanceof HTMLElement){
      setSelectedSkill(Number(event.target.id))
    }
    }
const handleGradeValue = (event: ChangeEvent<HTMLInputElement>) => {
  setGradeValue(event.target.value)
}
  const addSkills =(event: ChangeEvent<HTMLFormElement>) => {
    if(event.target instanceof HTMLElement){
      console.log({wilderId : wilder, skillId: selectedSkill, grade : gradeValue })
      axios.post('http://localhost:5005/api/wilder/skillGrade', {wilderId : wilder, skillId: selectedSkill, grade : gradeValue })
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
            skills.map((skill) => <Radio  handleCheck={handleCheck} key={skill.id} props={skill}/>)}
      </div>

            <input className='skillsForm__range' onChange={handleGradeValue} type="range" value={gradeValue} min="0" max="10" />
      <button >Add</button>
            <span className="skillForm__rangeValue">{gradeValue}</span>
      </form>
    </div>
  );
};

export default SkillsForm;
