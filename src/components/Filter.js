import React from 'react'


function Filter() {

    return (

        <React.Fragment>
            <div className="card w-100 mb-4">
                <div className="card-header">
                    <h6 className="card-title">Type Of Employment</h6>
                </div>
                <div className="card-body">
                    <div>
                        <input type='checkbox' className='mr-2' />
                        <a >Full Time</a>
                    </div>

                    <div>
                        <input type='checkbox' className='mr-2' />
                        <a>Part Time</a>
                    </div>

                    <div>
                        <input type='checkbox' className='mr-2' />
                        <a>Remote</a>
                    </div>

                    <div>
                        <input type='checkbox' className='mr-2' />
                        <a>Internship</a>
                    </div>
                </div>
            </div>

            <div className="card w-100 mb-0">
                <div className="card-header">
                    <h6 className="card-title">Type Of Employment</h6>
                </div>
                <div className="card-body">
                    <div>
                        <input type='checkbox' className='mr-2 mb-2' />
                        <a >Programming</a>
                    </div>

                    <div>
                        <input type='checkbox' className='mr-2' />
                        <a>Digital Marketing</a>
                    </div>

                    <div>
                        <input type='checkbox' className='mr-2' />
                        <a>Others</a>
                    </div>
                </div>
            </div>



          


        </React.Fragment>

    )
}

export default Filter
