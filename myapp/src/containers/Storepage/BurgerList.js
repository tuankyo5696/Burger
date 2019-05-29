import React,{Component} from 'react';
// import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react';
import ProductList from './../../components/Products/ProductList/ProductList'
import {isMobile} from 'react-device-detect';
import {connect} from 'react-redux'
class BurgerList extends Component {
    state = { visible: isMobile ? false : true}

    toggleVisibility = () => this.setState({ visible:  !this.state.visible });
  
    render(){
        return(
            <div>
            
            <div className='store-products'>
            <div>
                        <Button
                        className='filter-button' 
                        onClick={this.toggleVisibility} 
                        floated='right' 
                        color='teal' 
                        icon='filter' 
                        />
                    </div>
            
            <div>
                <ProductList products={this.props.products} />
            </div>
        </div>
        </div>
       
        )
    }
}
const mapStateToProps = state =>{
    return {
        products:   state.products
    }
}

export default connect(mapStateToProps,null) (BurgerList);