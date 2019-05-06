import React,{Component} from 'react';

import classes from './Layout.css';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    sideDrawerToggleHandler = () =>{
        this.setState ((prevState) =>  {
        return {showSideDrawer: !prevState.showSideDrawer};
    });
    }
    render(){
        return(
         <> 
            <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
            <SideDrawer  closed = {this.SideDrawerClosedHandler}
                         open = {this.state.showSideDrawer}
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </>
        );
    }
    
};
    
   
    


export default Layout;