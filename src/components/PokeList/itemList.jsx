import React from "react";
import Poke from "../Poke/item";


const PokeList = ({list}) => {
    return <ul>
        {list.map((pokemon) => (
         <>
        <Poke pokemon={pokemon} keys={pokemon.id}/>
        
        </>
        ) )}
    </ul>
};

export default PokeList