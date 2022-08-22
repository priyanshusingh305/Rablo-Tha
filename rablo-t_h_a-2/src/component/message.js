export const Message=(phoneData)=>{
return(
    <div className="Message">
    <h1 >Successful</h1>
        <h1> Phone number:</h1><br/>
        <h2>{phoneData.phoneData.phone}</h2><br/>

        <h1> OTP:</h1><br/>
        <h2>{phoneData.phoneData.otp}</h2>
    </div>
)
}