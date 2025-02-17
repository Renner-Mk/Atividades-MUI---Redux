import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; 

import  bruxosSlice  from "./slices/bruxos";
import  paginantionSlice  from "./slices/Paginantion";


const rootReducer = combineReducers({
    character: bruxosSlice,
    pagination: paginantionSlice,
})

export const persistConfig  = persistReducer({
    key: 'students',
    storage
}, rootReducer)