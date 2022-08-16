
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  var [darkmode,setDarkmode]=useState('light');
  var [alert,setAlert]=useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  var togglemode = ()=>{
    if(darkmode==="light")
    {
      setDarkmode('dark')
      document.body.style.backgroundColor="#2b2929";
      showAlert("Dark mode enabled","success")
      document.title="Dark mode"
    }
    else{
    setDarkmode('light')
    document.body.style.backgroundColor="";
    showAlert("light mode enabled","success")
    document.title="Light mode"
    }
  }

  return (
   <>
   <Router>
   <Navbar title="TextUtils" mode={darkmode} togglemode={togglemode}/>
   <div className="container">
    {/* <Text heading="Enter text to Analyse"/> */}
   </div>
   <Alert alert={alert}></Alert>
   <Routes>
    <Route exact path='/' element={<Text showAlert={showAlert} heading="Enter text" mode={darkmode}/>}>
    
    </Route>
    <Route exact path='/about' element={<About/>}>
      {/* use exact as router uses partial matching it will render /path and /path/path1 as only 1 component */}
      
    </Route>
   </Routes>
   </Router>
  
   </>
  );
}
//tittle is prop
export default App;
