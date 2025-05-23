// when creating slice we need the initial state of the slice so for this authentication we need to know if the user is logged in or not
//loading and error

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initial state
const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialGuestID =
  localStorage.getItem("guestID") || `guest_${new Date().getTime()}`;
locaStorage.setItem("guestID", initialGuestID);

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
