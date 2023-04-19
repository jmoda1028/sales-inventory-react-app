import axios from 'axios';


export default axios.create({
  // withCredentials: true,
  // baseURL: "https://sales-and-inventory-api.herokuapp.com/api/",
  baseURL: "https://sales-and-inventory-api-new.vercel.app/api/",
  // baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
  }
});
