import React from 'react'
import {PrintTopings} from './PrintTopings'


export default function PrintOrder({order}) {

  return (
    <div>
      <p>
        Pizza {order.size}cm on {order.dough} dough and {order.souse} souse
      </p>
        <PrintTopings order={order} />
      
    </div>
  )
}
