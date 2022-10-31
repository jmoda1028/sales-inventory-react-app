import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './Custom.css';
import App from './App';
// import axios from 'axios';
// import './util/api'
// import './interceptors/axios';
// import axiosInstance from './interceptors/axios';

// axios.defaults.baseURL = 'http://localhost:8000/api/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter >
        <App />
    </BrowserRouter>
  </Provider>
);
