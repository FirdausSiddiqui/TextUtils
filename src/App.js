//import React from 'react'

import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App (){

  const [mode,setMode]=useState("light");
  const toggleMode = ()=>{
      if(mode==="light"){
        setMode('dark');
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
      }
  }
    return(
        <>
           <Navbar navTitle="TextUtils" mode={mode} toggleMode={toggleMode}/>
           <TextForm mode={mode}/>
           
        </>
    )
}

export default App;