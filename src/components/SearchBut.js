import React from 'react'
import '../styles/Searchbtn.css'

function SearchBut() {
     
    let borderLeft= {
        borderRight: "1px solid #C4C4C4"
    }
    return (
        <div className='headerSearch'>
               <div className='container'>
               <form className='form-box container'>
                 
                        <i className='fas fa-search'></i>
                    <input type='text' className='search-field jobType mr-2' style={borderLeft}  placeholder='Search Job... ' />
                    <i class="fas fa-map-marker-alt"></i>
                    <input type='text' className='search-field location mr-2' style={borderLeft} placeholder='Location ' />
                    <i class="far fa-calendar"></i>
                    <input type='text'className='search-field type' placeholder='Job Type ' />
                   
                   <button className='search-btn'>Find Job</button>
                
                  
                    
                </form>
               </div>
        </div>
    )
}

export default SearchBut
