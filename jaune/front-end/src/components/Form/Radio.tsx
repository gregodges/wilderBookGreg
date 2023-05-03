import React, { ChangeEvent} from 'react';
type Props = {
  skill: {
    id: string,
    name: string
  },
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void,
}
const Radio = ({skill, handleCheck}: Props) => {
  return (
    <div className='input'>
    <label htmlFor={skill.name}>{skill.name}</label>
    <input onChange={handleCheck}   type="checkbox" name={skill.name} id={skill.id} />
    </div>
  );
};

export default Radio;
