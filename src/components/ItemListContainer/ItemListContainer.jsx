import React from "react"
import Count from "../Count"
import CountCustomHook from "../CountCustomHook"


const ItemListContainer = () => {
   function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
   }
    return(
        <>
        <Count stock={8} onAdd={onAdd} />
        <CountCustomHook stock={8} onAdd={onAdd}/>
        </>
    )
}



export default ItemListContainer