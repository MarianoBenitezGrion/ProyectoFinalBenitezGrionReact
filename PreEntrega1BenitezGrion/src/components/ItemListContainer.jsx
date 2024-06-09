import { useEffect, useState} from "react"
import Container from "react-bootstrap/esm/Container"
import {getProductos} from '../data/asyncmock'
import './ItemListContainer.css'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
const ItemListContainer=({greeting})=>{
    const [productos,setProductos]=useState([])
    const {categoryId}=useParams()
    console.log(categoryId)
    useEffect(()=>{
        getProductos(categoryId)
        .then((res=>setProductos(res)))
        .catch((rej)=>console.error(rej))
    }
    )
    return(
        <Container style={{justifyContent:"center", textAlign:"center"}}>
        <div style={{backgroundColor:"#F8F9FA", width:"100%"}  } >
        <hr />
            <h2>Productos</h2>
            
            <div className="d-flex">
                {productos?.map((prod,index)=>{
                return(
                <div className="contenedor" key={index}>
                        <div className="contenedor-imagen"><img src={prod.img} alt={prod.descripcion} /></div>
                        
                        <h3>{prod.descripcion}</h3>
                        <p>$ {prod.precio}</p>
                        <Link  className="default-text" to={'/producto/'+prod.id}>ver detalle</Link>
                        </div>
                )
            })}
            </div>
            {greeting}
        </div>
        </Container>
    )
}
export default ItemListContainer