import React from 'react';
import "./Contact.css"
const Contact =()=> {
  return (
   <>
   <div className='contactbackground'>
    <div className='contactlogo'>
        <h2>Contact us</h2>
        <input className='contactname' type="text" placeholder='Enter Your Name'></input><br></br>
        <input className='contactemail' type="text" placeholder='Enter Your Email'></input><br></br>
        <textarea className='contactarea' type="text" placeholder='Type Your Message'></textarea><br></br>
        <button className='contactbutton'> Submit  <i className="fa-solid fa-arrow-right"></i></button>
    </div>
    </div>
   </>
  )
}
export default Contact;