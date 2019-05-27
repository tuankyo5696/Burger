import React,{Component} from 'react';

//import {connect} from 'react-redux'
import classes from './Signin.css';
import {Formik,Form,Field} from 'formik'   
import * as Yup from 'yup';

class SignIn extends Component {
    render(){
        const SigninSchema = Yup.object().shape({
            username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too long!')
            .required('Username is required'),
            password: Yup.string()
            .min(8, 'Too Short!')
            .max(50, 'Too long!')
            .required('Password is required'),
        })
        return(
            <div>
               <Formik 
                initialValues = {{
                    username: '',
                    password: '',
                }}
                 validationSchema = {SigninSchema}
                 onSubmit = {values => {
                        console.log(values);
                 }}>
            {({errors,touched}) => (
               <div className = {classes.To}>
                   
                     <Form className = {classes.Form} >
                     <h2>Sign in</h2>
                         <label className={classes.Label}>Username</label>
                        <Field name="username" className ={classes.Input} />
                        {errors.username && touched.username ? (
                            <div className={classes.Invalid} >{errors.username}</div>
                        ) : null}
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


export default SignIn;