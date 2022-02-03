import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from '../components/Overlay'
const Header = () =>{
    const navigate = useNavigate()
    const[login,setLogin]=useState(false)
    return(
        <>
        {login && <Overlay/>}
        <div className='border-bottom text-center h5 py-3' onClick={()=>navigate("/")}>
            <b>Results</b>
        </div>
        </>
    )
}

export default Header