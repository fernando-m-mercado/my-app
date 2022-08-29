import userEvent from '@testing-library/user-event';
import React from 'react';

const Form = ({user}) => {
    return (
        <>
         <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder={user.nombre} />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>   
        </>
    );
}

export default Form;
 