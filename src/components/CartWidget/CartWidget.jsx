import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({css,cssCount}) => {
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} className={css} /><p className={cssCount}>0</p>
        </>
        
    )
}
    
export default CartWidget