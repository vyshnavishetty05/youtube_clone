import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    let x=0;
    const [z,setZ]=useState(0);
    //here ref value is changed but it doent trigger reconciliation and update UI, but keeps track of the value and UI updates whenever there is other state changed
    const ref= useRef(0);
    /**
     * ref={
     * current:0,
     * }
     */
    let i;
    let ui= useRef(null);
    let uiequivalent= {
        current: 0,
    }
    useEffect(()=>{
    //     i=setInterval(()=>{console.log("Timer Log"+Math.random());},1000);
    //     return ()=>{clearInterval(i)}
    // },[]);
    ui.current=setInterval(()=>{console.log("Timer Log"+Math.random());},1000);
    //BELOW LINE IS FOR GARBAGE COLLECTION
    return ()=>{clearInterval(ui.current)}
},[]);
    console.log("RENDERING...........");
  return (
    <div className='m-4 p-2 bg-slate-50 border-black w-96 h-96'>
        <div>
            <button className='bg-green-100 p-2 m-4' onClick={()=>{x=x+1;
            {console.log("x = "+x)}
            }}>Increase</button>
            <span className='font-bold text-xl'>Let = {x}</span>
        </div>
        <div>
            <button className='bg-green-100 p-2 m-4' onClick={()=>{setZ(z+1);}}>Increase Y</button>
            <span className='font-bold text-xl'>State = {z}</span>
        </div>
        <div>
            <button className='bg-green-100 p-2 m-4' onClick={()=>{ref.current=ref.current+1;console.log("ref = "+ref.current);}}>Increase Ref</button>
            <span className='font-bold text-xl'>Ref = {ref.current}</span><br/>
            {/* generally the variable i scope iis within the useeffect arrow function but to make scope to work here as well, we need to declare i out of useeffect, to make clearinterval work on click of btn */}
            {/* BUT THIS APPROACH WILL NOT WORK CORRECTLY SINCE THE 'i' WILL NOT PERSIST AFTER RERENDER, SO USE USEREF */}
            {/* <button className='rounded-lg font-bold text-white p-4 m-4 bg-red-900' onClick={()=>clearInterval(i)}>Stop Printing</button> */}
            <button className='rounded-lg font-bold text-white p-4 m-4 bg-red-900' onClick={()=>clearInterval(ui.current)}>Stop Printing</button>
        </div>
    </div>
  )
}

export default Demo2