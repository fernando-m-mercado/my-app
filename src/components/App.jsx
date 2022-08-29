import './App.css';
import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';



const App = () => {
    return (
        <div>
           <Navbar/> 
                   
            <ItemListContainer title="Mi ecommerce" subtitle="Soy subtitulo" />
            <img src="cropped.png " alt="" />
            
       
        </div>
        
        
        
    );
}

export default App;
