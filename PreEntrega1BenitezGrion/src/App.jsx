import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavbarComponent  from './components/NavbarComponent.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Contacto from './components/Contacto.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
function App() {
  return (
    <div className='centrado'>
     <BrowserRouter>
       <NavbarComponent />
       <Routes>
        <Route path='/' element={<ItemListContainer greeting={<p className='alerta'>No hay productos actualmente</p>} />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/producto/:itemId' element={<ItemDetailContainer />}/>
        </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App
