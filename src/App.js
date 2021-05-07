import React from 'react'
import PizzaConfigurator from './PizzaConfigurator'
import { PIZZA_SETINGS } from './data'
import ConfirmOrder from './ConfirmOrder'
import {priceCalculation} from './Utils/utils'

/* Create Inisial State for Pizza Configurator 
{
    size:30,
    dough:'thick,
    souse:'tomat',
    cheese:[],
    meet:[],
    vegetables:[]
}

*/
const defaultPizza = Object.fromEntries( PIZZA_SETINGS.map(({name, values, type }) =>
    (type === 'radio' ? [name, values[0]] : [name, []]
  ))
  )


function App() {
  const [orderToConfirm, setOrderToConfirm] = React.useState({})
  const [pizzaConfigSetup, setPizzaConfigSetup] = React.useState(defaultPizza)

  const handlerSubmit = (order) => {
    const price = priceCalculation(order)
    setOrderToConfirm({
    order,
    price,
    })
  }

  //noConfirm Order - whant change it
  const handleChangeOrder = () => {
    setPizzaConfigSetup(orderToConfirm.order)
    setOrderToConfirm({})
  }

  //Confir the Order. Clear the order state and setup default to pizza configuration
  const handleConfirmOrder = () => {
    setPizzaConfigSetup(defaultPizza)
    setOrderToConfirm({})
  }

  //Flag for check that we have orderToConfirm
  const isOrderToConfirm = Object.keys(orderToConfirm).length !== 0

  return (
    <div style={{ padding: 20 }}>
      <h1>Create your pizza</h1>
      {isOrderToConfirm ? (
        <ConfirmOrder
          preOrder={orderToConfirm}
          onConfirm={handleConfirmOrder}
          onChange={handleChangeOrder}
        />
      ) : (
        <PizzaConfigurator
          onSubmit={handlerSubmit}
          pizzaConfigSetup={pizzaConfigSetup}
        />
      )}
    </div>
  )
}

export default App
