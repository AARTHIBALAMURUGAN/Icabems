import React, { useState } from 'react'
import note from './assets/notepad.png'
import email from './assets/email.png'
import hand from './assets/Handshake.png'
import whatsapp from './assets/whatsapp.png'
import google from './assets/Google.png'
import logo from './assets/apceesh.jpeg'
function Navbar(){
     const[open,setopen]=useState(false)
    

    const hambutton=()=>{
        setopen(true)

    }
    const closebutton=()=>{
        setopen(false)

    }
    return(
        <>
<div className="headers">
<div  className="heads">
<div><img src={google} /></div>

<div><img src={note}/>
    <h4>Register Now</h4>
</div>
    
    <div>
     <img src={email}/>
    <h4>info@creda.com</h4>

    </div>

    <div>
    <img src={whatsapp}/>
    <h4>+91 8072381719</h4>
    </div>
   
    <div>
        <img src={hand}/>
    <h4>Apply for Academic Partner</h4>
    </div>
    

 </div>

        <nav className="headerbanner" onClick={hambutton}>
            <img src="https://icaebms.com/images/logo/icaebmslogo.png"/>
            <button>≡</button>
            <ul>
                <li>About</li>
                <li>Session Tracks</li>
                <li>Paper Submission</li>
                <li>Publication</li>
                <li>Registration</li>
                <li>Exhibits & Sponsors</li>
                <li>FAQ</li>
                <li>Venue</li>
                <li>Contact Us</li>
            </ul>
        </nav>

        <nav className='toggle' style={{display:open?"block":"none"}}>
            

            <button onClick={closebutton}>X</button>
              
                <p>About</p>
                <p>Session Tracks</p>
                <p>Paper Submission</p>
                <p>Pubpcation</p>
                <p>Registration</p>
                <p>Exhibits & Sponsors</p>
                <p>FAQ</p>
                <p>Venue</p>
                <p>Contact Us</p>
            


        </nav>
        </div>
        </>
       
    )
}
export default Navbar