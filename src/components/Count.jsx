import {React, useState} from 'react';

const Count = ({stock, onAdd}) => {

    const [count, setCount] = useState(0)

    function add () {
        if (count < stock)
          setCount (count + 1);    
    }

    function substract (){
        if (count > 0){
            setCount (count -1);
        }
    }

    function reset() {
        setCount(0)
    }

    return (
        <>
        <div>
            <h1>Counter</h1>
            <p>Stock: {stock} </p>
            <p>Cantidad: {count} </p>

            <div>
            <button className="btn" onClick={substract}> - </button>
            <button className="btn" onClick={reset}> Reset </button>
            <button className="btn" onClick={add}> + </button>
        </div>
        </div>
        <button className="btn"onClick={() => onAdd(count)}> Confirmar </button>
        
        </>
    );
}

export default Count;
