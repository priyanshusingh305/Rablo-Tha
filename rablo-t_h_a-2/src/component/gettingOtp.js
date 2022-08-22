export const GettingOtp =({ phoneData,setPhoneData})=>{
    return(
        <div className='feilds'>
        <input type="number" 
        maxlength="6"
        pattern="[0-9]{1}-[0-9]{1}-[0-9]{1}-[0-9]{1}-[0-9]{1}-[0-9]{1}" required className='get-otp'  placeholder='5-5-5-5-5-5' onChange={(event) =>setPhoneData({ ...phoneData, otp: event.target.value })}/>
      </div>
    );
}