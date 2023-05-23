import React from 'react'
//import Hook
import {useState} from 'react'

export const TenCounter = () => {
  //create hook with counter,setCounter. Set initial value = 0
  let [counter, setCounter]= useState(0)
    // create a function for button
    const handleClick=()=>{
        //If counter is greater than or equal to 10
        if(counter>10){
            //set the counter to 0 
            setCounter(0) 
        }
        //else we will increment the counter. 
       else{
        setCounter(counter++)
       } 
    }
       
  return (
    <div>
        TenCounter 
        <button onClick={()=>handleClick()}>Push</button>
        Counter:{counter}
    {/* create button with onClick */}
    

    </div>
    

  )
}

