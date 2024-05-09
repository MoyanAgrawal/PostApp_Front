import axios from 'axios';
import React, { useContext, useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Login.css';
import ModalAlert from './Modal';
import { MyContext } from '../MyContext';

const Register = () => {
  let navigate = useNavigate();
  let emailInputRef= useRef("");
  let fNameInputRef= useRef("");
  let lNameInputRef= useRef("");
  let passInputRef = useRef("");

  const {setShow, setAlert} = useContext(MyContext);

  async function handleRegister(e) {
    e.preventDefault();
    let email = emailInputRef.current.value;
    let fname = fNameInputRef.current.value;
    let lname = lNameInputRef.current.value;
    let pass = passInputRef.current.value;


    try {
      let res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
        email:email,
        firstName:fname,
        lasteName:lname, 
        password:pass, 
      });
      console.log(res);
      //alert("User Registerd Successfully! Please Login");
      setAlert("User Registerd Successfully! Please Sign In")
      setShow(true);
      navigate("/");
    } catch (e) {
      // alert(e.response.data)
      console.log(e);
      setAlert(e.response.data)
      setShow(true);
    }
  }



  return (
    <>
    <ModalAlert/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height:'100vh'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody  tag="form" className=' has-validation px-5 d-flex flex-column justify-content-center align-items-center'>
          <h2 className=" text-center mb-5">Create Account</h2>
          <MDBInput wrapperClass='mb-4 has-validation ' label='First Name'  size='lg' id='validationCustom01' type='text' ref={fNameInputRef} required />
          <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' ref={lNameInputRef}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form3' type='email' ref={emailInputRef} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' ref={passInputRef}/>
          {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/> */}
          
          <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            
          </div>
          <p>Already Registered? <Link to={"/login"}>Sign In</Link></p>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit' onClick={handleRegister}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </>
  )
}

export default Register