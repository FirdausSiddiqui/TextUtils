//import React from 'react'

import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App (){
  const [mode,setMode]=useState("light");
  const [alert ,setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
}
  const toggleMode = ()=>{
      if(mode==="light"){
        setMode('dark');
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        showAlert("Dark Mode Enable Successfully !","success");       
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        showAlert("Light Mode Enable Successfully !","success");
      }
  }
  
    return(
        <Router>          
            <Navbar navTitle="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>  
          <Routes> 
            <Route exact path='/About' element={<About />} />
            <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </Router>
    )
}

export default App;