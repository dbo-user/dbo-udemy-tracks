// Purpose - access tracker api
import axios from 'axios';

export default axios.create({
    // good for 8 hours then npm run tunnel in json-server folder to get a new http address
    baseURL: 'http://d94b30e0.ngrok.io'
});
// ngrok gives a direct connection from express api and it gives a public URL that my phone can used to get access to the express api