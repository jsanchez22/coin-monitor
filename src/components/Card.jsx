import React from 'react'

export default function Card({titulo, moneda , pesos , showResult}) {
          const ars = parseInt(pesos)  
          const changeCoin = (coin) => {
            return (ars/coin).toFixed(2) 
          } 
  return (    
    <div className='card row rounded text-light text-center ' > 
            <div className='card-header rounded-top '>
               <h1>{titulo}</h1>
            </div>
            <div className='card-body'>
                <h4 className='bg-danger rounded d-flex justify-content-around'>
                <span>VENTA</span>
                <span > {moneda.value_sell} </span></h4>
                <h4 className='bg-success rounded d-flex justify-content-around'>
                <span>COMPRA</span>
                <span > {moneda.value_buy} </span></h4>
                {showResult ?<h1>$ {changeCoin(moneda.value_buy)}</h1>:""}
            </div>
    </div>
   
  )
}
