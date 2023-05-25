import React from "react";
//import your useState
import {useState} from "react";


export const NumberBuilder = () =>{
    //create state variable
    let[counter, setCounter ]= useState(0)
    //next useState will store changes  
    let[stringCounter, setStringCounter]= useState("")
    
    //create a 2 functions for add button and reset button.
    const handleAddNum = () =>{
        //when add num button is clicked, increment counter by 1
        setCounter(++counter)
        // set string counter plus (setCounter + counter)
        setStringCounter(stringCounter+counter)
    }
   
    const handleReset= () =>{
        // when reset button is clicked, set the counter back to 0
        setCounter(0)
        //set the stringCounter to a empty string ("")
        setStringCounter("")
    }
   
    return(
     
     <div>
        {/* add thw two buttons on the same line. */}
        <div>
            <button onClick={()=>handleAddNum()}>Add Numbers</button>
            <button onClick={()=>handleReset()}>Reset</button>
        {/* make a add button and reset button
        add button needs to build a string and string of numbers.  */}

        </div>
         <div>
        {/* Display the string */}
            Numbers: {stringCounter}
        </div>
    </div>

    )
}


