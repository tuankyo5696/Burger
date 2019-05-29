import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Container,Image,Rating,Label,Button } from 'semantic-ui-react';
import Lightbox from 'lightbox-react';
class ProductView extends Component {
    state = {  
        photoIndex : 0,
        isOpen : false
    }
    render(){
        const images = this.props.product.image.map(image => image.url)
    
        const {photoIndex,isOpen} =this.state
       
        return(
            <div className='page-top-margin'>
                <Container>
                        <h1>Hello</h1>
                        <div className='product-view'>
                            <div>
                                <Image
                                    src={this.props.product.image[0].url}
                                    onClick= {() => this.setState({isOpen: true})}
                                    label={{ as: 'a', corner: 'left', size: 'big',color: 'teal', icon: 'search plus' }}
                                    className='product-view_main-image cursor' 
                                />
                            </div>
                            <div className='product-view_images'>
                                {
                                    this.props.product.image.map((image, i) => {
                                        return (
                                        <div key={i}>
                                            <Image 
                                            onClick={() => this.setState({photoIndex: i})} 
                                            src={image.url} 
                                            size='tiny'
                                            className='cursor'
                                            disabled={this.state.photoIndex !== i}
                                            />
                                        </div>
                                        )
                                    })
                                } 
                            </div>
                            <div className='product-page__info'>
                            <div>
                                <h2>{this.props.product.name}</h2>
                                <Rating maxRating={5} defaultRating={3} icon='star' size='small' />
                            </div>
                            <div>
                                <span className='cart-page_green'>In Stock</span>
                            </div>
                            <div>
                                <p className='product-page__desc'></p>
                            </div>
                            <div>
                                <Label as='a' color='teal' tag>
                                    <h3>{`$${this.props.product.price}`}</h3>
                                </Label>
                            </div>
                            <div>
                                <div>
                                    <Button 
                                    onClick={this.handleAddToCart}
                                    disabled={this.state.added}
                                    content='Add to Cart'
                                    size='large'
                                    color='green'
                                    className='product-page__button'
                                    />
                                </div>
                                
                            </div>
                            </div>
                        </div>
                </Container>
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
            </div>
        )
    }
}
const mapStateToProps = (state,props) => ({
    product: state.products.find((product) => product.id ===  props.match.params.id)
});

export default  connect(mapStateToProps,undefined) (ProductView);