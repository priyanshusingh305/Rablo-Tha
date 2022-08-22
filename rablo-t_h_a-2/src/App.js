import React from 'react';
import { PhoneNumber } from './component/phoneNumber';
import { GettingOtp } from './component/gettingOtp';
import {Message} from './component/message'
import './App.css';
import { useState } from 'react';
// . Phone Otp Varification page 
// 	- Take First Input as phone number and then otp $$
// 	- Make modal stating successful message$$

function App() {
  const [phoneData, setPhoneData] = useState({
    phone: "",
    otp: ""});
  const[page,setPage]=useState(0);
  const display=()=>{
    if(page===0){
        return (<div> 
        <PhoneNumber phoneData={phoneData} setPhoneData={setPhoneData}/>
        <button onClick={()=>{setPage((currPage) => currPage + 1)}}>get otp</button></div>);
    }
    else if(page===1){
        return (<div>
      <GettingOtp  phoneData={phoneData} setPhoneData={setPhoneData}/>
        <button onClick={()=>{setPage((currPage) => currPage + 1)}}>submit</button></div>);
    }
    else if(page===2){
        return (<div>
          <Message phoneData={phoneData}/>

        </div>);

    }
};
  return (
    <div className="App">
    <div className='otp-wrap'>
     <div className='otp'>
      {display()}
     
     
      </div>
    </div>
    </div>

  );
}

export default App;
