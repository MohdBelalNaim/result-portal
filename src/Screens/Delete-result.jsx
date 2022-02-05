import React,{useState} from 'react';
import Swal from 'sweetalert2';

const DeleteResult = () =>{

    const[enrollment,setEnrollment]=useState("")
    const[resData,setData]=useState()
    const[fetched,setFetched]=useState(false)

    function getResult(){
       if(enrollment===""){
           new Swal("Error","Please neter enrollment number","error")
       }
       else{
        fetch(`http://localhost:5000/result/get-result/${enrollment}`,{
            method:"POST",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                new Swal("Error",data.error,"error")
            }
            if(data.found){
                setData(data.found)
                setFetched(true)
            }
        })
        .catch(err=>{
            console.log(err)
        })
       }
    }

    function delResult(id){
        fetch(`http://localhost:5000/result/delete-result/${id}`,{
            method:"post"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                new Swal("Error",data.error,"error")
            }
            else{
                getResult()
            }
        })
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">&nbsp;</div>
                    <div className="col-lg-6">
                        <div className='text-center h5 py-3'>Enter enrollment of student</div>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <input value={enrollment} onChange={e=>setEnrollment(e.target.value)} type="text" placeholder='Enrollment here' className='form-control'/>
                            </div>
                            <div className="col-lg-4">
                                <button onClick={()=>getResult()} className='form-control btn btn-dark'>Search</button>
                            </div>

                            <div>
                            <table class="table mt-3">
                                <thead>
                                    <tr>
                                      <th scope="col">Enrollment</th>
                                      <th scope="col">Result</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                        fetched?
                                            resData.map(item=>{
                                                return(
                                                    <tr>
                                                        <td>{enrollment}</td>
                                                        <td>{item.exam_name}</td>
                                                        <td><button className="btn btn-danger" style={{"fontSize":16+"px"}} onClick={()=>delResult(item._id)}>Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        :""
                                    }
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">&nbsp;</div>
                </div>
            </div>
        </>
    )
}

export default DeleteResult