/**
 * Created by Karolina on 21.05.2017.
 */
export const ADD = 'favoriteProducts/ADD'
export const REMOVE = 'favoriteProducts/REMOVE'
export const UPDATE = 'favoriteProducts/UPDATE'
import * as firebase from "firebase";

export const add = (productId) => ({
    type: ADD,
    productId: productId
})

export const remove = (productId) => ({
    type: REMOVE,
    productId: productId
})
export const update = (payload) => {
    console.log('ACTION CREATOR UPDATE', payload);
    return {
        type: UPDATE,
        payload: payload
    }
}

const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            var newState;
            if (state.includes(action.productId)) {
                newState = state;
            } else {
                newState = [...state, action.productId]
            }
            var userId = firebase.auth().currentUser.uid;
            firebase.database().ref('/').child('favourites').child(userId).set(newState)
                .then(() => {
                    console.log('IT WORKS!');
                });
            return newState;
        case REMOVE:
            var removeState = state.filter(
                productId => productId !== action.productId
            );
            var userIds = firebase.auth().currentUser.uid;
            firebase.database().ref('/').child('favourites').child(userIds).set(removeState);
            return removeState;

        case UPDATE :{
            console.log('ACTION UPDATE', action.payload);
            if(action.payload){
                return action.payload;
            }else{
                return [];
            }
        }
        default:
            return state

    }
}