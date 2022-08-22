import React from 'react';
import './App.css';
import { Registration } from './components/registration';



// Assignment:

// 1. Create a Multi step form (Min 3 steps)
// 	-Use React $
// 	-stick to the design of Website $ 
// 	-validation is optional $
// 	-Must be Responsive $

// 2. Phone Otp Varification page 
// 	- Take First Input as phone number and then otp
// 	- Make modal stating successful message

function App() {
  return (
     
    <div className="App">
    <div className='form-wrap'>
      <div className='form'>
        <Registration/>
      </div>
    </div>
    </div>
  );
}

export default App;
