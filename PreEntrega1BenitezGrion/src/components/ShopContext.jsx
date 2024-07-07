import { createContext, useContext, useState } from "react";
export const ShopContext=createContext()
export const ShopContextComponent=({children})=>{
    const [cart,setCart]=useState([])
    const [cantidadTotal,setCantidad]=useState(0)
    const isInCart=(id)=>{
        
        const elemento=cart.find((el)=>el.id=== id)
        if(elemento)
            return true
        return false
        }
    const buscarEnCarritoXId=(id)=>{
        const elemento =cart.find((el)=>el.id=== id)
        return elemento
    }

    const agregarAlCarrito=(producto, cantidadParam=1)=>{

        const elemento= cart.find((el)=>el.id=== producto.id)
        console.log(elemento)
        const cantidadElemento=elemento?elemento.cantidad:0
        if(cantidadElemento+cantidadParam<=producto.stock){
            const {stock, ...resto}=producto
        if(isInCart(producto.id)){
            cart.forEach((el)=>{
                if(el.id===producto.id)
                    el.cantidad+=cantidadParam
                setCantidad(cantidadTotal+cantidadParam)
            })
        }else{
            setCart([...cart,{...resto, cantidad:cantidadParam}])
            setCantidad(cantidadTotal+cantidadParam)
        }
    }
    }
    const cantidadCarritoMenosUno=(id)=>{
        cart.forEach((el)=>{
            if(el.id==id){
                setCantidad(cantidad-1)
            }
        })

    }
    const clear=()=>{
        setCart([])
        setCantidad(0)
    }
    
    return(
        <ShopContext.Provider value={{cantidadCarritoMenosUno,cantidadTotal, cart, agregarAlCarrito, clear}}>
            {children}
        </ShopContext.Provider>
    )
}
