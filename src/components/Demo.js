import React, { useState, useMemo } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText]= useState(0);
    const [isDarkTheme, setIsDarkTheme]=useState(false);
    //HERE 2 TIMES THIS LOG MAY APPEAR FOR 1 ONCHANGE EVENT SINCE DUE TO STRICT MODE OF REACT IN APP.JS , THIS ONLY HAPPENS IN DEV DUE TO INCONSISTENCIES IN RENDERING AND IN PROD IT WORKS FINE
    //BASICALLY STRICTMODE IS USED TO ENSURE IF COMPONENTS UPDATES PROPERLY/RECONCILIATION HAPPENS PROPERLY OR NOT 
    console.log("RENDERING.........");
    //heavy operation
    const prime1=()=>{ 
        console.log(text);
        return findPrime(text);
    }
        const prime = findPrime(text);
        const prime2=useMemo(() => findPrime(text), [text]);
    
  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-black text-white")}>
        <div><input className='border border-black w-80 px-2' type="number" value={text} onChange={(e)=>setText(e.target.value)}/></div>
        {/* WHEN THE STATE FOR TOGGLE CHANGES, THEN ALSO COMPONENT IS RERENDERD AND PRIME IS AGAIN CALCULATED WHICH IS THE HEAVY operation  */}
        {/* WE NEED TO AVOID THIS */}
        <div><button className='m-10 p-2 bg-green-300' onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button></div>
        <div className='mt-4 font-bold text-3xl'>
            {/* <h1>nth prime: {prime}</h1> */}
            <h1>nth prime: {prime2}</h1>
            {/* <h1>nth prime: {prime1()}</h1> */}
        </div>
    </div>
  )
}

export default Demo;