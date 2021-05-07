import PropTypes from 'prop-types';
import React from 'react';
import PrintOrder from './Utils/Components/PrintOrder'
import {priceCalculation} from './Utils/utils'

ConfirmOrder.propTypes = {
    preOrder: PropTypes.object,
};

function ConfirmOrder({preOrder, onConfirm, onChange}) {

    const [confirm, setConfirm] = React.useState(false)

    const handlerConfirmOrder = () => {
        setConfirm(true)
        console.log(
            'We have a new order', preOrder
        )
        setTimeout(() => {
            onConfirm()
        }, 3 * 1000)
    }

    const price = priceCalculation(preOrder.order)


    return (
        <div style={{
            margin: 100,
            padding: 50,
            borderStyle: "solid",
        }}>
            {confirm ?
                <>
                    <h3> Thank You for your order.</h3>
                    <p>Our Manager will contact to you shortly.</p>
                    <small>Check the order in Console</small>
                </>
                :
                <>
                <h2>Please, Check Your Order</h2>

                <PrintOrder order={preOrder.order}/>
                <br />
                 <p>Total:{price}$</p>
                 <br/>
                <button style={{marginRight: 20}} onClick={handlerConfirmOrder}>Confirm Order </button>
                <button onClick={onChange}>Change Order</button>
            </>
            }
        </div>
    )
}

export default ConfirmOrder;