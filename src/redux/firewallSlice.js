// firewallSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firewalls: [],
  selectedFirewall: null,
};

const firewallSlice = createSlice({
  name: 'firewall',
  initialState,
  reducers: {
    setFirewalls(state, action) {
      state.firewalls = action.payload;
    },
    setSelectedFirewall(state, action) {
      state.selectedFirewall = action.payload;
    },
  },
});

export const { setFirewalls, setSelectedFirewall } = firewallSlice.actions;
export default firewallSlice.reducer;
