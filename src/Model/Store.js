// store.js
import { configureStore } from '@reduxjs/toolkit';
import titlesReducer from './Reducer/TitleReducer' // Adjust the path as needed

export const store = configureStore({
  reducer: {
    titles: titlesReducer, // Ensure this matches the slice name
  },
});
