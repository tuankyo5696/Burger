import React,{Component} from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component{
    render(){
        return(
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>Burger Builder</NavigationItem>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/" exact>Sign in</NavigationItem>
                <NavigationItem link="/" exact>Sign up</NavigationItem>
            </ul>
        );
    }
};   


export default NavigationItems;