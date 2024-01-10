// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice with an initial state and a reducer
const valueSlice = createSlice({
  name: 'value',
  initialState: { value: '' },
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Configure the Redux store with the created slice
export const store = configureStore({
  reducer: valueSlice.reducer,
});

// Export the action creator for the updateValue action
export const { updateValue } = valueSlice.actions;

