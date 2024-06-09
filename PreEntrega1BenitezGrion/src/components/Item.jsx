import './Item.css'
const Item=({img,descripcion,precio})=>{
    return(
        <>
        <div className="contenedor-imagen">
        <img src={img} alt={descripcion} />
        </div>
        <h2>{descripcion}</h2>
        <p>${precio}</p>
        </>
    )
}
export default Item