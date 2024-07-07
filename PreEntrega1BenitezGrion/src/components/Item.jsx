import './Item.css'

const Item=({ prod })=>{
    
    return(
        <div>
        
        <div className="contenedor-imagen">
        <img src={prod?.img} alt={prod?.descripcion} />
        </div>
        <h2>{prod?.descripcion}</h2>
        <p>${prod?.precio}</p>
        <p>Stock: {prod?.stock}</p>
        </div>
    )
}
export default Item