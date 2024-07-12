import { useEffect, useState} from "react"
import Container from "react-bootstrap/esm/Container"
import {getProductos} from '../data/asyncmock'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../firebase/client"

const ItemListContainer=({greeting})=>{
    const [cargando, setCargando]=useState(true);
    const [productos,setProductos]=useState([])
    const {categoryId}=useParams()
    
    useEffect(()=>{

        let productsRef
        categoryId? 
        productsRef=query(
            collection(db,"productos"),
            where("categoria","==",categoryId)
        )
        :productsRef=collection(db,"productos");

        const getProductos= async ()=>{
            try{
                const data= await getDocs(productsRef)
                const dataFiltrada=data.docs.map((doc)=>({id:doc.id,...doc.data()}))
                
                setProductos(dataFiltrada)
            }
            catch{
                console.error("no se pueden encontrar productos")
            }
            finally{
                setCargando(false)
            }

        }

        getProductos()
    })
    
    if(cargando){
        return(
            <p>Cargando...</p>
        )
    }
    return(

        <Container style={{justifyContent:"center", textAlign:"center"}}>
        <div style={{backgroundColor:"#F8F9FA", width:"100%"}  } >
        <hr />
            <h2>Productos</h2>
            
            <div className="d-flex, centrado">
            <ItemList productos={productos}/>
            
            </div>
            {/*greeting*/}
        </div>
        </Container>
    )
}
export default ItemListContainer