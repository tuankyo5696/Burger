import React,{Component} from 'react';


import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from './../../axios-order';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandle/withErrorHandle';
import * as actionTypes from './../../store/constants/actionTypes';
import {connect} from 'react-redux';
    

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={...}
    // }
    state = {
            
            purchasing: false,
            loading :   false ,// spinner,
            error : null
    }
    componentDidMount  () {
        axios.get('/ingredients.json')
        .then(response => {this.setState({
            ingredients : response.data
        });
        })
        .catch(error => this.setState({
            error: error
        })) ;
    }
    updatePurchaseState = (ingredients) =>{
        const sum = Object.keys(ingredients)
            .map(igKey  =>{
                return ingredients[igKey];    
            })
            .reduce((sum,el)=>{
                return sum + el;
            },0)
        return sum > 0
    }
    
    purchaseHandler =() => {
        this.setState({purchasing: true});
        
    }
    purchaseCancelHandler = () =>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler = () =>{
        const queryParams = [];
        for(let i in this.props.ings){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
        }
        queryParams.push('price=' + this.props.price);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname : 'checkout',
            search : '?' + queryString
        }); // go to page checkout
    }
    render(){
        const disabledInfo = {
            ...this.props.ings
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <=0
           
        }
        
     
        let orderSummary = null;
        let burger = this.state.error ? <p> ingredients can't be loaded</p> : <Spinner/>

        if(this.props.ings){
          
            burger = ( <>
               <Burger ingredients = {this.props.ings}/>
               <BuildControls 
                   ingredientAdded = {this.props.onIngredientAdded}
                   ingredientRemoved= {this.props.onIngredientRemoved}
                   disabled = {disabledInfo}
                   purchasable ={this.updatePurchaseState(this.props.ings)}
                   ordered = {this.purchaseHandler}
                   price = {this.props.price}
               />
                </> 
                );
               orderSummary =  <OrderSummary ingredients={this.props.ings} 
                                            price ={this.props.price}
                                            purchaseCancelled ={this.purchaseCancelHandler}
                                            puschaseContinued = {this.purchaseContinueHandler}
                            />
                if (this.state.loading){
                    orderSummary = <Spinner/>
                }               
        }
        
        return (
            <>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onIngredientAdded : (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT,ingredientName : ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT,ingredientName : ingName})
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axios));