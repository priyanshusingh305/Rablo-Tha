export const PhoneNumber=({ phoneData,setPhoneData})=>{
    return(
    <div className='feilds'>
      <input type="number"
      name="phone" maxlength="10" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className='number' placeholder='999-999-9999' onChange={(event) =>setPhoneData({ ...phoneData, phone: event.target.value })} required/>
     </div>
     );
}