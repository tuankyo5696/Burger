import React,{Component} from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Container } from 'semantic-ui-react';


class ProductList extends Component {
    
    render(){
        
        const listProduct = this.props.products.map((product)=>{
            return <ProductItem key = {product.id} {...product}/>;
        })
        console.log(listProduct);
        return(
         <Container>
            <div className ='products-list'>
                {listProduct};    
            </div>
        </Container>
        )
        
    }
}

export default ProductList;