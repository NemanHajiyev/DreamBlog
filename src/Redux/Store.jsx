import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './BlogSlice';

export const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
})