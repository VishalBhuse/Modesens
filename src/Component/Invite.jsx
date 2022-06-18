 import React from 'react'
 import "./Invite.css";
 
 function Invite() {
   return (
     <div  className='body'>
    <div className='first'>You have style worth sharing. Invite friends to join ModeSens, Your Digital Shopping Assistant, today!</div>
    <div className='second'>Once they sign up, you’ll both receive silver premium membership for three months.</div>
       <div className='third'>
        
       
        ModeSens compares prices across 500+ stores, saving you time and money! Plus, you'll have access to ModeSens Concierge and Shopper Protection for extra peace of mind.
        
       </div>
    <input  className='input' type="email" placeholder='Add Your Friend`s Email Address(es)' />

    <button className='invite'>INVITE NOW</button>
    <span style={{display:"block",width:"20px" ,margin:"auto",marginTop:"10px"}}> Or</span>
    <span style={{display:"block",width:"230px" ,margin:"auto",marginTop:"5px"}}>share this link with your friends</span>
    <a  style={{display:"block",width:"230px" ,margin:"auto",marginTop:"5px",fontWeight:"20px"}} href="https://modesens.com/s/HFa/">https://modesens.com/s/HFa/</a>
    <div style={{fontWeight:"600" ,width:"140px" ,margin:"auto" ,marginTop:"60px"}}>Frinds I`ve Invited</div>
    <img style={{display:"block",width:"160px",margin:"auto",marginTop:"20px"}} src="https://cdn.modesens.com/static/img/20190618_nothing.svg" alt="invite_empty" />
     </div>
   )
 }
 
 export default Invite
 