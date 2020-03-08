// Purpose - access tracker api
import axios from 'axios';

export default axios.create({
    // good for 8 hours then npm run tunnel in json-server folder to get a new http address
    baseURL: ' http://7618b9ec.ngrok.io'
});
// ngrok gives a direct connection from express api and it gives a public URL that my phone can used to get access to the express api