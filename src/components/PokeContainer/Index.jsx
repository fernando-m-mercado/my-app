import {React, useEffect, useState} from "react";
import PokeList from "../PokeList/itemList";
import pokedata from "../data/pokedata";

const PokeContainer = () => {
   
    const [pokemones, setPokemones] = useState ([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect (() => {

           /* const getPokes = async () => {
            const misDatos = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            
        const response = await misDatos.json();
        setPokemones(response.results);
        };
        
        getPokes(); */

        const getPokeData = new Promise((resolve, reject) =>{
            setTimeout (() => {
                resolve(pokedata)
            },2000)
        })

        getPokeData.then((response => setPokemones(response)))
        .catch(err => console.log(err))  /*Este no es obligatorio*/
        .finally(() => setIsLoading(false));  /* Este es para que el "loading" se vaya*/
    }, []); 

     return  isLoading ? <h2>Cargando..</h2> : <PokeList list={pokemones}/>
    
};



export default PokeContainer;