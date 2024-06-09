import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getProductosXId } from "../data/asyncmock"
import Item from "./Item.jsx"
const ItemDetailContainer=()=>{
const {itemId}=useParams()
console.log(itemId)
const [producto,setProducto]=useState()


    useEffect(()=>{
        getProductosXId(itemId)
        .then((res=>setProducto(res)))
        
        .catch((rej)=>console.error(rej))
        .finally(console.log(producto))
       
        
    },[])

    return <Item img={producto?.img} descripcion={producto?.descripcion} precio={producto?.precio} />
    
}

export default ItemDetailContainer