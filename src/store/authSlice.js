import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../interceptors/axios';
import axios from '../util/api'
import {messageActions} from './messageSlice'
// import AuthService from '../components/services/auth-service';
// import axios from 'axios';


export const register = createAsyncThunk(
    'auth/register',
    async({first_name,last_name,email,password,password_confirm,role}) => {

        try {
            await axios.post('register-user/', {
                first_name,
                last_name,
                email,
                password,
                password_confirm,
                role,
            })
        }
        catch(error) {
            console.log(error);
        }
     
    }
);

// export const login = createAsyncThunk(
//     'auth/login',
//     async({email, password}) => {
//         try{
//             const response = await axios.post('login/', {
//                 email,
//                 password,
//             });
//             const token = response.data.access_token;
//             const userRole = response.data.role;
//             localStorage.setItem('token',  token);
//             localStorage.setItem('role',  userRole);

//             return token; 
//         }
//         catch(error) {
//              console.log(error);   
//         } 
//     }
  
// );


// export const login = createAsyncThunk(
//     'auth/login',
//     ({email, password}, thunkAPI) => {
//         axios.post('login/', { 
//             email: email, 
//             password: password,
//         })
//         .then(res => {
//             const dataaa = res.data
//             const token = res.data.access_token;
//             localStorage.setItem('token', token);
//             // const {detail} = res.data;
//             const user = res.data;
//             // console.log(detail);
            
//            //GET ROLE
//             axios.get(`profile_view/?email=${email}`)
//            .then(res => {
//                //GET USER DETAILS
//                 const user = res.data;
                
//                 console.log(user);
               

//                 user.map(user => {
//                     const role = user.role__name;
//                     const userId = user.id;
//                     const firstName = user.first_name;
//                     const lastName = user.last_name;
//                     localStorage.setItem('role', role);
//                     localStorage.setItem('userId', userId);
//                     localStorage.setItem('firstName', firstName);
//                     localStorage.setItem('lastName', lastName);
//             })
//            });

 
//         })
//         .catch(error => {
//             // if(err.response){
//             //     console.log(err.response.data.detail);
//             // }

//             const err = error.response.data.detail;

//             thunkAPI.dispatch(messageActions.setErrorMessage(err));

//             // console.log(err);
//             return thunkAPI.rejectWithValue(error);

//         })
            
//     }
    
// );

export const login = createAsyncThunk("auth/login", async ({email, password}, thunkAPI) => {
    try {
      let response = await axios.post('login/', {
                        email,
                        password,
                    });

                    const token = response.data.access_token;
                    localStorage.setItem('token', token);
                    localStorage.setItem("isLoggedIn", true)

                    // thunkAPI.dispatch(messageActions.clearMessage());
                    axios.get(`profile_view/?email=${email}`)
                    .then(res => {
                        //GET USER DETAILS
                         const user = res.data;
                         
                         console.log(user);
                        
                
                         user.map(user => {
                             const role = user.role__name;
                             const userId = user.id;
                            //  const firstName = user.first_name;
                            //  const lastName = user.last_name;
                             localStorage.setItem('role', role);
                             localStorage.setItem('userId', userId);
                            //  localStorage.setItem('firstName', firstName);
                            //  localStorage.setItem('lastName', lastName);
                            window.location.reload();

                         return user;   
                     })
                    })
                    .catch(error => {
                              console.log(error);
                
                                });
                    
      return response;

    } catch (error) {
        const err = error.response.data.detail;
        thunkAPI.dispatch(messageActions.setErrorMessage(err));
    //   console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  });

export const updateToken = createAsyncThunk(
    'auth/updateToken',
    async() => {

      try{
        const response = await axios.post('refresh-token/',{});

        const token = response.data.refresh_token;


        localStorage.setItem('access_token', token);

        // console.log(token);

        return token;
      }
      catch(error){
        console.log(error);
      }
        
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async(thunkAPI) => {
        try{
            await axios.post('logout/');
        }
        catch(error){
            // console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
        
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        error: false,
        loading: false,
        isAuthenticated: false,
        refreshToken: null,
        currentUser: '',
        
    },

    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
        },

        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        
    },

    extraReducers: (builder) => {
        builder
        // [register.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [register.fulfilled]: (state, action) => {
        //     state.loading = false;
        // },
        // [register.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.error;
        // },
        // [login.pending]: (state, action) => {
        //     state.loading = true;

        // },
        // [login.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.token = action.payload;
        //     state.isAuthenticated = true;
        // },
        // [login.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.isAuthenticated = false;
        //     state.error = action?.payload?.err
        // },
        // [updateToken.pending]: (state, action) => {
        //     state.loading = true;

        // },
        // [updateToken.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.refreshToken = action.payload;
        // },
        // [updateToken.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.isAuthenticated = false;
        //     state.error = action.payload;
        // },
        .addCase(login.pending, function (state) {
            console.log("pending");
            state.loading = true;
          })
          .addCase(login.fulfilled, (state, action) => {
            console.log("fullfield");
            state.loading = false;
            // state.user = action.payload;
            // state.isAuthenticated = true;
          })
          .addCase(login.rejected, (state, action) => {
            console.log("rejected");
            // console.log(action.payload);
            state.loading = false;
            state.error = true;
            // state.message = action.payload;
            // state.user = null;
          })
          // LOGOUT
          .addCase(logout.pending, function (state) {
            console.log("pending");
            state.loading = true;
          })
          .addCase(logout.fulfilled, (state, action) => {
            console.log("fullfield");
            state.loading = false;
            // state.user = action.payload;
            // state.isAuthenticated = true;
          })
          .addCase(logout.rejected, (state, action) => {
            console.log("rejected");
            // console.log(action.payload);
            state.loading = false;
            state.error = true;
            // state.message = action.payload;
            // state.user = null;
          });
    }
})

export const authActions = authSlice.actions;

export default authSlice;