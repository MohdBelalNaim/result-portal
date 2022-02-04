import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Header = () =>{

    const navigate = useNavigate()

    function logout(){
        localStorage.clear()
        navigate("/")
    }

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <Link class="navbar-brand" to="#">Results</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <Link to="/" class="nav-link active" aria-current="page" href="#" onClick={()=>logout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </>
    )
}

export default Header