import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './slices/homePage.slice';

const store = configureStore({
  reducer: {
    homePage: homePageSlice.reducers,
  }
});


export default store;