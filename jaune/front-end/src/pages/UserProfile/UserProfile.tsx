import React, { useEffect, useState } from 'react';
import './userProfile.scss';
import  userPic from '../../assets/user.png';
import skills from '../../assets/skills.png';
import uni from '../../assets/uni.png';
import SkillsForm from '../../components/Form/SkillsForm';
import UniForm from '../../components/Form/UniForm';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Skills from '../../components/skills/Skills';
import Header from '../../components/header/Header';

const UserProfile = () => {
  const {id} : any = useParams();
  const [wilder, setWilder] = useState<any>({})
  const [isSkillsFormOpen, setIsSkillsFormOpen] = useState(false);
  const [isUniFormOpen, setIsUniFormOpen] = useState(false);

  const fetchWilderProfile = () => {
    axios.get(`http://localhost:5005/api/wilder/${id}`)
    .then((res) => {
      setWilder(res.data)

    })
    .catch((err) => console.log(err))
  }

  const openSkillsForm = () => {
    setIsSkillsFormOpen(!isSkillsFormOpen)
  }
  const openUniForm = () => {
    setIsUniFormOpen(!isUniFormOpen)
  }

  useEffect(()=> {
    fetchWilderProfile()
  },[])
  return (
    <div className='userProfile'>
      <Header/>
      <h2>Welcome home {wilder.name}</h2>
      <span className='userProfile__edit'><p>You can edit your profile or manage your preferences here.</p></span>
      <div className="userProfile__header">
        <div className="userProfile__imgWrap">
      <img src="https://picsum.photos/150" alt="" />
        </div>
      <div className="userProfile__infos">
        <span>{wilder.name}</span>
        <span>{wilder.city}</span>
      </div>
      </div>
      <div className="userProfile__body">
        <div className="userProfile__gradeWrap">
          <img src={skills} alt="" />
          {wilder.grades &&
            wilder.grades.map((grade : any)=> <Skills key={grade.skill.id} skills={grade}/>)
          }
            <button onClick={openSkillsForm}>Add skill +</button>
             {isSkillsFormOpen && <SkillsForm  closeSkillForm={openSkillsForm} id={wilder.id} /> }

        </div>
        <div className="userProfile__uniWrap">
          <img src={uni} alt="" />
          {wilder.universities &&
            wilder.universities.map((uni : any) => <span key={uni.id} >{uni.name}</span>)
          }
                      <button onClick={openUniForm}>Add skill +</button>
             {isUniFormOpen && <UniForm  closeUniForm={openUniForm} id={wilder.id} /> }
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
