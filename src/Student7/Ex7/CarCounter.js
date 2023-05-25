import React, {useState} from "react"

export const CarCounter =() => {
    //useState for ford
    let [ford, setFord]= useState(0);
    //useState for Toyota
    let [toyota, setToyota]= useState(0);
    //useState for chevy
    let [chevy, setChevy]= useState(0);
    //useState for total count of cars
    let [total, setTotal]= useState(0);
    
    
    //functions for counting number of fords
    //function for counting number of toyotas
//function for counting number of chevy
//useState for toral count of cars

//Function that takes in argument of each type of cars. 
//if statement that increments variables for each car and also the varibale for the total. 
const handleClick= (carType) => {
    console.log(carType)
    if (carType === "ford"){
        setFord(ford +=1)
        setTotal(total +=1)
        } else if 
        (carType === "toyota"){
            setToyota(toyota +=1)
            setTotal(total +=1)
        } else if
        (carType === "chevy"){
            setChevy(chevy +=1)
            setTotal(total +=1)
       
        }
    }
    return(
       
       <div>
        {/* Button for Ford */}
        <button onClick ={() =>handleClick("ford")}>Ford</button>
         {/* button for toyota */}
        <button onClick ={()=>handleClick("toyota")}>Toyota</button>
        {/* button for chevy */}
        <button onClick={()=>handleClick("chevy")}>Chevy</button>

        <div>
            <p>Ford:{ford}</p>
            <p>Toyota:{toyota}</p>
            <p>Chevy:{chevy}</p>
             <p>TOTAL:{total}</p>
        </div>

     </div>
    )
}

