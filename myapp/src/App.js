import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Signup from './containers/Signup/Signup';
import SignIn from './containers/SignIn/Signin';
import BurgerList from './containers/Storepage/BurgerList';

import ProductView from './components/Products/ProductView/ProductView';

class App extends Component {
  render(){
    return (
      <div >
        <Layout>
          <Switch>
          <Route path="/checkout" component = {Checkout}/> 
          <Route path= "/orders" component = {Orders}/> 
          <Route path= "/signup" component = {Signup}/>
          <Route path= "/signin" component = {SignIn}/>
          <Route path= "/burgerlist" exact={true} component = {BurgerList}/>
          <Route path= "/burgerlist/:id" component ={ProductView}/>
          <Route path="/" exact component = {BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
 
}

export default App;
