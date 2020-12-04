import React, { useEffect, useState } from 'react';
import List from "../data/jobcarddata.json";
import { Link } from 'react-router-dom'

function SideCard({ card }) {
    return (
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
                    pathname: `/jobs/${card.id}`,
                    state: { card }
                }}>
                    <button className='btn btn-outline-primary w-100' >Apply Now</button>
                </Link>
            </div>
        </div>
    )
}

function ViewMoreDetails(props) {

    const [card, setCard] = useState({})

    const getJobs = (limit = 3) => {
        let jobposts = []

        for (let i = 0; i < limit; ++i) {
            jobposts.push(<SideCard card={List[i]} key={i} />)
        }
        return jobposts
    }

    useEffect(() => {
        console.log(props)
        const cardInfo = props.location.state.card
        setCard(cardInfo)
    }, [props.location.state.card])



    return (
        <div>
            <div className='container-fluid bg-light ' /*style={{minHeight:"120vh"}}*/ >
                <div className='container '>

                    <div className='row  '>
                        <div className='col-sm-12 col-md-12 col-lg-3 mt-5 '>
                            <img src={card.imgSrc} className='card-img mb-3 w-100' height='150px' alt='' />
                            <h5>Examen International</h5>
                            <p>054790-21765</p>
                            <p>054790-21765</p>
                            <p>054790-21765</p>
                            <p>054790-21765</p>

                        </div>

                        <div className="m-auto"></div>

                        <div className='col-sm-12 col-md-12 col-lg-8 mt-5 mb-5'>

                            <div class="row">
                                <h4> Job Summary</h4>
                                <p>{props.location.state.card.fullDetails.jobSum}</p>

                            </div>
                            <hr></hr>
                            <div className='row'>
                                <p>  <span className='font-weight-bold'>Minimum Qualification</span> : HND</p>
                                <p>  <span className='font-weight-bold'>Experience Level</span> : Senior level</p>
                                <p>  <span className='font-weight-bold'>Experience Length</span> : 3 years</p>
                            </div>


                            <hr></hr>
                            <div className='row'>
                                <p>{props.location.state.card.fullDetails.jobRequirements}</p>
                                <p>{props.location.state.card.fullDetails.jobSum}</p>

                            </div>

                            <button className='btn btn-primary ' >Apply Now</button>

                        </div>
                    </div>

                    <h4>Other Jobs you might be interest in</h4>
                    <div className="d-flex ">
                        {getJobs(4)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMoreDetails
