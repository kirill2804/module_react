

const initStateStore = {
    counterProd:0,
    priceItem:0,
    total: 0,
    productBasked: [],
 
}


function reduser(state=initStateStore, action){

    switch(action.type){
        case "ADD_PROD": 
        return {
            ...state,
            counterProd: state.counterProd + 1,
            total: state.total + state.priceItem,
            productBasked: state.productBasked.concat(action.data),
        }
        case "REMOVE_PROD": 
        return {
            ...state,
            counterProd: state.counterProd - 1,
            total: state.total - state.priceItem,
            productBasked: state.productBasked.filter(item => item.id !== action.id),
        }
        default:
        return state 
    }
}

export {initStateStore, reduser}