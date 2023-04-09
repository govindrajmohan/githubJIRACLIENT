import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Passport from './components/Passport'
import Home from './components/Home';
import {Routes, Route } from "react-router-dom";
import Logout from './components/Logout';
import Login  from './components/Login';
function App() {
  return (
    <div className='main-body'> 
      <Header/>
      <Routes>
        
           <Route path="/" element={<Home />} />
           <Route path="/logout" element={<Logout />} />
           <Route path="/login" element={<Login />} />


          
          <Route path="/passport" element={<Passport />} />
       
      </Routes>
    </div>
    // <div className="App" style={{background:'red'}}>
    //   <h1>Google Authentication</h1>
    //   <a href="http://localhost:5000/auth/google">Login with Google</a>
    //   <a href="http://localhost:5000/auth/logout">Logout</a>

    // </div>
  );
}

export default App;
