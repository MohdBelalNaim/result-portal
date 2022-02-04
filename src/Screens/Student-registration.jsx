import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StudentRegistration= () =>{

    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[enrollment,setEnrollment]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate()

    function register(e){
        e.preventDefault()
        fetch("http://localhost:5000/auth/create-account",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                name,
                enrollment,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                new Swal("Error",data.error,"error")
            }
            else{
                new Swal("Account created",data.message,"success")
                navigate("/student-login")

            }
        })
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4'>
                    <div className='border rounded mt-4 py-3 px-3'>
                        <div className='text-center h5'>Student registration</div>
                        <div className='mt-4'>
                            <form onSubmit={register}>
                                <label htmlFor="" style={{"fontSize":18+"px"}}>Institute email</label>
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="text" className='form-control' placeholder='Email' required/>
                               
                                <label htmlFor="" className='mt-3' style={{"fontSize":18+"px"}}>Full name</label>
                                <input value={name} onChange={e=>setName(e.target.value)} type="text" className='form-control' placeholder='Full name' required/>
                               
                                <label htmlFor="" className='mt-3' style={{"fontSize":18+"px"}}>Enrollment</label>
                                <input value={enrollment} onChange={e=>setEnrollment(e.target.value)} type="text" className='form-control' placeholder='Enrollment' required/>
                               
                                <label htmlFor="" className='mt-3' style={{"fontSize":18+"px"}}>New password</label>
                                <input value={password} onChange={e=>setPassword(e.target.value)}  type="password" className='form-control' placeholder='Password' required/>
                    
                                <button className='btn btn-dark form-control mt-3'>Register</button>
                            </form>
                            <div className='text-center py-3'>
                                <Link to="/student-login" style={{"color":"black"}}>I have already registered</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
        </div>
    )
}

export default StudentRegistration