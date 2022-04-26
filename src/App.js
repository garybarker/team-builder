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
  const [teamMembers, setTeamMembers] = useState([]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
    }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    };
    setTeamMembers(newTeamMember, ...teamMembers);
    setFormValues(initialFormValues);
  }


  return (
    <div className="App">
      <Form values={formValues} update={updateForm} submit={submitForm}/>
    </div>
  );
}

export default App;
