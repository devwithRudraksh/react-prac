import React from 'react'
import ButtonUI from './ButtonUI'
export default function CustomBottomFunc() {

    const gpt=()=>{
        console.log(" hello from gpt");
    }
    const gemini=()=>{
        console.log("hello from gemini");
    }
  return (
     <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>

                <ButtonUI label ="gpt" onClick={gpt}></ButtonUI>
                <br /><br />
                <ButtonUI label ="gemini" onClick={gemini}></ButtonUI>


     </div>
  )
}
