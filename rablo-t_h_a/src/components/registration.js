import React, { useState } from "react";
import { One } from "./1";
import { Two } from "./2";
import { Three } from "./3";
import { Messege} from "./messege";



export const Registration=()=>{
    const [page, setPage] = useState(0);
    const [value, onChange] = useState(new Date());
    const [timeValue,timeOnChange]=useState(new Date());
    const [formData, setFormData] = useState({
      class: "",//text$
      board: "",//radio$
      schoolName: "",//text$
      mode: "",//radio$
      date: {value},//component$
      time: {timeValue},//component$
      adressLine1: "",//text$
      adressLine2: "",//text$
      other: "",//text$
    });
    const display=()=>{
        if(page===0){
            return (<One formData={formData} setFormData={setFormData} />);
        }
        else if(page===1){
            return (<Two formData={formData} setFormData={setFormData}/>);
        }
        else if(page===2){
            return (<Three formData={formData} setFormData={setFormData} value={value} onChange={onChange} timeValue={timeValue} timeOnChange={timeOnChange}/>);

        }
        else if(page===3){
            return(<Messege formData={formData} setFormData={setFormData}/>)
        }
    };
    return(
    <div className="Form">
       {page <3? <div className="progressbar">
        <div
     style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
        ></div>
      </div>:alert((JSON.stringify(formData)))}
        <div className="body">{display()}</div>
        {page!==3  ?<div className="footer">
          {page!==0 ? <button
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>: null}
          <button
            onClick={() => {
            
            setPage((currPage) => currPage + 1)

                       
              }
            }
          >
            {page === 2 ? "Submit" : "Next"}
          </button>
        </div>: Messege}
      </div>

    );
}

