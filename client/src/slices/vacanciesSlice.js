import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const localVacancies = JSON.parse(localStorage.getItem('vacancies')) || [];

export const initialState = {
  vacancies: localVacancies,
  loading: false,
  hasErrors: false,
  status: 'idle',
};

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    updateVacancies: (state, { payload }) => {
      state.vacancies = payload;
      localStorage.setItem('vacancies', JSON.stringify(payload));
    },
    addVacancy: (state, { payload }) => {
      if (state.vacancies) state.vacancies = [...state.vacancies, payload];
      else state.vacancies = payload;
      localStorage.setItem('vacancies', JSON.stringify(state.vacancies));
    },
    loadingVacancies: (state) => {
      state.loading = true;
    },
    vacanciesSuccess: (state, { payload }) => {
      state.vacancies = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    vacanciesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postVacancy.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postVacancy.fulfilled, (state) => {
        state.status = 'succeeded';
        state.hasErrors = false;
      })
      .addCase(postVacancy.rejected, (state) => {
        state.status = 'failed';
        state.hasErrors = true;
      })
      .addCase(fetchVacancies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVacancies.fulfilled, (state) => {
        state.status = 'succeeded';
        state.hasErrors = false;
      })
      .addCase(fetchVacancies.rejected, (state) => {
        state.status = 'failed';
        state.hasErrors = true;
      });
  },
});

export const {
  updateVacancies,
  addVacancy,
  loadingVacancies,
  vacanciesSuccess,
  vacanciesFailure,
} = vacanciesSlice.actions;

export const vacanciesSelector = (state) => state.vacancies;

export default vacanciesSlice.reducer;

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async () => {
    const responce = await fetch('http://localhost:3001/api/vacancies');
    const data = await responce.json();
    return data;
  }
);

export const postVacancy = createAsyncThunk(
  'vacancies/postVacancy',
  async (
    { title, description, englishLvl, grade, tags, contacts, companyId },
    { dispatch }
  ) => {
    const response = await fetch('http://localhost:3001/api/vacancies', {
      method: 'post',
      body: JSON.stringify({
        title,
        description,
        englishLvl,
        grade,
        tags,
        contacts,
        companyId,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();

    if (!data.success) dispatch(vacanciesFailure());
    else {
      dispatch(vacanciesSuccess());
      dispatch(addVacancy(data.vacancy));
      return data;
    }
  }
);
