import axios from "axios";

export const _axios = axios.create({
    baseURL:  	'https://api.adviceslip.com/'
})