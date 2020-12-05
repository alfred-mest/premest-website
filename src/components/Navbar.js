import React, { useState, useEffect } from 'react'
import logo from '../images/mestlogo_white.png'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

  let imgStyle = {
    width: "100px",
    height: "20px",


  }

  let mycolr ={
    background:"#28bbbb"
  }

  const location = useLocation();

  return (

    <nav className='navbar navbar-expand-lg navbar-light  sticky-top' style={mycolr}>

      <div className='container'>
        <Link to="" className="navbar-brand" >
          <img src={logo} alt="Mest Logo" style={imgStyle} loading='lazy' />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarContent'>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='col-9'>

        </div>


        <div className="collapse navbar-collapse   " id='navbarContent'>
          <ul className="navbar-nav  ">


            <li className="nav-item dropdown  ">
              <h5 className={`nav-link active dropdown-toggle pt-3 text-white  `} role='button' data-toggle='dropdown'  >
                {(/^\/jobs\/*/.test(location.pathname)) ? "Jobs" : "Candidates"}
              </h5>
              <div className="dropdown-menu">
                <Link to={!(/^\/jobs\/*/.test(location.pathname)) ? '/jobs' : `/candidates`} className={`dropdown-item`}>
                  {!(/^\/jobs\/*/.test(location.pathname)) ? "Jobs" : "Candidates"}

                </Link>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>


  )
}

export default Navbar
