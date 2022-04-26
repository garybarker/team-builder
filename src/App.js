import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';


function App() {

  const initialFormValues = {
    name: '',
    email: '',
    role: ''
  }


  

  
  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState([]);

  const onChange = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
    }

  const onSubmit = (e) => {
    e.preventDefault();
    setMembers([formValues, ...members]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form values={formValues} update={onChange} submit={onSubmit}/>
      <div>
        {members.map((member, idx) => {
          return (
          <div key={idx}>
            <p>{member.name}</p>
            <p>{member.role}</p>
            <p>{member.email}</p>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
