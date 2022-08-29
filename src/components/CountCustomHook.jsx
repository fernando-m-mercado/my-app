import {React} from 'react'
import useCounter from '../hooks/useCounter'

 const CountCustomHook = ({stock, onAdd}) => {
    const {add, substract, reset, count} = useCounter(stock)

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
        <button className="btn" onClick={() => onAdd(count)}> Confirmar </button>

    </>

  )
}

export default CountCustomHook;