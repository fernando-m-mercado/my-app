import React from 'react';
import Form from './form';
import { BsCartPlus } from 'react-icons/bs';


function Navbar({nombre}) {
 const user = {nombre:"francisco", direccion:"calle falsa 123"}
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>          
            </ul>
            <BsCartPlus className='icon'/>
            <Form user={user} />
          </div> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;

