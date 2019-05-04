import React from 'react';
import Button from './../../UI/Button/Button';
const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
        return (<li key={igKey}><span stype={{texTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        )
        });
        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continure to Checkout?</p>
                <Button btnType="Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked = {props.puschaseContinued}>CONTINUE</Button>
            </>
        );
};

export default orderSummary