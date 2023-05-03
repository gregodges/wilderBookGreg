import React from 'react';
import './skills.scss'

type SkillType = {
  skills : {
    id:number,
    name:string
  } | any

}
const Skills = (skills : SkillType) => {
  return (
    <li>
      {skills.skills}
    </li>
  );
};

export default Skills;
