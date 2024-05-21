import Container from "react-bootstrap/esm/Container"

const ItemListContainer=({greeting})=>{
    return(
        <Container fluid fixed="top">
        <div style={{backgroundColor:"#F8F9FA", width:"100%"}  } fixed="top">
            <h2>Productos</h2>
            {greeting}
        </div>
        </Container>
    )
}
export default ItemListContainer