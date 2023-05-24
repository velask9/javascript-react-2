import React, { useState } from "react";

export const UpDownCounter= () =>{
    // counter is the state variable and setCounter is the setter function. 
    //create hook with counter and setCounter
    let [counter, setCounter]= useState(0)
    //initialize counter to value 0 

 //Create handleClick function 
 const handleClick= (direction) => {
     //create if argument passed in equals 'down' button decrement counter
     if(direction === 'down'){
         setCounter(counter--)
        //else if argument passed in equals "up" button increments counter 
        }else
            //increment counter 
           setCounter(counter++)

    }
    return(

        <div>
            {/* create down button using onClick that takes handleClick that passing in 'down'.  */}
            <button onClick={() => handleClick('down')}>down</button>

            {/* state variable counter */}
            {counter}
            {/* /create up button using onClick that takes handleClick that passing in 'up' */}
            <button onClick={() => handleClick('up')}>up</button>
        </div>
    )
}