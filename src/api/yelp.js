import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer e-rLM39lHpOs6p5LZ8h_ojtVAFZEznbNCGqnPCZ-Jc90yOXWRHfzTJkS34YpBQlFPAsfZ-6ql4sFQmiOl3zhBP6jpu6vtD45HBuo1JNwz6LlgUbeKl496upQGHTSZHYx'
    }
});
