import React from 'react';
import PropTypes from 'prop-types';

ThankYou.propTypes = {
    preOrder: PropTypes.object,
};

function ThankYou({preOrder, onConfirm, onChange}) {

    const {order, price} = preOrder
    const [confirm, setConfirm] = React.useState(false)

    const onConfirmOrder = () => {
        setConfirm(true)
        console.log(
            'We have a new order', preOrder
        )
        setTimeout(() => {
            onConfirm()
        }, 3 * 1000)
    }


    return (
        <div style={{
            margin: 100,
            padding: 50,
            borderStyle: "solid",
        }}>
            {!confirm ?
                <>
                    <h2>Please, Check Your Order</h2>
                    <p>Pizza {order.size}cm on {order.dough} dough and {order.souse} souse</p>
                    {(order.cheese.length > 0 || order.vegetables.length > 0 || order.meet.length > 0)
                        ? <span>Toppings:</span>
                        : <span>With out toppings.</span>}
                    <p>{order?.cheese?.concat(order?.vegetables, order?.meet).join(', ')}</p>
                    <br/>
                    <p>Total:{price}$</p>

                    <button style={{marginRight: 20}} onClick={onConfirmOrder}>Confirm</button>
                    <button onClick={onChange}>Change Order</button>
                </>
                :
                <>
                    <h3> Thank You for your order.</h3>
                    <p>Our Manager will contact to you shortly.</p>
                    <small>Check the order in Console</small>
                </>
            }
        </div>
    )
}

export default ThankYou;