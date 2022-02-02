import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const navigate = useNavigate()
    return(
        <div className='border-bottom text-center h5 py-3' onClick={()=>navigate("/")}>
            Results
        </div>
    )
}

export default Header