import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = {
            ...state.user,
            username : action.payload.username,
            password : action.payload.password,
        }
    },
    clearUser : (state) => {
        state.user = {
            username: "",
            password: "",
        }
    }
  },
});

export const {setUser, clearUser} = authSlice.actions;

export default authSlice.reducer;
