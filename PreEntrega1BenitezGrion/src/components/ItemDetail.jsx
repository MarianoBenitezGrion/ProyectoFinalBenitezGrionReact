import { useContext, useState } from "react"
import Item from "./Item"
import { ShopContext} from "./ShopContext"

const ItemDetail=({producto})=>{
    const {agregarAlCarrito,cantidadCarritoMenosUno,cart}= useContext(ShopContext)
    const elemento= cart.find((el)=>el.id=== producto.id)
    const cantidadElemento= elemento?elemento.cantidad:0
    const[cantidad,setCantidad]=useState(1)
    
    const cantidadMasUno=()=>{
        
        
        if(cantidad<producto.stock-cantidadElemento)
        setCantidad(cantidad+1)
    }
    const cantidadMenosUno=()=>{

        if(cantidad!=1 ){
            if(cantidad==cantidadElemento){
                cantidadCarritoMenosUno(cantidadElemento.id)
            }
            setCantidad(cantidad-1)
            
        }
        
    }
    const cantidadReset=()=>{
        setCantidad(1)
    }
    return(
        <>

        <Item prod={producto}/>
        <button onClick={cantidadMenosUno}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
        </svg>
        </button>
        {cantidad}
        <button onClick={cantidadMasUno}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
        </button>
        <button onClick={()=>{
            agregarAlCarrito(producto,cantidad)
            cantidadReset()
            }}>Agregar al carrito</button>
        </>
    ) 
}
export default ItemDetail