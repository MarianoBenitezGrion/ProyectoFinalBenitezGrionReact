import 'bootstrap/dist/css/bootstrap.css';
import { BsCart4 } from 'react-icons/bs';
import React, { useContext, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom';

const CartWidget=()=> {
  const {cantidadTotal, cart}=useContext(ShopContext)
  const navigate= useNavigate();
  

  
  return (
    <p>
    
      <button onClick={()=>{navigate('/cart')}}><BsCart4 /></button>
    {cantidadTotal}</p>
    
  );
}

export default CartWidget;
