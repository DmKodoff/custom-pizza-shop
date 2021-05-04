import React, { useState } from 'react'
import { PIZZA_SETINGS } from './data'
import { CheckBoxGroup } from './Utils/Components/CheckBoxGroup'
import PrintOrder from './Utils/Components/PrintOrder'
import { RadioButtonsGroup } from './Utils/Components/RadioButtonsGroup'
import {priceCalculation} from './Utils/utils'


function PizzaConfigurator({pizzaConfigSetup,onSubmit}) {

    const [pizzaPreOrder, setPizzaPreorder] = useState(pizzaConfigSetup)


    const chooseHandler = (name, value) => {
        setPizzaPreorder({...pizzaPreOrder, [name]: value})
    }

    const price = priceCalculation(pizzaPreOrder)

    return (
        <>
            <form>
                <div>
                    {PIZZA_SETINGS.map(({name, values, type}, i) => (
                            type === 'radio'
                                ?
                                <RadioButtonsGroup
                                    key={i}
                                    values={values}
                                    name={name}
                                    onChange={chooseHandler}
                                    checked={pizzaPreOrder[name]}
                                />
                                :
                                <CheckBoxGroup
                                    key={i}
                                    values={values}
                                    name={name}
                                    onChange={chooseHandler}
                                    checked={pizzaPreOrder[name]}
                                />
                        )
                    )}
                </div>
                <br/>
                <div>
                    <p>Your Order:</p>
                    <PrintOrder order={pizzaPreOrder}/>
                </div>
                <br/>
                <button onClick={()=>onSubmit(pizzaPreOrder)}>Order: {price}$</button>
            </form>
               
        </>
    )
}

export default PizzaConfigurator