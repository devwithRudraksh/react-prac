import React, { useState } from 'react'
import './AgeGateForm.css';
export const PracAge = () => {
    const [age, setAge] = useState('');
    const[sub,setIsSubmitted]= useState(false);
    const handleSubmit= (e) => {
        e.preventDefault();//not to render on submit
        setIsSubmitted(true);
    }
    if(!sub )
        {
            return(<div className='form-container'>
                <h2>🔞 Age Verification</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="number" placeholder='enter your age' name="" id="" value={age} onChange={(e)=>setAge(e.target.value)} />
                    <button type="submit" ></button>
                </form></div>
            );
            
          }

    if(age> 18){
        return(<div className='welcome'>
             <h3>✅ Access Granted</h3>
             <p>Welcome to the adult section!</p>
        </div>);
    }
    else{
        return(<div className="denied">
            <h3>⛔ Access Denied</h3>
            <p>You must be 18 or older to continue.</p>
          </div>);
    }
}
