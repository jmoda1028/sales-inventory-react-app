export default function AuthHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
  
    if (token) {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        
      return headers;
    } else {
      return {};
    }
  }