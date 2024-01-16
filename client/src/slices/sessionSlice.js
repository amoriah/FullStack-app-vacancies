import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const clearSession = {
  id: 0,
  name: '',
  login: '',
  vacancies: [],
};

const sessionObject = JSON.parse(localStorage.getItem('currentSession'));
const sessionType = localStorage.getItem('sessionType') || 'user';
const isLogin = !!localStorage.getItem('isAuth');
const currentSession = sessionObject || clearSession;

export const initialState = {
  type: sessionType,
  isAuth: isLogin,
  session: currentSession,
  loading: false,
  hasErrors: false,
  status: 'idle',
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    respondeVacancy: (state, { payload }) => {
      if (!state.session.vacancies.length) {
        const updatedVacancies = {
          ...state.session,
          vacancies: [payload],
        };
        localStorage.setItem(
          'currentSession',
          JSON.stringify(updatedVacancies)
        );
        state.session.vacancies = [payload];
      } else {
        const updatedVacancies = {
          ...state.session,
          vacancies: [...state.session.vacancies, payload],
        };
        localStorage.setItem(
          'currentSession',
          JSON.stringify(updatedVacancies)
        );
        state.session.vacancies = [...state.session.vacancies, payload];
      }
    },
    cancelResponde: (state, { payload }) => {
      const filterVacancies = state.session.vacancies.filter(
        (id) => id !== payload
      );
      const updatedVacancies = {
        ...state.session,
        vacancies: filterVacancies,
      };
      localStorage.setItem('currentSession', JSON.stringify(updatedVacancies));
      state.session = updatedVacancies;
    },
    loginReducer: (state, { payload }) => {
      state.session = payload;
      state.isAuth = true;

      localStorage.setItem('currentSession', JSON.stringify(payload));
      localStorage.setItem('isAuth', true);
    },
    logoutReducer: (state) => {
      localStorage.clear();
      state.type = 'user';
      state.isAuth = false;
      state.session = clearSession;
    },
    loadingSession: (state) => {
      state.loading = true;
      state.status = 'loading';
    },
    updateType: (state, { payload }) => {
      state.type = payload;
      localStorage.setItem('sessionType', payload);
    },
    sessionSuccess: (state, { payload }) => {
      state.session = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    sessionFailure: (state) => {
      state.loading = false;
      state.status = 'failed';
      state.hasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerFetch.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(registerFetch.rejected, (state) => {
        state.status = 'failed';
        state.hasErrors = true;
      });
  },
});

export const {
  respondeVacancy,
  cancelResponde,
  loginReducer,
  logoutReducer,
  loadingSession,
  updateType,
  sessionSuccess,
  sessionFailure,
} = sessionSlice.actions;

export const sessionSelector = (state) => state.session;

export default sessionSlice.reducer;

export const registerFetch = createAsyncThunk(
  'session/registerFetch',
  async ({ name, login, password, repeat }, { getState }) => {
    const state = getState();
    const type = state.session.type;

    const response = await fetch('http://localhost:3001/api/signup', {
      method: 'post',
      body: JSON.stringify({ type, name, login, password, repeat }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
);

export const loginFetch = createAsyncThunk(
  'session/loginFetch',
  async ({ type, login, password }, { dispatch }) => {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'post',
      body: JSON.stringify({ type, login, password }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.success) {
      const sessionVacancies =
        type === 'user'
          ? data.user.respondedVacancies
          : data.user.createdVacancies;
      const currentSession = {
        id: data.user.id,
        name: data.user.name,
        login: data.user.login,
        vacancies: sessionVacancies,
      };
      dispatch(loginReducer(currentSession));
    }
    return data;
  }
);
