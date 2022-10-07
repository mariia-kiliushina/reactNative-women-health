import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFormatedDateFromGMTObject } from '../helpers';

export interface IPeriod {
  id?: number;
  date: string;
  flows: 'no-flow' | 'light' | 'normal' | 'heavy';
  mood: 'good' | 'sad' | 'frisky';
}

export type IState = {
  loading: boolean;
  error: string | undefined;
  periods: IPeriod[];
  selectedCalendarDate: string;
};

export interface updatedDataT {
  periodId: number;
  updatedPeriodInfo: Record<string, unknown>;
}

const initialState: IState = {
  loading: false,
  error: '',
  periods: [],
  selectedCalendarDate: getFormatedDateFromGMTObject(new Date()),
};

// const URL_PREFIX = 'https://women-health-backend.herokuapp.com/api/';
const URL_PREFIX = 'http://localhost:8081/api/';

export const logout = createAsyncThunk('logout', async () => {
  const response = await fetch(URL_PREFIX + 'logout', {
    method: 'GET',
  });
  return response;
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

export const postData = createAsyncThunk('postData', async (newTrack: IPeriod, thunkAPI) => {
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
  name: 'periods-data',
  initialState,
  reducers: {
    clearAll(state) {
      state.periods = [];
    },
    setSelectedCalendarDate(state, action: PayloadAction<string>) {
      state.selectedCalendarDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postData.fulfilled, (state, action: any) => {
      state.periods.push(...action.payload);
    });
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state: IState, action: PayloadAction<any>) => {
      state.periods = action.payload;
      state.loading = false;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default dataSlice.reducer;
export const { clearAll, setSelectedCalendarDate } = dataSlice.actions;
