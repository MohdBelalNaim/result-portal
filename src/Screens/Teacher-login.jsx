import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';

const TeacherLogin = () =>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()

    function login(e){

        e.preventDefault()

        fetch('http://localhost:5000/teacher/teacher-login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                new Swal("Error",data.error,"error")
            }
            else{
                localStorage.setItem("teacher-auth",email)
                navigate("/teacher-home")
            }
        })
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div className='border rounded mt-4 py-3 px-3'>
                        <div className='text-center h5'>Teacher login</div>
                        <div className='mt-4'>
                            <form onSubmit={login}>
                                    <label htmlFor="" style={{"fontSize":18+"px"}}>Institute email</label>
                                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" className='form-control' placeholder='Email' required />
                                    <label htmlFor="" className='mt-3' style={{"fontSize":18+"px"}}>Password</label>
                                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Password' required />
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

export default TeacherLogin