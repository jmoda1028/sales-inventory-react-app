import axios from 'axios';

export default axios.create({
  // withCredentials: true,

  baseURL: "https://sales-and-inventory-api.herokuapp.com/api/",
  
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
  }
});
