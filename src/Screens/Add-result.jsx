import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const AddResult = () =>{

    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('teacher-auth')){
            navigate("/")
        }
    })
    const[marks,setMarks] = useState([])
    const[total,setTotal] = useState("")

    const[subject,setSubject]=useState("")
    const[mark,setMark]=useState("")

    const[enrollment,setEnrollment]=useState("")
    const[exam_name,setExam_name]=useState("")

    let sum = 0

    useEffect(()=>{
        marks!= null &&
        marks.forEach(item=>{
            sum = parseInt(item.mark)+parseInt(sum)
        })
        setTotal(sum)
    },[marks])

    const pushSubject = () =>{
        const data ={
            subject:subject,
            mark:mark
        }

        setMarks([...marks,data])
    }

    function pushResult(){
        fetch('http://localhost:5000/result/add-result',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                exam_name,
                enrollment,
                result:marks,
                total
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert(data.message)
            }
        })
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 py-3">
                    <div className='h5 text-center py-4 border-bottom'>Marks added</div>
                    <table class="table text-center table-striped">
                        <thead>
                            <tr>
                              <th scope="col">Subject</th>
                              <th scope="col">Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                            marks.map(item=>{
                                return(
                                  
                                     <tr> 
                                       <td>{item.subject}</td>
                                       <td>{item.mark}/30</td>
                                     </tr>
                                         
                                )
                            })
                    }
                     </tbody>
                    </table>
                </div>
                <div className="col-lg-6 py-3">
                    <div className='h5 text-center py-4 border-bottom'>Marks input</div>
                    <div>
                        
                        <label className="mt-3" htmlFor="">Student enrollment number</label>
                        <input value={enrollment} onChange={e=>setEnrollment(e.target.value)} type="text" className='form-control'/>
                        
                        <label className="mt-3" htmlFor="">Exam name</label>
                        <input value={exam_name} onChange={e=>setExam_name(e.target.value)} type="text" className='form-control'/>

                        <div className="px-2 py-2 mt-3 border rounded">
                            <div className="py-2 text-center">Push marks</div>
                            <label className="mt-3" htmlFor="">Subject name</label>
                            <input value={subject} onChange={e=>setSubject(e.target.value)} type="text" className='form-control'/>

                            <label className="mt-3" htmlFor="">Marks / 30</label>
                            <input value={mark} onChange={e=>setMark(e.target.value)} type="text" className='form-control'/>
                            
                            
                            <button className="btn btn-dark mt-3" onClick={()=>pushSubject()}>Push marks</button>
                        </div>
                        
                        <label className="mt-3" htmlFor="">Total marks</label>
                        <input value={total} onChange={e=>setMark(e.target.value)} type="text" className='form-control'/>
                        
                        <button className="mt-3 btn btn-dark form-control" onClick={()=>pushResult()}>Upload result</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddResult