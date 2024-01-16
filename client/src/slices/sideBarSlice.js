import { createSlice } from '@reduxjs/toolkit';

const stateWidth = {
  true: '200px',
  false: '60px',
};

export const initialState = {
  width: '200px',
  open: true,
};

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    mooveBar: (state) => {
      state.open = !state.open;
      state.width = stateWidth[state.open];
    },
  },
});

export const { mooveBar } = sideBarSlice.actions;

export const sideBarSelector = (state) => state.sideBar;

export default sideBarSlice.reducer;
