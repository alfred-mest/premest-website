import React from 'react'
import logo from '../images/mestlogo_white.png'

function Footer() {
       let connectLinks={
              textAlign: "center",
              marginBottom: "2rem",
              padding: "0 1rem",
              fontSize:" 0.9rem",
              // paddingLeft:"100px",
       }
       let iconLink ={
              display: "inlineBlock",
              color: "white !important",
              margin: "2px",
              textDecoration: "none !important",
              fontSize: "130%",
              borderRadius: "0.2rem"  
       }
    return (
      
    <footer className='navbar navbar-expand-lg bg-dark '>
         <div className='container'>
            <div className='col-sm-1 col-md-2 col-lg-2'>
         <img src={logo}  alt="Mest Logo" width="100px" height="20px" loading='lazy'/>
         </div>  
          
          <div style={connectLinks} className='col-sm-2 col-md-3 col-lg-4'>
                   <a style={iconLink} href="http://facebook.com">
                     <i class="bx bxl-facebook"></i>
                   </a>
                   <a style={iconLink}  href="http://facebook.com">
                     <i class="bx bxl-twitter"></i>
                   </a>
                   <a  style={iconLink}  href="http://facebook.com">
                     <i class="bx bxl-instagram"></i>
                   </a>
                   <a  style={iconLink}  href="http://facebook.com">
                     <i class="bx bxl-linkedin"></i>
                   </a>
                 </div>
     
          <div className='text-light col-sm-2 col-md-2 col-lg-3'>
                 <p >All rights reserved</p>
          </div>
         </div>
    </footer>
   
   
    )
}

export default Footer
