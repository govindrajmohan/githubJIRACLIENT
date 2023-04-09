import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="container components" >
    <div className="row">
      <div className="col-sm-12 col-md-3"></div>
      <div className="col-sm-12 col-md-6 user-form">
        <h3 className="text-center">User Login</h3>
        {/* <p>
            {flag
                ? <span className="success-msg">User Successfully Logged In...!!!</span>
                : ""
              }
              {flag2
                ? <span style={{color:"red"}}>Email / Password incorrect</span>
                : ""
              }
              
          </p> */}

        <form className='login-form'>
      
          <Link className="btn btn-primary w-100 login-signup-btn" to="http://127.0.0.1:8080/auth/github">Signin with Github</Link>
        </form>
      </div>
      <div className="col-sm-12 col-md-3 "></div>
    </div>
  </div>
  )
}
export default Login;