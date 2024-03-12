import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authReducer from '../redux/authSlice';
import firewallSlice from '../redux/firewallSlice';


const rootReducer = combineReducers({
  auth: authReducer,
 firewall:firewallSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
