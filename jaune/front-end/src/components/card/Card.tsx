import React, { useState } from 'react';
import './card.scss'
import  '../../assets/user.png';
import axios from 'axios';
import SkillsForm from '../Form/SkillsForm.js';
import Skills from '../skills/Skills.js';

type Props = {
 wilder: {
  id: any,
  name: string,
  city: string,
  skills: {
    id: number,
    name: string
  }[]
 }
 posted :any
}
const Card = ({wilder, posted}: Props ) => {
  const [isSkillsFormOpen, setIsSkillsFormOpen] = useState(false)
  const deleteWilder =(id : number) => {

    axios.delete(`http://localhost:5001/api/wilder/${id}`)
    .then((res) => res)
    .catch((err) => console.error(err))
    posted()
  }

  const openSkillsForm = () => {
    setIsSkillsFormOpen(!isSkillsFormOpen)
  }


  return (
    <div className='card'>
    <div onClick={()=> deleteWilder(wilder.id)} id={(wilder.id)} className="cross"></div>
      <div className="imgWrapper">
        <img src={'../../assets/user.png'} alt="" />
      </div>
      <div className="card__body">
      <h3 className="card__wilderName">
        {wilder.name}
      </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor vero repudiandae, ratione architecto asperiores molestias illo aliquam non, culpa doloribus provident debitis voluptatum delectus magnam deserunt! Enim autem sint officia.</p>
      </div>
      <div className="card__footer">
        <h3 className='card__skillsWrap'>
          Skills
        </h3>
        <ul className="card__skills">
        {
          wilder.skills &&
          wilder.skills.map((skill) => <Skills key={skill.id} skills={skill.name} /> )
        }
        </ul>
        <p>You have unlocked a new skill ? <span onClick={openSkillsForm}>Add it here !</span></p>


      </div>

        {isSkillsFormOpen && <SkillsForm closeSkillForm={openSkillsForm} id={wilder.id} /> }

    </div>
  );
};

export default Card;
