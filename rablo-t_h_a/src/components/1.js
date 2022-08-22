import React from "react";
import { useState } from "react";

export const One = ({ formData, setFormData})=>{
  const [color,setColor]=useState("black")
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    const schoolNameValid=(data)=>{
      console.log(isAlpha(data))
     if(isAlpha(data)===false){
      setColor("red");
      
     }
     else{
      setColor("black");
     }
      setFormData({ ...formData, schoolName: data })
  }
    return (
        <div className="One">
            <label>Class</label><br/>
          <input
            type="text"
            placeholder="Class..."
            value={formData.class}
            onChange={(event) =>
              setFormData({ ...formData, class: event.target.value })
            }
          />
            <br/><label>Board</label><br/>
          <div className="radio" onChange={(event) =>setFormData({ ...formData, board: event.target.value })}>
          <input type="radio" value="CBSE" name="BOARD"/>CBSE<br/>
        <input type="radio" value="ICSE" name="BOARD"/>ICSE<br/>
        <input type="radio" value="OTHER STATE BOARD" name="BOARD"/>Other State Board<br/>
      </div>
    
      
      <label >School Name*(Alpha charactor only)</label><br/>
           <input
           style={{color:`${color}`}}
            type="text"
            placeholder="School Name..."
            value={formData.schoolName}
            onChange={(event) =>{schoolNameValid(event.target.value)}
            }
          />
        </div>
      );
    }
