import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentHome = () =>{

    const navigate = useNavigate()
    const[results,setResults]=useState([])
    const[user,setUser]=useState({})

    useEffect(()=>{
       async function getData (){
        await fetch('http://localhost:5000/auth/user-by-enrollment',{
            method:"POST",
            headers:{
                "authorization":"Bearer "+localStorage.getItem("auth")
            }
        }).then(res=>res.json())
        .then(data=>{
            setUser(data.found)
        })
       }
       getData()
    },[user])

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
            <div className='container'>
                <div className="row mt-3">
                    <div className='col-lg-4'>&nbsp;</div>
                    <div className='col-lg-4'>
                        <div className='border rounded px-3 py-3'>
                            <div><b>{user.name}</b></div>
                            <div>{user.email}</div>
                            <div className='mt-2'>Enrollment : {user.enrollment}</div>
                        </div>
                        <div className='mt-3 border rounded px-3 py-3'>
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