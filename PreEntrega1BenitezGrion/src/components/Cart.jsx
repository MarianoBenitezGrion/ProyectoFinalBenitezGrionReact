import { useContext, useEffect, useState } from "react"
import { ShopContext } from "./ShopContext"
import './Cart.css'
import {collection, getDocs} from "firebase/firestore"
import { Link } from "react-router-dom"
import {db} from "../firebase/client"
const Cart=()=>{
const {cart, setCantidad, cantidadTotal}=useContext(ShopContext);
const [productos, setProductos]= useState([])
const [cargando,setCargando]=useState(true)
useEffect(()=>{
    const productsRef=collection(db,"productos");

    const getProductos= async () =>{
        try{
            const data= await getDocs(productsRef)
            const dataFiltrada=data.docs.map((doc)=>({id:doc.id,stock:doc.data().stock}))
            setProductos(dataFiltrada)
            console.log(productos)
        }catch{console.error(error)}
        finally{
            setCargando(false)
        }


            
    }
    getProductos()
},[])
const restarCantidad=(id)=>{
    
    cart.forEach(element => {
        if (element.id==id) {
            
            if(element.cantidad>1){
                setCantidad(cantidadTotal-1)
                element.cantidad-=1
            }

        }

    })

}
const removerItem=(id)=>{
    cart.forEach(element => {
        const index=cart.indexOf(element)
        if (element.id==id) {
            setCantidad(cantidadTotal-element.cantidad)
            cart.splice(index,1)

        }

    })
}
const sumarCantidad=(id)=>{
    
    const productoSeleccionado=productos.find((el)=>el.id==id)
    cart.forEach(element => {
        if (element.id==id) {
            
        if(element.cantidad<productoSeleccionado.stock){
            setCantidad(cantidadTotal+1)
            element.cantidad+=1
        }

        
            
        }

    })

}

    if(cargando==true){
        return (<p>cargando...</p>)
    }
    
    
    return(   
    <>
    <h1>Carrito</h1>
    {cart.map((carrito,index)=>{
        return(
            <div key={index} className="cart-container">
                <div className="img-container"><img src={carrito.img} alt={carrito.descripcion} /></div>
                
                <p>{carrito.descripcion}</p>
                <p>$ {carrito.precio}</p>
                
                <p>Cantidad: </p>

                <button onClick={()=>restarCantidad(carrito.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
        </svg>
        </button>
        {carrito.cantidad}
     <button onClick={()=>sumarCantidad(carrito.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
        </button>
                <p>Subtotal: {carrito.cantidad*carrito.precio}</p>
        <button onClick={()=>removerItem(carrito.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </button>
            </div>
        )
    })
    }
    {cart.length>0 ? 
    <>
    <div>Total: {cart.reduce((acc,element)=>element.cantidad*element.precio+acc,0)} </div>
    <Link className="rojo" to={'/formulario'}>Finalizar compra</Link>
    </>
    :
    <>
    <p>no tienes productos seleccionados</p>
    <Link className="rojo" to={'/'}>Nuestros Productos</Link>
    </>
    }

   
    

    
    </>

)
}
export default Cart