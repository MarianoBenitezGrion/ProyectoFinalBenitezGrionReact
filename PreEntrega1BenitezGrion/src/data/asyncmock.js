const listaProductos=[
    {
        id:1,
        img:'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU9603_0.jpg',
        descripcion:'Camiseta Titular River 2022',
        categoria:'Camisetas',
        precio: 40000
    },
    {
        id:2,
        img:'https://tiendapodium.com.ar/wp-content/uploads/2021/04/A-DX5931.jpg',
        descripcion:'Camiseta Suplente River 2019',
        categoria:'Camisetas',
        precio:38000
    },
    {
        id:3,
        img:'https://www.digitalsport.com.ar/files/products/56aa41894ce5d-322431-1024x1024.jpg',
        descripcion:'Campera River Naranja',
        categoria:'Camperas',
        precio:50000
    },
    {
        id:4,
        img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/18f5721f344a442ba0c06166b3cc70f1_9366/Campera_de_Invierno_River_Plate_23_Rojo_IK4028_01_laydown.jpg',
        descripcion:'Campera River de Invierno',
        categoria:'Camperas',
        precio:68000
    },
    {
        id:5,
        img:'https://riverplate2016.wordpress.com/wp-content/uploads/2016/02/case-pantalones-river-plate-15-16.jpg?w=1000',
        descripcion:'Short River 2014',
        categoria: 'Pantalones',
        precio:49000
    },
    {
        id:6,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcHSQzaZg-n5xH72Ljt8_CmZZhjkfrDe14A&s',
        descripcion:'Pantalon River Bordo',
        categoria:'Pantalones',
        precio:50000
    },
    {
        id:7,
        img:'https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-river-adidas-dna-gris-100020ip9646001-1.jpg',
        descripcion:'Short River Negro 2024',
        categoria:'Pantalones',
        precio:49500
    },
    {
        id:8,
        img:'https://acdn.mitiendanube.com/stores/870/577/products/queremos-informar-que-nos-tomamos-unos-dias-hasta-el-2709-001b39b4ab023b420317073959849242-480-0.png',
        descripcion:'Camiseta Suplente 2015',
        categoria:'Camisetas',
        precio:63000
    }

]
export const getProductos=(idCategoria)=>{
    const listado=!idCategoria?listaProductos: listaProductos.filter((prod)=>prod.categoria===idCategoria)
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            listado.length>0 ? resolve(listado) : reject("no hay datos")
        },3000
        )
    })
}
export const getProductosXId=(idProducto)=>{
    const producto= idProducto? listaProductos.find((prod)=>prod.id==idProducto):{}
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            producto ? resolve(producto) : reject("no hay productos con id= "+idProducto)
        },2000
        )
    })
    
}