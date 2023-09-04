import axios from "axios"
const userApi = axios.create({ baseURL: 'https://api.weatherbit.io/v2.0/current' });

export default userApi;