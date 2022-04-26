import React from "react";

const Form = (props) => {
  const {values, update, submit} = props;

  const onChange = (evt) => {
    const {name, value} = evt.target;
    update(name, value);
    }


  return (
      <form onSubmit={submit}>
        <label>Name:</label>
        <input 
          type='text' 
          name='name' 
          value={values.name}
          onChange={onChange} />
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={onChange} />
        <label>Role:</label>
        <input
          type='text'
          name='role'
          value={values.role}
          onChange={onChange} />
        <input type='submit' value='Add Member'/>  
      </form>
    
  )
}

export default Form;