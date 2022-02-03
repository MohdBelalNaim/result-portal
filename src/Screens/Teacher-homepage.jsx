import React from 'react';

const TeacherHomepage = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                    <div className='py-3 h5 text-center'>
                        Teacher dashboard
                        <div>
                            <button className='btn btn-dark form-control mt-4'>Add a result</button>
                            <button className='btn btn-dark form-control mt-4'>Remove a result</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
    )
}

export default TeacherHomepage