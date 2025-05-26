// when creating slice we need the initial state of the slice so for this authentication we need to know if the user is logged in or not
//loading and error

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//initial state
const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialGuestID =
  localStorage.getItem("guestID") || `guest_${new Date().getTime()}`;
  localStorage.setItem("guestID", initialGuestID); // ensure guest ID is set in localStorage


const initialState = {
  user: userFromStorage,
  guestID: initialGuestID,
  loading: false,
  error: null,
};

// aysnc thunk for user login

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        userData
      );

      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", JSON.stringify(response.data.token));

      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        userData
      );

      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", JSON.stringify(response.data.token));

      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//slice

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.guestID = `guest_${new Date().getTime()}`; // reset guest ID on logout
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestID", state.guestID); // set new guest ID in localstorage
    },
    generateNewGuestID: (state) => {
      state.guestID = `guest_${new Date().getTime()}`;
      localStorage.setItem("guestID", state.guestID);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })

  },
});

export const { logout, generateNewGuestID } = authSlice.actions;

export default authSlice.reducer;