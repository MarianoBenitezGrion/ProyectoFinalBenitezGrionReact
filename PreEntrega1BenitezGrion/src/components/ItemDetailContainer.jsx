import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getProductosXId } from "../data/asyncmock"
import ItemDetail from "./ItemDetail.jsx"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/client.js"
const ItemDetailContainer=()=>{
const {itemId}=useParams()
const[load,setLoad]=useState(true)

const [producto,setProducto]=useState()


    useEffect(()=>{
        /*getProductosXId(itemId)
        .then((res=>setProducto(res)))
        .catch((rej)=>console.error(rej))
        .finally(()=>setLoad(false))*/
        const productRef=doc(db,"productos",itemId)
        const getProduct=()=>{
            getDoc(productRef).then((snapshot=>{
                if(snapshot.exists())
                    setProducto({id:snapshot.id, ...snapshot.data()})
            })).catch(console.error("no se hallo el producto buscado"))
            .finally(()=>setLoad(false))
        }

        getProduct()
    },[])
    if(load)return <p>cargando...</p>
    return <ItemDetail producto={producto} />
    
}

export default ItemDetailContainer