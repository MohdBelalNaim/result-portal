import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentHome = () =>{

    const navigate = useNavigate()
    const[results,setResults]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/result/result-by-enrollment`,{
            method:"POST",
            headers:{
                "authorization":"Bearer "+localStorage.getItem("auth")
            }
        })
        .then(res=>res.json())
        .then(data=>{
           setResults(data)
        })
    },[])


    return(
        <div>
            <div className='px-3 py-3 border-bottom text-center'>Welcome</div>
            <div className='container'>
                <div className="row mt-3">
                    <div className='col-lg-4'>&nbsp;</div>
                    <div className='col-lg-4'>
                        <div className='border rounded px-3 py-3'>
                            <div>Your results</div>
                            {
                                results.map(item=>{
                                    return(
                                        <div className='btn btn-dark form-control mt-3'>{item.exam_name}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-lg-4'>&nbsp;</div>
                </div>
            </div>
            
        </div>
    )
}

export default StudentHome