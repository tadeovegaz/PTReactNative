import axios from "axios"
const userApi = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' });

export default userApi;