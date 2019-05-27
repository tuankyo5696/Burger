import React,{Component} from 'react'
import classes from './Input.css';
import {Formik,Form,Field} from 'formik'   
import * as Yup from 'yup';
class Input extends Component {
    
    render(){
        let test = {};
        const SignupSchema = Yup.object().shape({
            username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too long!')
            .required('Username is required'),
            password: Yup.string()
            .min(8, 'Too Short!')
            .max(50, 'Too long!')
            .required('Password is required'),
            email: Yup.string()
            .email('Invalid email')
            .required('Email is required')
        })
        return(
            <Formik 
                initialValues = {{
                    username: '',
                    password: '',
                    email: ''
                }}
                 validationSchema = {SignupSchema}
                 onSubmit = {values => {
                     test=values;
                     console.log(values);
                     console.log(test)
                 }}>
            {({errors,touched}) => (
               <div className = {classes.To}>
                   
                     <Form className = {classes.Form} >
                     <h2>Sign up</h2>
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
                        <label  className={classes.Label}>Email</label>
                        <Field name="email" type="email"  className ={classes.Input}/>
                        {errors.email && touched.email ? <div className={classes.Invalid}>{errors.email}</div> : null}
                        <button type="submit" className={classes.Success}>SUBMIT</button>
                    </Form>
               </div> 
            )} 
            </Formik>
        )
    }
}

export default Input