import React, {ChangeEvent, useState} from 'react';
import './form.scss'
import axios from 'axios';

const Form = ({posted} : any) => {
const [value, setValue] = useState({name: '', city:''})

const handleChange = (event:any): any => {
  setValue(event.target.value)
}
  const handleWilder = (event : ChangeEvent<HTMLFormElement>) =>{

    event.preventDefault()

    const formData = new FormData(event.target);
    const formDataObj :any = {};
    formData.forEach((value, key) => {
    formDataObj[key] = value;
    });

    axios.post('http://localhost:5001/api/wilder', formDataObj )
    .then((res) => res)
    .catch((err)=> console.error(err))
    setValue({name: '', city:''})
    posted()

  }

  return (
    <form onSubmit={handleWilder}>
      <label htmlFor="name">Name</label>
      <input onChange={handleChange} value={value.name}  type="text" name="name" id="name" />
      <label htmlFor="city">City</label>
      <input  onChange={handleChange} value={value.city}  type="text" name="city" id="city" />
      <button type="submit">Add Wilder</button>
    </form>

  );
};

export default Form;
