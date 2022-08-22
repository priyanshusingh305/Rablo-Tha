import React from "react";
import { DatePicker, TimeInput  } from '@mantine/dates';

    

export const Two = ({ formData, setFormData,value ,onChange ,timeValue,timeOnChange})=>{

    return (

        <div className="Two">
        <label>Mode</label><br/>
          <div className="radio" onChange={(event) =>setFormData({ ...formData, mode: event.target.value })}>
          <input type="radio" value="Offline" name="mode"/>Offline<br/>
        <input type="radio" value="Online" name="mode"/>Online <br/>
      </div>
      <label>Date</label><br/>
  <DatePicker placeholder="Pick date" value={value} onChange={onChange} /> 
  <label>Time</label><br/>
  <TimeInput className="time" value={timeValue} onChange={timeOnChange} />    
        </div>
      );
    }