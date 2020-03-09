// Purpose - access tracker api and the back-end
// use Axios to access the common HTTP or HTTPS Api requests
// provides support for request and response
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    // good for 8 hours then npm run tunnel in json-server folder to get a new http address
    baseURL: 'http://5ab9c49b.ngrok.io'
});
// ngrok gives a direct connection from express api and it gives a public URL that my phone can used to get access to the express api

// all of this to add or create a new track
instance.interceptors.request.use(
    async (config) => { // called automatically with every request
        const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            } // end if
            return config;
    }, 
    (err) => {
        return Promise.reject(err);  // called automatically with an error with the request
    } 
); // end interceptors

export default instance;