import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



const Header = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState("");
  const[token,setToken]=useState("");
 const[login,setLogin]= useState(false);

  const logoutUser = async () => {
    setLogin(true)
    console.log("Logout clicked")
    try {
      await axios.get("http://localhost:8080/logout",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,
          
        },
        
      })
      .then((res) => {
        // console.log(res.data[0].name)
        console.log(res);
        setToken('');
        setUser("");
        navigate('/login')
        // setLoading(true)
      });
    } catch (err) {
      console.log(err);
    }
  };



const currentUser = async () => {
    try {
      await axios.get("http://localhost:8080/user")
      .then((res) => {

        setUser(res.data.name)
        setToken(res.data.accessToken)
        setLogin(true)
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    currentUser();

  },[])
 


  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light main-header ">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                  TechLift.pk/MERN03
                </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                 
                  {/* <li className="nav-item" onClick={currentUser}>
                    <Link className="nav-link" to="http://127.0.0.1:8080/auth/github" >
                      Signin with GitHub
                      
                    </Link>
                  </li> */}

                {login ?
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logoutUser}>
                      Logout
                    </Link>
                  </li> : (  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  )}
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="http://127.0.0.1:8080/logout">
                      Logout
                    </Link>
                  </li> */}
                  <li className="nav-item current-user">
                    <Link className="nav-link" to="">
                      {user}
                    </Link>
                  </li>
                 
                 
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Header