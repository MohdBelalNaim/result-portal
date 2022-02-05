import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherHomepage = () =>{
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('teacher-auth')){
            navigate("/")
        }
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                    <div className='py-3 h5 text-center'>
                        Teacher dashboard
                        <div>
                            <button className='btn btn-dark form-control mt-4' onClick={()=>navigate("/add-result")}>Add a result</button>
                            <button className='btn btn-dark form-control mt-4' onClick={()=>navigate("/delete-result")}>Remove a result</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
    )
}

export default TeacherHomepage