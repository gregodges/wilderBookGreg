import React, { useState } from 'react';
import './card.scss'
import  userPic from '../../assets/user.png';
import axios from 'axios';
import SkillsForm from '../Form/SkillsForm.js';
import Skills from '../skills/Skills.js';
import { NavLink } from 'react-router-dom';


type Props = {
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
 posted : (()=> void)
}
const Card = ({wilder, posted}: Props ) => {
  const deleteWilder =(id : number) => {

    axios.delete(`http://localhost:5005/api/wilder/${id}`)
    .then((res) => res)
    .catch((err) => console.error(err))
    posted()
  }






  return (
    <div className='card'>
    <div onClick={()=> deleteWilder(wilder.id)} id={(wilder.id)} className="cross"></div>
    <NavLink to={`/profile/${wilder.id}`}>

      <div className="imgWrapper">
        <img src={userPic} alt="" />
      </div>
      </NavLink>

      <div className="card__body">
      <h3 className="card__wilderName">
        {wilder.name}

        <span>{wilder.city}</span>
      </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor vero repudiandae, ratione architecto asperiores molestias illo aliquam non, culpa doloribus provident debitis voluptatum delectus magnam deserunt! Enim autem sint officia.</p>
      </div>
      <div className="card__footer">
        <h3 className='card__skillsWrap'>
          Skills
        </h3>
        <ul className="card__skills">
        {
          wilder.grades &&
          wilder.grades.map((grade) => <Skills  skills={grade} /> )
        }
        </ul>

      </div>



    </div>
  );
};

export default Card;
