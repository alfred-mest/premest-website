import React from 'react'
import "../styles/Candidates.css"

function Candidates() {
    return (
        <div>
        <div class="candidate-card">
        <div class="candidate-image-container">
          <div class="candidate-image-wrapper">
          
          <img  class="candidate-profile-image" src="http://www.haynessmile.com/wp-content/uploads/2014/09/black-business-man-smiling.jpg" alt="profile"   />
          </div>
        </div>
        <p class="candidate-name">
          John Hopkins
        </p>
        <p class="candidate-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, a
          corrupti dolorem enim amet.
        </p>
        <div class="candidate-connect-links">
          <a href="http://facebook.com">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="http://facebook.com">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="http://facebook.com">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="http://facebook.com">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
        </div>
    )
}

export default Candidates
