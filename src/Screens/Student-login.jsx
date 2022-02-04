import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentLogin = () =>{

    const[enrollment,setEnrollment]=useState("")
    const[password,setPassword]=useState("")

    function login(e){
        e.preventdefault()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div className='border rounded mt-4 py-3 px-3'>
                        <div className='text-center h5'>Student login</div>
                        <div className='mt-4'>
                            <form onSubmit={login}>
                                <label htmlFor="" style={{"fontSize":18+"px"}}>Institute email</label>
                                <input value={enrollment} onChange={e=>setEnrollment(e.target.value)} type="text" className='form-control' placeholder='Email' required/>
                                <label htmlFor="" className='mt-3' style={{"fontSize":18+"px"}}>Password</label>
                                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Password' required/>
                                <button className='btn btn-dark form-control mt-3'>Login</button>
                            </form>
                            <div className='text-center py-3'>
                                <Link to="/student-registration" style={{"color":"black"}}>I don't have an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
        </div>
    )
}

export default StudentLogin