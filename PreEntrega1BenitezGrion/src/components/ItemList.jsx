import React, { useContext } from "react"
import Item from './Item.jsx'
import { Link } from "react-router-dom"
import './ItemList.css'
import { ShopContext } from "./ShopContext.jsx"

const ItemList=({productos})=>{
    
    const {agregarAlCarrito}=useContext(ShopContext)
    
    if(productos.length>0){
        return(
            <>
            {
            productos?.map((prod,index)=>{
                return(
                <div key={index} className="centrado, recuadro">
                    <Item prod={prod}/>

                    <div className="d-flex">
                        <Link className="rojo" to={`/producto/${prod.id}`}>ver detalle</Link>
                        {prod.stock>0?(<button onClick={()=>agregarAlCarrito(prod)}>Agregar al carrito</button>):
                        (<div>No hay stock</div>)}
                    </div>
                </div>
                )
            })}
            </>
            )
    }
    else{
        
        return<h2>No se encuentran productos</h2>
    }

}
export default ItemList