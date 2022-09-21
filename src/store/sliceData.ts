import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFormatedDateFromGMTObject } from '../helpers';

export interface Track {
  id?: number;
  date: string;
  flows: 'no-flow' | 'light' | 'normal' | 'heavy';
  symptoms: any;
  mood: 'good' | 'sad' | 'frisky';
}

export interface updatedDataT {
  periodId: number;
  updatedPeriodInfo: Record<string, never>;
}

export type IState = {
  accessToken: string;
  loading: boolean;
  error: string;
  tracks: Record<number, Track>;
  users: any[];
  selectedCalendarDate: string;
  userId: number | undefined;
};
export interface User {
  login: string;
  password: string;
}

const initialState: IState = {
  accessToken: '',
  loading: false,
  error: '',
  tracks: [],
  users: [],
  selectedCalendarDate: getFormatedDateFromGMTObject(new Date()),
  userId: undefined,
};

// const URL_PREFIX = 'https://women-health-backend.herokuapp.com/api/';
const URL_PREFIX = 'http://localhost:8081/api/';

export const logout = createAsyncThunk('logout', async () => {
  const response = await fetch(URL_PREFIX + 'logout', {
    method: 'GET',
  });
  return response;
});

export const refreshToken = createAsyncThunk('refreshToken', async () => {
  const response = await fetch(URL_PREFIX + 'refresh');
  const responseJSON = await response.json();
  return responseJSON;
});

export const authenticateUser = createAsyncThunk('authenticateUser', async (user: User) => {
  const response = await fetch(URL_PREFIX + 'authentication', {
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  if (!response.ok) {
    if (response.status === 401) {
      const refreshed = await refreshToken();
      return refreshed;
    }
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const responseJSON = await response.json();
  return responseJSON;
});

export const registerUser = createAsyncThunk('registerUser', async (user: User) => {
  const response = await fetch(URL_PREFIX + 'registration', {
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
  return await response.json();
});

export const getData = createAsyncThunk('getData', async (_, thunkAPI) => {
  const state: any = thunkAPI.getState();
  const token = state.dataSliceReducer.accessToken;
  const response = await fetch(URL_PREFIX + 'periods', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  const responseJSON = await response.json();
  return responseJSON;
});

export const postData = createAsyncThunk('postData', async (newTrack: Track, thunkAPI) => {
  const state: any = thunkAPI.getState();
  const token = state.dataSliceReducer.accessToken;
  const response = await fetch(URL_PREFIX + 'periods', {
    body: JSON.stringify(newTrack),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
  });
  const responseJSON = await response.json();
  return responseJSON;
});

export const patchDataById = createAsyncThunk(
  'patchDataById',
  async (updatedData: updatedDataT, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const token = state.dataSliceReducer.accessToken;
    const response = await fetch(URL_PREFIX + `periods/${updatedData.periodId}`, {
      body: JSON.stringify(updatedData.updatedPeriodInfo),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'PUT',
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
);

const dataSlice = createSlice({
  name: 'period-data',
  initialState,
  reducers: {
    clearAll(state) {
      state.accessToken = '';
      state.tracks = [];
    },
    setSelectedCalendarDate(state, action: PayloadAction<string>) {
      state.selectedCalendarDate = action.payload;
    },
  },
  extraReducers: {
    //@ts-ignore
    [authenticateUser.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    //@ts-ignore
    [registerUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    //@ts-ignore
    [postData.fulfilled]: (state, action) => {
      state.tracks.push(...action.payload);
    },
    //@ts-ignore
    [getData.pending]: (state) => {
      state.loading = true;
    },
    //@ts-ignore
    [getData.fulfilled]: (state, action) => {
      state.tracks = action.payload;
      state.loading = false;
    },
    //@ts-ignore
    [getData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
export const { clearAll, setSelectedCalendarDate } = dataSlice.actions;
