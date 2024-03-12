import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user') || 'null') || {
        id: null,
        email: null,
        token: null,
        role: null
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.user.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = { ...action.payload };
            console.log("user from state", state.user);
        },
    },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
