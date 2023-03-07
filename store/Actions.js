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




export const deleteOneItem = (product, cart) => {
    const newData = cart.filter(item => item._id !== product._id)
    return ({ type: 'ADD_CART', payload: newData})
}


