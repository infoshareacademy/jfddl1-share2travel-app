/**
 * Created by Karolina on 21.05.2017.
 */
export const ADD='favoriteProducts/ADD'
export const REMOVE='favoriteProducts/REMOVE'

export const add = (productId) => ({
    type: ADD,
    productId: productId
})

export const remove = (productId) => ({
    type: REMOVE,
    productId: productId
})
const initialState = []
export default (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            if (state.includes(action.productId)) {
                return state
            } else {
                return [...state, action.productId]
            }
        case REMOVE:
            return state.filter(
                productId => productId !== action.productId
            )
        default:
            return state
    }
}