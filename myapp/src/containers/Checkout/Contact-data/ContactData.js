import React, {Component} from 'react';
import classes from './ContactData.css';
import Button from './../../../components/UI/Button/Button';
class ContactData extends Component {
        state = {
            name: '',
            email: '',
            address: {
                street : '',
                postalCode: '',
            }
        }
    render(){
        return(
            <div className = {classes.ContactData}>
                <h1> Enter your Contact data:</h1>
                <form>
                    <input type="text" name="name" placeholder="Yourname"/>
                    <input type="email" name="email" placeholder="Youremail"/>
                    <input type ="text" name = "text" placeholder ="Street"/>
                    <input type ="text" name = "text" placeholder ="PostalCode"/>
                    <Button btnType="Success">ORDER</Button>
                   
                </form>
            </div>
        )
    }
}

export default ContactData