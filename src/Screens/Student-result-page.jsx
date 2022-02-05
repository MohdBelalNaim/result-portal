import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
const StudentResultPage =() =>{

  const[all,setAll] = useState("")
  const[results,setResult]=useState([])
  const[fetched,setFetched]=useState(false)
  const{id}=useParams()
  useEffect(()=>{
    fetch(`http://localhost:5000/result/result-by-id/${id}`,{
      method:"POST"
    })
    .then(res=>res.json())
    .then(data=>{
      setResult(data.found)
      setFetched(true)
      setAll(data.found.result.length)
    })
  },[])



    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                    <div className='text-center py-3'>{results.exam_name}</div>
                    <table class="table text-center table-striped">
                        <thead className='bg-dark text-light'>
                          <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Internal marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                           fetched?
                           results.result.map(item=>{
                            return(
                              <tr>
                              <td>{item.subject}</td>
                              <td>{item.mark}/30</td>
                            </tr>
                            )
                          })
                          :""
                          }
                        
                        </tbody>
                    </table>
                    <div className="py-2">Grand total: {results.total}/{all*30}</div>
                    <div className="py-2">Semeser percentage: {parseFloat(((results.total)/(all*30))*100).toFixed(1)} %</div>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
    )
}

export default StudentResultPage