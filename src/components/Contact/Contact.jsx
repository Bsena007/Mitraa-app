import React from 'react'
import './Contact.css'
import India from '../../assets/India.png'
import Mail from '../../assets/Mail.png'
import Canada from '../../assets/Canada.png'
import Attach from '../../assets/Attach.png'
import Form from '../../assets/Form.png'

const Contact = () => {
const [result, setResult] = React.useState("");
const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",
       "2c093dee-d1e5-42b7-a688-b1edc29b4388");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
  
  <div>
    <div className='image'>
      <img src={Form} alt="" />
    </div>
    <div className='color'></div>
    <div className='contact-hero'>
      <div className='contact-hero1'>
        <h3>Contact Us</h3>
        <p>Shape your Future with confidence</p>
      </div>
    </div>
      
   
    
    <div className='contact-call2'>
      <div className='contact-call1'>
      <h3>Our team is ready to help and respond to all your queries</h3>
      <p>Our support is always available to guide you,
        resolve your concerns, and deliver clear, reliable
        answers whenever needed.</p>
    </div>
    </div>
  
    <div className='contact'>
        <div className="contact-call">
          <h3>We are Excited to be a part of Your Next big Project</h3>
          <p>Your big dreams deserve the right strategy. Fill out the form, 
            pick a time that works for you, and let's connect!</p>
          <ul>
            <li> <img src={India} alt="" /> +91 993830784</li>
            <li> <img src={Canada} alt="" /> +1 [226] 339-0503</li>
            <li> <img src={Mail} alt="" />info@mitratechgroup.com</li>
          </ul>
        </div>
        <div className="contact-call">
          <form onSubmit={onSubmit}>
            <label>Your Name <span>*</span> </label>
            <input type="text" name='name' placeholder='Enter  Name' required />
            <label>Email ID <span>*</span></label>
            <input type="email" name='phone' placeholder='Enter  Email Id' required />
            <label>Contact Number <span>*</span></label>
            <input type="tel" name='phone' placeholder='Enter  Mobile Number' required />
            <label>Description <span>*</span></label>
            <textarea name="message" rows="4" placeholder='Enter Description' required>
            </textarea>
            <img src={Attach} alt="" />
            <input type="file" className='file' name="file"/><p>Attach Your Documents</p>
            <button type="submit" className='btn1'>Request Proposal </button>
            </form>
      
          <span>{result}</span>
        </div>
      </div>
      </div>
      
    
  )
}

export default Contact
// 2c093dee-d1e5-42b7-a688-b1edc29b4388 acces key company
// bd33791d-7117-454e-8802-a2c79ec26e12 mine