import axios from "axios";

export const api = axios.create({
    baseURL: 'http://10.6.75.64:3333'
});
