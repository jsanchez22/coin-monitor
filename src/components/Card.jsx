import React from 'react'

export default function Card({titulo, moneda , pesos , showResult}) {
          const ars = parseInt(pesos)  
          const changeCoin = (coin) => {
            let total = parseFloat(coin)
            if (total > 0){
            return (ars/total).toFixed(2)
          }             
            return 0
            }
           
  return (    
    <div className='card row rounded text-light text-center ' > 
            <div className='card-header rounded-top '>
               <h3>{titulo}</h3>
            </div>
            <div className='card-body'>
                <h4 className='bg-danger rounded d-flex justify-content-around'>
                <span>VENTA</span>
                <span > {moneda.venta} </span></h4>
                <h4 className='bg-success rounded d-flex justify-content-around'>
                <span>COMPRA</span>
                <span > {moneda.compra} </span></h4>
                {showResult ?<h1>$ {changeCoin(moneda.compra)}</h1>:""}
            </div>
    </div>
   
  )
}
