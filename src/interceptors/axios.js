import axios from "axios";
import TokenService from "./TokenService";
import {useDispatch} from "react-redux";
import { authActions } from '../store/authSlice';

// axiosInstance.defaults.baseURL = 'http://localhost:8000/api/';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
      "Content-Type": "application/json",
    },
  });

// Before making request, do the following
instance.interceptors.request.use(
    (config) => {
      // console.log("getLocalAccessToken", TokenService.getLocalAccessToken());
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

// With response data, do the following
instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
  
      if (err.response) {
        // access token expired
        if (err.response.status === 403 && !originalConfig._retry) {
          // handle infinite loop
          originalConfig._retry = true;
  
          // console.log("refresh", TokenService.getLocalRefreshToken());
          try {
            const rs = await instance.post('refresh-token/', {
              refreshToken: TokenService.getLocalRefreshToken(),
            });
  
            console.log("response", rs);
  
            const { refresh_token } = rs.data;
  
            console.log("updateNewAccessToken", refresh_token);
            TokenService.updateNewAccessToken(refresh_token);
  
            return instance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
  
        // refresh token expired
      }
  
      return Promise.reject(err);
    }
  );  

let refresh = false;

axiosInstance.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 403 && !refresh) {
        refresh = true;

        const response = await axios.post('refresh-token/', {}, {withCredentials: true});

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});

// let refresh = false;
// export const UpdateToken = (authToken) => {
//     const dispatch = useDispatch();

//     dispatch(authActions.setToken(authToken));

// }

// axiosInstance.interceptors.response.use(resp => resp, async error => {
//     if (error.response.status === 403 && !refresh) {
//         refresh = true;

//         const response = await axiosInstance.post('refresh-token/', {}, {withCredentials: true});

//         if (response.status === 200) {
//             const authToken = response.data.token;
            
//             localStorage.setItem('refresh_token', authToken);
//             console.log(authToken);
//             axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

//             // UpdateToken(refreshToken);

//             return axiosInstance(error.config);
//         }
//     }
//     refresh = false;
//     return error;
// });


// export default axiosInstance;