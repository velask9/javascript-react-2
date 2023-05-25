import React, {useState} from "react";

export const AddCalculator =()=>{
    // create a state variable
    let[total, setTotal]= useState(0)
    const onHandleClick=(value)=>{
        setTotal(total+=value)
        
    }


return(
    
    <div>
         {/* create buttons Add1, Add2, Add3 */}
        <button onClick={()=>onHandleClick(1)}>Add 1</button>
        <button onClick={()=>onHandleClick(2)}>Add 2</button>
        <button onClick ={()=>onHandleClick(3)}>Add 3</button>
        <br/>
        Total:{total}
    </div>

    )
}