import React, { useState } from "react";

export default function TextForm(props){

    const [text ,setText] =useState("");
   
   

    function changeHandler(event){
        const t=event.target.value;
        console.log("target"+t);
        console.log("text hook "+text);
        setText(t);
    }
    function handleClick(){
        const upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Succesfully Converted to UpperCase","success");
    }
    function handleLower(){
        const upperText = text.toLowerCase();
        setText(upperText);
        props.showAlert("Succesfully Converted to LowerCase","success");
    }
    function handleReset(){
        setText("");
        props.showAlert("Text Has been cleared Successfully !","success");
    }
 
    function copyText(){
        let data = document.getElementById("mybox");
        data.select();
        navigator.clipboard.writeText(data.value);
        props.showAlert("Succesfully Copied the Text","success");

    }
    function removeSpaces(){
        // const newString = text.replace(/\s+/g,' ').trim();
        // setText(newString);
        
        const newString = text.split(/[ ]+/);
        setText(newString.join(" "));
        props.showAlert("Succesfully Removed The Extra Spaces","success");   

    }


    return(      
        <div  className="container" >           
            <div className="my-3  container" >    
                <h1 className="Heading">Enter Text To Analyze</h1>       
                <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==="light"?"white":"black",color:props.mode==="light"?"black":"white"}}value={text} onChange={changeHandler} rows="8" />
                <button type="button" className="btn btn-primary m-2" onClick={handleClick}>Convert To Uppercase</button>
                <button type="button" className="btn btn-primary m-2" onClick={handleLower}>Convert To Lowercase</button>
                <button type="button" className="btn btn-primary m-2" onClick={handleReset}>Clear Text</button>      
                <button type="button" className="btn btn-primary m-2" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-primary m-2" onClick={removeSpaces}>Remove Extra Space</button>
                
            </div>
            <div className="container my-3">
                <h2>Your text summary here</h2>
                <p>Number of Words = {(text==="")?0:text.split(" ").length} and Number of character ={text.length}</p>
            </div>
        </div>          
    )
}