import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({css}) => {
    return (
        <FontAwesomeIcon icon={faCartShopping} className={css} />
    )
}
    
export default CartWidget