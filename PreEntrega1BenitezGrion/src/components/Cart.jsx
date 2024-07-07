import { useContext } from "react"
import { ShopContext } from "./ShopContext"
import './Cart.css'
import { Link } from "react-router-dom";
const Cart=()=>{
const {cart}=useContext(ShopContext);

return(
    <>
    <h1>Carrito</h1>
    {cart.map((carrito,index)=>{
        return(
            <div key={index} className="cart-container">
                <div className="img-container"><img src={carrito.img} alt={carrito.descripcion} /></div>
                
                <p>{carrito.descripcion}</p>
                <p>$ {carrito.precio}</p>
                <p>{carrito.categoria}</p>
                <p>{carrito.cantidad}</p>
                
            </div>
        )
    })
    }
    {cart.length>0 ? <Link className="rojo" to={'/formulario'}>Finalizar compra</Link>:
    <>
    <p>no tienes productos seleccionados</p>
    <Link className="rojo" to={'/'}>Nuestros Productos</Link>
    </>
    }

   
    

    
    </>

)
}
export default Cart