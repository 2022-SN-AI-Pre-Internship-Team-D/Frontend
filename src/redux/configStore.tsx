import { configureStore } from '@reduxjs/toolkit';
import userIdSlice from 'redux/userID';

const store = configureStore({
  reducer: {
    userID: userIdSlice,
  },
});

// export const getUserInfo = (state: RootState) => state.userId;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
