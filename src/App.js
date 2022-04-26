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

  return (
    <div className="App">
      <Form values={formValues}/>
    </div>
  );
}

export default App;
