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



// function SignUp(){
//   const [values, handleChange] = useForm({year:'',name:'',email:'',password:'',checkbox:false});
//   const [errors, setError] = React.useState({nameError:'',emailError:'',passwordError:''});
  
//   function validateName(){
//       if (!values.name) {
//           setError((prevErrors) => ({ ...prevErrors, nameError: 'missing entry' }));
//   } else {
//       setError((prevErrors) => ({ ...prevErrors, nameError: '' }));
//   }
//   }

//   function validatePassword(){
//       if (!values.password) {
//           setError((prevErrors) => ({ ...prevErrors, passwordError: 'missing entry' }));
//       } else {
//           setError((prevErrors) => ({ ...prevErrors, passwordError: '' }));
//       }
//   }

//   function emailValidation(){
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!values.email) {
//         setError((prevErrors) => ({ ...prevErrors, emailError: 'missing entry' }));
//       } else if (!emailPattern.test(values.email)) {
//         setError((prevErrors) => ({ ...prevErrors, emailError: 'invalid email format' }));
//       } else {
//         setError((prevErrors) => ({ ...prevErrors, emailError: '' }));
//       }
//     }

  
//   function handle(){
//       validateName();
//       validatePassword();
//       emailValidation();
//       console.log('values:',values);
//   }

//   return (
//       <>
//       <h1>Hello</h1>
//       {/* <select name="year" id="year" value={values.year} onChange={handleChange}>
//           <option value="Freshman">Freshman</option>
//           <option value="Sophmore">Sophmore</option>
//           <option value="Junior">Junior</option>
//           <option value="Senior">Senior</option>    
//       </select> */}
//       <div>Name</div>
//       <input type="text" name="name" value={values.name} onChange={handleChange}/>
//       <div style={{color:'red'}}>{errors.nameError}</div>
//       <div>Email</div>
//       <input type="text" name="email" value={values.email} onChange={handleChange}/>
//       <div style={{color:'red'}}>{errors.emailError}</div>
//       <div>Password</div>
//       <input type="text" name="password" value={values.password} onChange={handleChange}/>  
//       <div style={{color:'red'}}>{errors.passwordError}</div><br/>
//       {/* <div><input type="checkbox" name="checkbox" value={values.checkbox} onChange={handleChange}/> 
//           Rememeber me
//       </div> */}
//       <button onClick={handle}>Submit</button>    
//       </>
//   );
// }

// // ReactDOM.render(
// //     <SignUp/>,
// //     document.getElementById('root')
// // )
// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);
// root.render(<SignUp />);
