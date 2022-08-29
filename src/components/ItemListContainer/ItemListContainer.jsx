import React from "react"
import Count from "../Count"


const ItemListContainer = () => {
   function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
   }
    return(
        <>
        <Count stock={8} onAdd={onAdd} />
        </>
    )
}



export default ItemListContainer