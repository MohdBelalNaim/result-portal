import React from 'react';

const StudentLogin = () =>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div className='border rounded mt-4 py-3 px-3'>
                        <div className='text-center h5'>Student login</div>
                        <div className='mt-4'>
                            <form action="">
                                <label htmlFor="" style={{"fontSize":18+"px"}}>Institute email</label>
                                <input type="text" className='form-control' placeholder='Email' />
                                <label htmlFor="" className='mt-3' style={{"fontSize":18+"px"}}>Password</label>
                                <input type="password" className='form-control' placeholder='Password' />
                                <button className='btn btn-dark form-control mt-3'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
        </div>
    )
}

export default StudentLogin