import {Link, useNavigate} from 'react-router-dom'
import { useContext, useRef } from 'react';
import axios from 'axios'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Login.css';
import { MyContext } from '../MyContext'; 
import ModalAlert from './Modal';

function Login() {
  let navigate = useNavigate();
  let emailInputRef= useRef();
  let fNameInputRef= useRef();
  let lNameInputRef= useRef();
  let passInputRef = useRef();

  const {setShow, setAlert} = useContext(MyContext);

  async function login(e) {
    e.preventDefault();
    let email = emailInputRef.current.value;
    let pass = passInputRef.current.value;
   

    try {
      let res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email:email, 
        password:pass,
      });
      console.log(res);
      navigate("/home");
    } catch (e) {
      console.log(e);
      setAlert(e.response.data)
      setShow(true);
      //alert(e.response.data)
    }
  }
  return (
    <>
      <ModalAlert />

      <MDBContainer
        fluid
        className="d-flex flex-column align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
          height: "100vh",
        }}
      >
        <div className="px-2 bg-white text-center" style={{position:"fixed",top:"0",zIndex:"1022"}}>
          <p>Demo Email:- demo@gmail.com</p>
          <p>Demo Pass:- 123456</p>
        </div>
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ minWidth: "400px" }}>
          <MDBCardBody className="px-5">
            <h2 className=" text-center mb-5">Sign In</h2>

            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              ref={emailInputRef}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              ref={passInputRef}
            />

            <div className="d-flex flex-row justify-content-center mb-4">
              {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' /> */}
              <p>
                Not Registered? <Link to={"/register"}>Sign Up</Link>
              </p>
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              onClick={login}
            >
              Login
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Login;
