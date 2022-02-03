import React, { useState } from 'react';

const AddResult = () =>{

    const[marks,setMarks] = useState([])
    
    const[subject,setSubject]=useState("")
    const[mark,setMark]=useState("")

    const pushSubject = () =>{
        const data ={
            subject:subject,
            mark:mark
        }

        setMarks([...marks,data])
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
                        <input type="text" className='form-control'/>
                        
                        <label className="mt-3" htmlFor="">Exam name</label>
                        <input type="text" className='form-control'/>

                        <div className="px-2 py-2 mt-3 border rounded">
                            <div className="py-2 text-center">Push marks</div>
                            <label className="mt-3" htmlFor="">Subject name</label>
                            <input value={subject} onChange={e=>setSubject(e.target.value)} type="text" className='form-control'/>

                            <label className="mt-3" htmlFor="">Marks / 30</label>
                            <input value={mark} onChange={e=>setMark(e.target.value)} type="text" className='form-control'/>

                            <button className="btn btn-dark mt-3" onClick={()=>pushSubject()}>Push marks</button>
                        </div>
                        <button className="mt-3 btn btn-dark form-control">Upload result</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddResult