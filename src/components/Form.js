import React from "react";

const Form = (props) => {
  const {values, update, submit} = props;

  const onSubmit = (evt) => {
    evt.preventDevault();
    submit();
  }

  const onChange = (evt) => {
    const {name, value} = evt.target;
    update(name, value);
    }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <label/>
          Name:
          <input 
            type='text' 
            name='name' 
            value={values.name}
            onChange={onChange}
            />
      </form>
    </div>

  )
}

export default Form;