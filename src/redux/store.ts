import { configureStore } from '@reduxjs/toolkit';
import fabricReducer from './reducers/fabricSlice';
import formReducer from './reducers/form.reducer';

const store = configureStore({
  reducer: {
    fabrics: fabricReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
