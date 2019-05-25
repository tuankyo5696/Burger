import React,{Component} from 'react';


import Input from './../../components/UI/Form/Input'
class Signup extends Component {
    state ={
        username : '',
        password : '',
        email : ''
    }
    render(){
        return(
            <div>
                <Input/>
            </div>
        )
    }
}

export default Signup;