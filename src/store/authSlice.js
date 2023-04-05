import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../util/api'
import {messageActions} from './messageSlice'


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

export const login = createAsyncThunk("auth/login", async ({email, password}, thunkAPI) => {
  try{
    let response = await axios.post('login/', {
                      email,
                      password,
                  });

    const token = response.data.access_token;
    localStorage.setItem('token', token);
    localStorage.setItem("isLoggedIn", true)

    axios.get(`profile_view/?email=${email}`)
      .then(res => {
        const user = res.data;
        user.map(user => {
          const role = user.role__name;
          const userId = user.id;
          localStorage.setItem('role', role);
          localStorage.setItem('userId', userId);
          window.location.reload();
        return user;   
        })
      })
      .catch(error => {
        console.log(error);
      }); 

    return response;
  } 
  catch(error){
    const err = error.response.data.detail;
    thunkAPI.dispatch(messageActions.setErrorMessage(err));

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
    .addCase(login.pending, function (state) {
        console.log("pending");
        state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      console.log("fullfield");
      state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.error = true;
    })
    .addCase(logout.pending, function (state) {
      console.log("pending");
      state.loading = true;
    })
    .addCase(logout.fulfilled, (state, action) => {
      console.log("fullfield");
      state.loading = false;
    })
    .addCase(logout.rejected, (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.error = true;
    });
  }
})

export const authActions = authSlice.actions;

export default authSlice;