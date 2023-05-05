import React from 'react';
import './skills.scss'

type SkillType = {
  skills : {
    grade : number,
    skill: {
      id: number,
      name: string
    },
    wilderId: number,
    skillId: number
  }

}
const Skills = (skills : SkillType) => {


  return (
    <li>
      <span>{skills.skills.skill.name }</span>
      <span>{skills.skills.grade}</span>


    </li>
  );
};

export default Skills;
