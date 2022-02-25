import React, { useState } from "react";

export default function TextForm(){

    const [text ,setText] =useState("");
    const [mode ,setMode]=useState({           
        color:"black",
        backgroundColor:"white"
    });
    const [modeButton,setModeButton]=useState("Enable Dark Mode");

    function changeHandler(event){
        const t=event.target.value;
        console.log("target"+t);
        console.log("text hook "+text);
        setText(t);
    }
    function handleClick(){
        const upperText = text.toUpperCase();
        setText(upperText);
    }
    function handleLower(){
        const upperText = text.toLowerCase();
        setText(upperText);
    }
    function handleReset(){
        setText("")
    }
 
    function handleMode(){
        if(mode.color==="white"){
            setMode({
                color:"black",
                backgroundColor:"white"
            });
            setModeButton("Enable Dark Mode");
        }
        if(mode.color==="black"){
            setMode({
                color:"white",
                backgroundColor:"black"
            });
            setModeButton("Enable Light Mode");

        }
    }

    function copyText(){
        let data = document.getElementById("mybox");
        data.select();
        navigator.clipboard.writeText(data.value);

    }
    function removeSpaces(){
        // const newString = text.replace(/\s+/g,' ').trim();
        // setText(newString);
        
        const newString = text.split(/[ ]+/);
        setText(newString.join(" "));
        
        
    }

    

    return(      
        <div  className="container" style={mode}>           
            <div className="my-3  container" style={mode}>    
                <h1 className="Heading">Enter Text To Analyze</h1>       
                <textarea className="form-control" id="mybox" value={text} onChange={changeHandler} rows="8" />
                <button type="button" className="btn btn-primary m-2" onClick={handleClick}>Convert To Uppercase</button>
                <button type="button" className="btn btn-primary m-2" onClick={handleLower}>Convert To Lowercase</button>
                <button type="button" className="btn btn-primary m-2" onClick={handleReset}>Clear Text</button>      
                <button type="button" className="btn btn-primary m-2" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-primary m-2" onClick={removeSpaces}>Remove Extra Space</button>
                <button type="button" className="btn btn-primary m-2" onClick={handleMode}>{modeButton}</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary here</h2>
                <p>Number of Words = {(text==="")?0:text.split(" ").length} and Number of character ={text.length}</p>
            </div>
        </div>          
    )
}