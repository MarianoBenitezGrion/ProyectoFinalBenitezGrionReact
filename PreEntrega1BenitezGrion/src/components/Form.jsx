import { useContext, useState } from "react"
import { ShopContext } from "./ShopContext"
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/client"

const Form=()=>{
    const [nombre,setNombre]=useState('')
    const [mail,setMail]=useState('')
    const [telefono,setTelefono]=useState('')
    const [direccion,setDireccion]=useState('')
    const {cart,clear}=useContext(ShopContext)
    
    const actualizarStock=(id,cantidad)=>{
        const productoBD= doc(db,"productos",id)
        getDoc(productoBD).then((snapshot=>{
            if (snapshot.exists()) {
                console.log(snapshot.data().stock)

                const nuevoStock= snapshot.data().stock-cantidad
                console.log(nuevoStock)
                updateDoc(productoBD,{stock:nuevoStock}).then(({id,stock})=>console.log("ID:",id," Stock: ",stock))
            }
        }))
    }
    const agregarOrden=()=>{
        
        const data={
            productos: cart,
            montoTotal: cart.reduce((acc,elemento)=>acc+(elemento.cantidad*elemento.precio),0),
            usuario: {   
                nombreUsuario:nombre,
                mailUsuario:mail,
                telefonoUsuario:telefono,
                direccionUsuario:direccion
            }
        }

        const orderCollection= collection(db,'orders')
        addDoc(orderCollection,data).then(({id})=>console.log(id))
        cart.forEach(element => {
            console.log(element.id)
            actualizarStock(element.id, element.cantidad)
        });
        clear()
    }
    return(
        <>
        
            <input id="txtNombre" onChange={e=>setNombre(e.target.value)} value={nombre} type="text" placeholder="ingrese su nombre" />
            <input id="txtMail" onChange={e=>setMail(e.target.value)} value={mail} type="text" placeholder="ingrese su correo electronico" />
            <input id="txtTelefono" onChange={e=>setTelefono(e.target.value)} value={telefono} type="text" placeholder="ingrese su telefono" />
            <input id="txtDireccion" onChange={e=>setDireccion(e.target.value)} value={direccion} type="text" placeholder="ingrese su direccion" />
            
            <button id="btnFormulario" onClick={agregarOrden}>Enviar</button>
        
        </>
    )
}
export default Form