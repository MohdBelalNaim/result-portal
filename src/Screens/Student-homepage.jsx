import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentHome = () =>{

    const navigate = useNavigate()

    function seeResult(){
        const pass = prompt("Enter your password to continue")
        if(pass==="Belal"){
            navigate("/view-result")
        }
        else{
            alert("Galat hai dost")
        }
    }

    return(
        <div>
            <div className='px-3 py-3 border-bottom text-center'>Welcome, Mohd Belal Naim</div>
            <div className='container'>
                <div className="row mt-3">
                    <div className='col-lg-4'>&nbsp;</div>
                    <div className='col-lg-4'>
                        <div className='border rounded px-3 py-3'>
                            <div>Your results</div>
                            <div className='btn btn-dark form-control mt-3' onClick={()=>seeResult()} >End semester 2021-22 (EVEN)</div>
                            <div className='btn btn-dark form-control mt-3' onClick={()=>seeResult()} >End semester 2021-22 (ODD)</div>
                        </div>
                    </div>
                    <div className='col-lg-4'>&nbsp;</div>
                </div>
            </div>
            
        </div>
    )
}

export default StudentHome