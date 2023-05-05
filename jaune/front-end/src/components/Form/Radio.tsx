import React, { ChangeEvent} from 'react';
type Props = {
  props: {
    id: string,
    name: string
  },
  handleCheck: (event: ChangeEvent<HTMLInputElement>) => void,
}
const Radio = ({props, handleCheck}: Props) => {
  return (
    <div className='input'>
    <label htmlFor={props.name}>{props.name}</label>
    <input onChange={handleCheck}   type="checkbox" name={props.name} id={props.id} />
    </div>
  );
};

export default Radio;
