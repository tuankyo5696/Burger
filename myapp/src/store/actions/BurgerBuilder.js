import *  as types from './../constants/actionTypes';
import axios from './../../axios-order';
export const  addIngredient = (name) =>{
    return {
        type: types.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) =>{
    return {
        type: types.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: types.SET_INGREDIENTS,
        ingredients : ingredients
    }
}
export const fetchIngredientsFailed = () => {
    return {
        type: types.FETCH_INGREIDENTS_FAILED
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then(response =>{ 
            dispatch(setIngredients(response.data))
        })
        .catch(error =>{
            dispatch(fetchIngredientsFailed())    
        });
    };
}