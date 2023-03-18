export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_MODAL: 'ADD_MODAL',
    ADD_ORDERS: 'ADD_ORDERS',
    ADD_USERS: 'ADD_USERS',
    ADD_STORE: 'ADD_STORE',
    ADD_MENUS: 'ADD_MENUS',
    ADD_CATEGORIES: 'ADD_CATEGORIES',
    ADD_CAT: 'ADD_CAT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    DARKMODE_ON: 'DARKMODE_ON',
    DARKMODE_OFF: 'DARKMODE_OFF',
    ADD_STOREID:'ADD_STOREID',
      ADD_ID:'ADD_ID'
}

export const addToCart = (product, cart) => {
  
    const check = cart.every(item => {
        return item._id !== product._id
    })

    if(!check) return (
        { type: 'NOTIFY', payload:  [...cart] }) 

    return ({ type: 'ADD_CART', payload: [...cart, {...product, quantity: 1}] }) 
}



export const deleteOneItem = (product, cart) => {
    const newData = cart.filter(item => item._id !== product._id)
    return ({ type: 'ADD_CART', payload: newData})
}

export const decr = (product, cart) => {

     const check = cart.every(item => {
        return item._id !== product._id
    })

    const newData = [...cart]
    newData.forEach(item => {
        if(item._id === product._id) item.quantity -= 1
    })
     if(!check)   

    return ({ type: 'ADD_CART', payload: newData })
}


