import React, {Component} from 'react';
import classes from './ContactData.css';
import Button from './../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from './../../../axios-order';
class ContactData extends Component {
        state = {
            name: '',
            email: '',
            address: {
                street : '',
                postalCode: '',
            },
            loading : false
        }
    orderHandler = (event) => {
            event.preventDefault();
            console.log(this.props.ingredients);
            this.setState({
                loading: true
            })
                const order = {
                ingredients : this.props.ingredients,
                price : this.props.price,
                customer: {
                    name: 'Tuan',
                    address: {
                        street : 'abjlkjfl',
                        zipcode : '`12345',
                        country: 'VN'
                    },
                    email : 'anhtuan@pycogroup.com',
                    phone : '09111111111'
                },
                deliveryMethod : 'fast'
            }
            axios.post('/order.json',order)
            .then(response => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => this.setState({loading : false}))
    }

    render(){
        let form = (
            <form>
            <input type="text" className = {classes.input} name="name" placeholder="Yourname"/>
            <input type="email" className = {classes.input} name="email" placeholder="Youremail"/>
            <input type ="text" className = {classes.input}name = "text" placeholder ="Street"/>
            <input type ="text" className = {classes.input}name = "text" placeholder ="PostalCode"/>
            <Button btnType="Success" clicked= {this.orderHandler} >ORDER</Button>
            </form>
        )
        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className = {classes.ContactData}>
                <h1> Enter your Contact data:</h1>
                {form}    
            </div>
        )
    }
}

export default ContactData