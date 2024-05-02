import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import OTP from "../../Assets/images/Enter OTP.png";
import { Link } from "react-router-dom";
import Style from "./OTP.css";
function App() {
  const [otp, setOtp] = useState('');
 
  const handleVerify = () => {
    
    console.log('OTP is ', otp);
  };
 
  return (
    <div className="App">
       <div>
            <img src={OTP} width={450} alt="otp" />
          </div>
          <div id='otp'>
          OTP Verification code
          </div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span> </span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: "3rem", height: "3.5rem" }}
        renderInput={(props) => <input {...props} className='otp-input' />}
      />
      <div className='btn-container'>
       <Link to={'/newpassword'}> <button onClick={handleVerify}>Verify OTP</button></Link>
      </div>
    </div>
  );
}
 
export default App;