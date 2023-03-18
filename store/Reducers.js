import { ACTIONS } from './Actions'


const reducers = (state, action) => {
    switch(action.type){
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload
            };
        case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: action.payload
            };
        case ACTIONS.ADD_MODAL:
            return {
                ...state,
                modal: action.payload
            };
        case ACTIONS.ADD_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case ACTIONS.ADD_USERS:
            return {
                ...state,
                users: action.payload
            };
            case ACTIONS.ADD_STORE:
                return {
                    ...state,
                    stores: action.payload
                };
        case ACTIONS.ADD_MENUS:
            return {
                ...state,
                menus: action.payload
            };
        case ACTIONS.ADD_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case ACTIONS.ADD_CAT:
            return {
                ...state,
                Cat: action.payload
            };
        case ACTIONS.ADD_PRODUCT:
            return {
                ...state,
                storedProducts: action.payload
            };
        case ACTIONS.DARKMODE_ON:
            return {
                ...state,
                darkMode: true
            };
        case ACTIONS.DARKMODE_OFF:
            return {
                ...state,
                darkMode: false
            };
        case ACTIONS.ADD_STOREID:
            return {
                ...state,
                storeId: action.payload
            };
         case ACTIONS.ADD_ID:
                return {
                    ...state,
                    id: action.payload
                };
        default:
            return state;
    }

}

export default reducers