import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IUsersState {
  userName: string
  userId: string
}

const initialState: IUsersState = { userName: '', userId: '' }

const userSlice = createSlice({
  name: 'period-user',
  initialState,
  reducers: {
    logInUser: (state: IUsersState, action: PayloadAction<IUsersState>) => {
      state.userName = action.payload.userName
      state.userId = action.payload.userId
    },
    logOutUser: (state: IUsersState) => {
      state.userName = ''
      state.userId = ''
    },
  },
})

export default userSlice.reducer
export const { logInUser, logOutUser } = userSlice.actions
