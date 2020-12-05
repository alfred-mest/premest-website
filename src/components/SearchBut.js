import React from 'react'
import '../styles/Searchbtn.css'

function SearchBut() {

    return (
        <div className='headerSearch'>
                <form>
                    <div  className='form-box'>
                    <input type='text' className='search-field jobType' placeholder='Search Job... ' id='input'/>

                    <input type='text' className='search-field location' placeholder='Location ' />
                    <input type='text'className='search-field type' placeholder='Job Type ' />
                   
                   <button className='search-btn'>Find Job</button>
                    </div>
                  
                    
                </form>
        </div>
    )
}

export default SearchBut
