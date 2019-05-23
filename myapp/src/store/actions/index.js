import *  as types from './../constants/actionTypes';

export const  addIngredient = (ingName) =>{
    return {
        type: types.ADD_INGREDIENT,
        ingName
    }
}

export const removeIngredient = () =>{
    return {
        type: types.REMOVE_INGREDIENT
    }
}