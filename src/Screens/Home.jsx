import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () =>{
    const navigate = useNavigate()
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div className='py-5'>
                        <button className='btn btn-dark form-control' onClick={()=>navigate('/student-login')}>I am a student</button>
                        <button className='mt-3 btn btn-dark form-control' onClick={()=>navigate('/teacher-login')}>I am a teacher</button>
                    </div>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
        </div>
    )
}

export default Home