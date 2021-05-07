import React from 'react'
import { isTopings } from './../utils'

export const PrintTopings = ({order}) => {
    const allTopings = [].concat(order.vegetables,order.meet,order.cheese).join(', ')

  return (
    <>
      { 
       isTopings(order) ? (
        <>
          <span>Toppings:</span>
          {allTopings}
        </>
      ) : (
        <span>With out toppings.</span>
      )}
    </>
  )
}
