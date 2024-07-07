import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavbarComponent  from './components/NavbarComponent.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Contacto from './components/Contacto.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { ShopContextComponent } from './components/ShopContext.jsx'
import Form  from './components/Form.jsx'
import Cart from './components/Cart'
function App() {
  
  return (
    
<ShopContextComponent>
      <div className='centrado'>
        <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={<p className='alerta'>No hay productos actualmente</p>} />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/producto/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/formulario' element={<Form />}/>
          <Route path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
        </div>
</ShopContextComponent>
  )
}

export default App
