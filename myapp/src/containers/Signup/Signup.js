import React,{Component} from 'react';

import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';
import classes from './Signup.css';
import {Formik,Form,Field} from 'formik'   
import * as Yup from 'yup';
class Signup extends Component {
 
    submitHandler = (account) => {
        this.props.onAuth(account.email,account.password,this.props.isSignup);
        console.log(this.props.isSignup);
    }
    render(){
    
        const SignupSchema = Yup.object().shape({
            password: Yup.string()
            .min(8, 'Too Short!')
            .max(50, 'Too long!')
            .required('Password is required'),
            email: Yup.string()
            .email('Invalid email')
            .required('Email is required')
        })
        let errorMessage = null;
        if(this.props.error){
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return(
            <div>
                {errorMessage}
                 <Formik 
                initialValues = {{
                    
                    password: '',
                    email: ''
                }}
                 validationSchema = {SignupSchema}
                 onSubmit = {values => {
                    this.submitHandler(values)
                   alert('Create account successfully')
                 }}>
            {({errors,touched}) => (
               <div className = {classes.To}>
                   
                     <Form className = {classes.Form} >
                     <h2>Sign up</h2>
                     <label  className={classes.Label}>Email</label>
                        <Field name="email" type="email"  className ={classes.Input}/>
                        {errors.email && touched.email ? <div className={classes.Invalid}>{errors.email}</div> : null}
                         <label  className={classes.Label}>Password</label>
                        <Field name="password" type="password"className ={classes.Input} />
                        {errors.password && touched.password ? (
                            <div className={classes.Invalid} >{errors.password}</div>
                        ) : null}
                        
                        <button type="submit" className={classes.Success}>SUBMIT</button>
                    </Form>
               </div> 
            )} 
            </Formik>
            </div>
           
        )
    }
}

const mapStateToProps = state  => {
    return {
      loading: state.auth.loading,
      error: state.auth.error ,
      isSignup: state.auth.isSignup    
    }
}

const mapDispatchToProps  = dispatch  => {
    return {
        onAuth : (email,password,isSignup) => dispatch(actions.auth(email,password,isSignup))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);