import { PRICES } from "../data"

export const isTopings = (order) => 
{ 
    return(order.cheese?.length > 0 || order.vegetables?.length > 0 || order.meet?.length > 0)
}


export const priceCalculation = (order={}) => (
    PRICES.base +
        (order.size === 35 && PRICES.size) +
        (order.cheese?.length * PRICES.cheese) +
        (order.vegetables?.length * PRICES.vegetables) +
        (order.meet?.length * PRICES.meet)
)