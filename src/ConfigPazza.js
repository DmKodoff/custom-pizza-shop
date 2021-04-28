import React, {useState} from 'react'
import {RadioButton} from './Utils/Components/RadioButton'
import {CheckBox} from "./Utils/Components/CheckBox";

function ConfigPizza({pizzaSettings,initialState,onSubmit,priceFeed}) {

    const [pizzaPreOrder, setPizzaPreorder] = useState(initialState)


    const choseHandler = (name, value, type) => {
        const val = type === 'checkbox' ?
            pizzaPreOrder[name].includes(value)
                ? pizzaPreOrder[name].filter(item => item !== value)
                : pizzaPreOrder[name].concat(value)
            : value
        setPizzaPreorder({...pizzaPreOrder, [name]: val})
    }


    const price = priceFeed.base +
        (pizzaPreOrder.size === 35 && priceFeed.size) +
        (pizzaPreOrder.cheese.length * priceFeed.cheese) +
        (pizzaPreOrder.cheese.length * priceFeed.cheese) +
        (pizzaPreOrder.vegetables.length * priceFeed.vegetables) +
        (pizzaPreOrder.meet.length * priceFeed.meet)



    return (
        <>
            <form>
                <div>
                    {Object.entries(pizzaSettings).map(([name, {values, type}], i) => (
                            type === 'radio'
                                ?
                                <RadioButton
                                    key={i}
                                    values={values}
                                    name={name}
                                    onChange={choseHandler}
                                    checked={pizzaPreOrder[name]}
                                />
                                :
                                <CheckBox
                                    key={i}
                                    values={values}
                                    name={name}
                                    onChange={choseHandler}
                                    checked={pizzaPreOrder[name]}
                                />
                        )
                    )}
                </div>
                <br/>
                <div>
                    <p>Your Order:</p>
                    <p>Pizza {pizzaPreOrder?.size}cm on {pizzaPreOrder?.dough} dough and {pizzaPreOrder?.souse} souse</p>
                    {(pizzaPreOrder?.cheese?.length>0 || pizzaPreOrder?.vegetables?.length>0 || pizzaPreOrder?.meet?.length>0) && <p>Toppings:</p>}
                    <p>{pizzaPreOrder?.cheese?.concat(pizzaPreOrder?.vegetables, pizzaPreOrder?.meet).join(', ')}</p>
                </div>
                <br/>
            </form>
                <button onClick={()=>onSubmit(pizzaPreOrder,price)}>Order: {price}$</button>
        </>
    )
}

export default ConfigPizza