import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from '../slices/vacanciesSlice';
import sessionReducer from '../slices/sessionSlice';
import cardViewReducer from '../slices/cardViewSlice';
import sideBarReducer from '../slices/sideBarSlice';

export const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
    session: sessionReducer,
    cardView: cardViewReducer,
    sideBar: sideBarReducer,
  },
});
