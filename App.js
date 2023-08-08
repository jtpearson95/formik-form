import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik'
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      if (!formik.errors.emailField && !formik.errors.pswField) {
        alert('Login Successful');
      };
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!values.name) errors.name = 'Field required';
      if(!values.emailField) errors.emailField = 'Field required';
      else if (!emailPattern.test(values.emailField)) errors.emailField = 'Username should be an email';
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange}
        value={formik.values.name}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
          <div>Email</div>
          <input id="emailField" type="text" onChange={formik.handleChange}
        value={formik.values.emailField}/>
        <div id="emailError" style={{ color: 'red' }}>{formik.errors.emailField}</div>
          <div>Password</div>
          <input id="pswField" type="text" onChange={formik.handleChange}
        value={formik.values.pswField}/>
        <div id="pswError" style={{ color: 'red' }}>{formik.errors.pswField}</div>
            <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
