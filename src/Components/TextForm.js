import React, { useState } from "react";

export default function TextForm(){

    const [text ,setText] =useState(" ");

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
        setText(" ")
    }
    return(      
        <div className="conatiner">           
            <div className="m-5 p-5 container">    
            <h1 className="Heading">Text Utills</h1>       
            <textarea className="form-control" value={text} onChange={changeHandler} rows="8" />
            <button type="button" className="btn btn-primary m-2" onClick={handleClick}>Convert To Uppercase</button>
            <button type="button" className="btn btn-primary m-2" onClick={handleLower}>Convert To Lowercase</button>
            <button type="button" className="btn btn-primary m-2" onClick={handleReset}>Reset</button>
            </div>
        </div>          
    )
}