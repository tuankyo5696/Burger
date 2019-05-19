import axios from 'axios';

// Creating the axios instance
const instance  = axios.create({
    baseURL:  'https://react-my-burger-3e7aa.firebaseio.com/'
})

export default instance;

