import React,{Component}from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';
class Burger extends Component {
    render(){
        let transformedIngredients = Object.keys(this.props.ingredients).map(
            igKey =>{
                return [...Array(this.props.ingredients[igKey])].map((_,i)=>{
                  return  <BurgerIngredient key={igKey+ i} type = {igKey} />
                });
            })
            .reduce((arr,el)=>{
                return arr.concat(el); // simply flattern
            },[])
            if(transformedIngredients.length === 0){
                transformedIngredients = <p>Please start adding ingredients!</p>
            }
        return(
            <div className={classes.Burger}>
            <BurgerIngredient type ="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type ="bread-bottom"/>
            </div>
        )
    }
    
};

export default Burger;