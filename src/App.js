import React from 'react'
import ConfigPizza from './ConfigPazza'
import ThankYou from "./ThankYou";

function App() {
    const pizzaSettings = {
        size: {values: [30, 35], type: 'radio'},
        dough: {values: ['thick', 'thin'], type: 'radio'},
        souse: {values: ['tomato', 'white', 'hot'], type: 'radio'},
        cheese: {values: ['mozzarella', 'cheddar', 'dor blue'], type: 'checkbox'},
        vegetables: {values: ['tomato', 'mushrooms', 'pepper'], type: 'checkbox'},
        meet: {values: ['bacon', 'pepperoni', 'ham'], type: 'checkbox'},
    }

    const priceFeed = {
        base: 200,
        size: 50,
        cheese: 29,
        vegetables: 29,
        meet: 29
    }

    const initialState = Object.fromEntries(Object.entries(pizzaSettings).map(([name, {values, type}]) => (
            type === 'radio' ? [name, values[0]] : [name, []]
        ))
    )


    const [preOrder, setPreOrder] = React.useState({})
    const [initialOrder, setInitialOrder] = React.useState(initialState)

    const onSubmit = (pizzaPreOrder, price) => {
        setPreOrder({
            order: {...pizzaPreOrder}, price
        })
    }

    const onChange = () => {
        setInitialOrder(preOrder.order)
        setPreOrder({})
    }

    const onConfirm = () => {
        setPreOrder({})
        setInitialOrder(initialState)
    }


    return (

        <div style={{padding: 20}}>
            <h1>Create your pizza</h1>

            {Object.keys(preOrder).length == 0
                ? <ConfigPizza pizzaSettings={pizzaSettings} onSubmit={onSubmit} initialState={initialOrder}
                               priceFeed={priceFeed}/>
                : <ThankYou preOrder={preOrder} onConfirm={onConfirm} onChange={onChange}/>
            }
        </div>
    )
}

export default App
