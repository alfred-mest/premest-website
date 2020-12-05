import React from 'react'
import '../styles/Searchbtn.css'

function SearchBut() {

    return (
        <div className='headerSearch'>
               <div className='container'>
               <form className='form-box container'>
                 
                        <i className='fas fa-search'></i>
                    <input type='text' className='search-field jobType' placeholder='Search Job... ' />

                    <input type='text' className='search-field location border-right-5-info' placeholder='Location ' />
                    <input type='text'className='search-field type' placeholder='Job Type ' />
                   
                   <button className='search-btn'>Find Job</button>
                
                  
                    
                </form>
               </div>
        </div>
    )
}

export default SearchBut
