import { React, useState, useEffect } from 'react';


const productos = [

    { nombre: "Botella Mallorca", marca: "Exo", precio: 1200, foto:"http://drive.google.com/uc?export=view&id=F1SniOg-JHAa8qfePBMWCrC8FOS2qa9iu2" },
    { nombre: "Cinturon Thron", marca: "Exo", precio: 1200 },
    { nombre: "Gorrito deportivo", marca: "Exo", precio: 1200 },
    { nombre: "Cinturon Multiuso", marca: "Exo", precio: 1200 },

]

function consultarPromesa(confirmacion) {
    return new Promise((res, rej) => {
        if (confirmacion) {
            res(productos)
        } else {
            rej("Acceso denegado")
        }
    })


}





const Productos = () => {

    const [productos, setProductos] = useState();

    useEffect(() => {
        consultarPromesa(true)
        .then(data => {
            const productosJSX = data.map((producto, indice) => 

                <div className="card text-white bg-primary mb-3" key={indice} style={{ maxWidth: "18rem", margin: '10px' }}>
                    <div className="card-header">{producto.nombre}</div>
                    <div className="card-body">
                        <p className="card-text">Marca:  {producto.marca} </p>
                        <p className="card-text">Precio: ${producto.precio} </p>
                        
                    </div>
                </div>

            )

            const getProductos = new Promise ((resolve) =>{
                setTimeout(() => {
                    resolve(Productos);
                },2000)
            })

            getProductos
                .then ((response) => productos(response))
            
            console.log(productosJSX)
            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);

    


    return (
        <div className="row">
            {productos}
        </div>
    );
}

export default Productos;

