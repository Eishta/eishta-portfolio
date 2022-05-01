import axios from "axios";

export default axios.create({
    baseURL: 'https://eishta-portfolio-server-app.herokuapp.com',
})