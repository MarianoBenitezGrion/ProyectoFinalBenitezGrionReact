import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import NavbarFunction  from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
function App() {
  return (
    <div className='tipografia'>
     <NavbarFunction />
      <ItemListContainer greeting={<p className='alerta'>No hay productos actualmente</p>} />
     </div>
  )
}

export default App
