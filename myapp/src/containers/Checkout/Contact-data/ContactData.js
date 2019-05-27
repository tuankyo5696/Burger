import React, {Component} from 'react';
import classes from './ContactData.css';

import axios from './../../../axios-order';
import {Formik,Form,Field} from 'formik'   
import * as actions from './../../../store/actions/index'
import withErrorHandler from './../../../hoc/withErrorHandle/withErrorHandle';
import {connect} from 'react-redux'
import * as Yup from 'yup';
class ContactData extends Component {
      state = {
          orderForm : {}
      }
    orderHandler = (orderData)  => {
       
            
            const order = {
                ingredients : this.props.ingredients,
                price : this.props.price,
                orderData: orderData
 
            }
            console.log(order)
            this.props.onOrderBurger(order);
        }
         

    render(){
        const ContactSchema = Yup.object().shape({
            yourname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too long!')
            .required('Username is required'),
            street : Yup.string()
            .max(100, 'Too long!')
            .required('Password is required'),
            phone : Yup.number()
            .positive('')
            .integer('')
            .required('Phone number is required'),
            email: Yup.string()
            .email('Invalid email')
            .required('Email is required')
        })
     
    
        return(
            <div className = {classes.ContactData}>
                 <Formik 
                initialValues = {{
                    yourname: '',
                    street: '',
                    phone: '',
                    email: ''
                }}
                 validationSchema = {ContactSchema}
                 onSubmit = {
                  (values) =>{
                 this.orderHandler(values)
                   }}>
            {({errors,touched}) => (
               <div className = {classes.Form}>
                   <h2>Contact Data</h2>
                     <Form >
                         <label className={classes.Label}>Name</label>
                        <Field name="yourname" className ={classes.Input} />
                        {errors.yourname && touched.yourname ? (
                            <div className={classes.Invalid} >{errors.yourname}</div>
                        ) : null}
                        <label  className={classes.Label}>Street</label>
                        <Field name="street" className ={classes.Input} />
                        {errors.street && touched.street ? (
                            <div className={classes.Invalid} >{errors.street}</div>
                        ) : null}
                         <label  className={classes.Label}>Phone</label>
                         <Field name="phone" className ={classes.Input} />
                        {errors.phone && touched.phone ? (
                            <div className={classes.Invalid} >{errors.phone}</div>
                        ) : null}
                         
                        
                        <label  className={classes.Label}>Email</label>
                      
                        <Field name="email" type="email"  className ={classes.Input}/>
                        {errors.email && touched.email ? <div className={classes.Invalid}>{errors.email}</div> : null}
                        <button type="submit" className={classes.Success}>ORDER</button>
                    </Form>
               </div> 
            )} 
            </Formik>   
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));