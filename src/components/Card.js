import React from 'react'
import {Link} from "react-router-dom"

function Card({ card }) {
    
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mb-2'>
            <div className="row">

                <div className='card mt-2 mr-2 w-100' role='button'>
                    <div className='card-body'>
                        <img src={card.imgSrc} className='card-img mb-3 w-100' height='150px' alt='' />  
                    
                        <h5 className='card-title'>{card.jobType}</h5>
                        <p className='card-text'>{card.briefDetail}</p>
                        <div className='mb-3'>
                            <span className='bg-light p-1 mr-1 font-weight-light'>Full Time</span>
                            <span className='bg-light p-1 mr-1 font-weight-light'>Mid Level</span>
                        
                        </div>
                        <Link to={{
                            pathname:`/jobs/${card.id}`,
                            state:{card}
                        }}>
                            <button className='btn btn-outline-primary w-100' >Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Card
