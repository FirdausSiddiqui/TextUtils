//import React from 'react'

import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
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
        <>
           <Navbar navTitle="TextUtils" mode={mode} toggleMode={toggleMode}/>
           <Alert alert={alert}/>
           <TextForm mode={mode} showAlert={showAlert}/>
           
        </>
    )
}

export default App;