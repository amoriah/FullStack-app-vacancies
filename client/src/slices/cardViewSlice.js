import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  vacancy: {},
  view: false,
  vacancyStatus: 'idle',
  hasErrors: false,
};

export const cardViewSlice = createSlice({
  name: 'cardView',
  initialState,
  reducers: {
    openViewCard: (state, { payload }) => {
      state.view = true;
      state.vacancy = payload;
    },
    closeViewCard: (state) => {
      state.view = false;
      state.vacancy = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(closeVacancyFetch.pending, (state) => {
        state.vacancyStatus = 'loading';
      })
      .addCase(closeVacancyFetch.fulfilled, (state) => {
        state.vacancyStatus = 'succeeded';
      })
      .addCase(closeVacancyFetch.rejected, (state) => {
        state.vacancyStatus = 'failed';
        state.hasErrors = true;
      })
      .addCase(respondeVacancyFetch.pending, (state) => {
        state.vacancyStatus = 'loading';
      })
      .addCase(respondeVacancyFetch.fulfilled, (state) => {
        state.vacancyStatus = 'succeeded';
      })
      .addCase(respondeVacancyFetch.rejected, (state) => {
        state.vacancyStatus = 'failed';
        state.hasErrors = true;
      });
  },
});

export const { openViewCard, closeViewCard } = cardViewSlice.actions;

export const cardViewSelector = (state) => state.cardView;

export default cardViewSlice.reducer;

export const closeVacancyFetch = createAsyncThunk(
  'cardView/closeVacancyFetch',
  async (vacancy) => {
    const response = await fetch(
      `http://localhost:3001/api/vacancies/${vacancy.id}`,
      {
        method: 'put',
        body: JSON.stringify({ ...vacancy, isActive: false }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const respondeVacancyFetch = createAsyncThunk(
  'cardView/respondeVacancyFetch',
  async ({ userId, vacancyId, newResponded, newVacancies }) => {
    const response = await fetch(`http://localhost:3001/api/my-vacancies`, {
      method: 'put',
      body: JSON.stringify({ userId, vacancyId, newResponded, newVacancies }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
);
