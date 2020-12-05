import React, { useState, useEffect } from 'react'
import {useMediaPredicate} from 'react-media-hook'
import Filter from "../components/Filter"
import Lists from "../data/jobcarddata.json"
import Card from '../components/Card'
import { useHistory } from 'react-router-dom';
import "../styles/Filter.css"
import SearchBut from '../components/SearchBut'
// import FloatingBut from '../components/FloatingBut'

function Homepage({ match, card }) {
    const history = useHistory()

    let hasmatch = match.params.jobID && card.filter((post) => post.jobID === match.params.jobID.split('-').join(" "))
    let article;

    if (hasmatch && hasmatch.length)
        article = hasmatch[0]

     const [smallScreenDisplay, setSmallScreenDisplay] = useState(false)

   
    const biggerThan420 = useMediaPredicate("(max-width:576px)")
    return (
        <div className='container-fluid bg-light ' /*style={{minHeight:"120vh"}}*/ >
            <div className='container '>
              
                
                  <div className=' d-none d-md-block  col-lg-12 pt-5'>
                  <SearchBut/>
                
                 </div>
                <div className='row  '>
                    <div className='col-sm-12 col-md-12 col-lg-3 mt-5'>
                     
                           { biggerThan420? (
                               <div>
                                  <button onClick={() => setSmallScreenDisplay(!smallScreenDisplay)} className='toggler'>
                                  <i class="far fa-stop-circle"></i>
                                  </button>

                                  <div className={smallScreenDisplay ? null : "hide"}>
                                        <Filter/>
                                </div>
                              </div>
                           ):(
                               <Filter/>
                           )

                       }
                  </div>

                    <div className="m-auto"></div>

                    <div className='col-sm-12 col-md-12 col-lg-8 mt-5 mb-5'>
                        <div className='container'>

                            <div className='row'>
                                <h5 className='col-sm-8 col-md-8 col-lg-8' >Full Time</h5>

                                <div className="btn-group  " >
                                    <button type="button" class="btn btn-light dropdown-toggle col-" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                        Sort By: Newest Jobs
                                </button>
                                    <div class="dropdown-menu dropdown-menu-lg-right">
                                        <button class="dropdown-item" type="button">Start-Up companies</button>
                                        <button class="dropdown-item" type="button">Freelance</button>
                                        <button class="dropdown-item" type="button">Something else</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            {
                                article && article.hasOwnProperty("id") ?
                                    <div>
                                        <h2>{article.title}</h2>
                                        <p>{article.content}</p>
                                    </div>
                                    :
                                    hasmatch && hasmatch.length === 0 ?
                                        <div>Post not found</div>
                                        :
                                        Lists.map((card, index) => (
                                            <Card card={card} />
                                        ))
                            }
                        </div>
                   

                     <button className='btn btn-info '>Load More</button>

                  
                  

                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage
