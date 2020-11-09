import { addItemToCart, decreaseItemInCart, increaseItemInCart, removeItemFromCart } from "./action"

const initialState = [];

const cartReducer = (state = initialState, action) => {
        switch(action.type){
                case addItemToCart:
                        let addToCartArr = [...state]
                        const item = addToCartArr.indexOf(addToCartArr.find(item => item.id === action.payload.id))
                        item >= 0 ?
                        addToCartArr[item].quantity = addToCartArr[item].quantity + action.payload.quantity
                        : addToCartArr = [...addToCartArr, {id: action.payload.id, category: action.payload.category, quantity: action.payload.quantity}]
                        return addToCartArr
                case removeItemFromCart:
                        const removedArr = [...state].filter(e => e.id !== action.payload)
                        return removedArr
                case increaseItemInCart:
                        let increaseItemArr = [...state]
                        increaseItemArr.find((e) => e.id === action.payload).quantity += 1
                        return increaseItemArr
                case decreaseItemInCart:
                        let decreaseItemArr = [...state]
                        const itemDecreased = decreaseItemArr.find(e => e.id === action.payload)
                        if(itemDecreased.quantity > 1){
                                let itemIndexDecreased = decreaseItemArr.indexOf(itemDecreased)
                                decreaseItemArr[itemIndexDecreased].quantity -= 1
                                return decreaseItemArr
                        }
                        return state;
                default: return state
        }
}

export default cartReducer